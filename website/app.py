from flask import Flask, request, render_template, send_from_directory, redirect, url_for
import os
import subprocess
import uuid  
app = Flask(__name__)
import webbrowser
import threading

UPLOAD_FOLDER = "website/static/uploads"
OUTPUT_FOLDER = "website/static/output"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(OUTPUT_FOLDER, exist_ok=True)

@app.route("/")
def index():
    return render_template("index.html")

def open_browser():
    webbrowser.open_new("http://127.0.0.1:5000/")

@app.route("/upload", methods=["POST"])
def upload():
    if "video" not in request.files:
        return "Aucune vidéo téléchargée", 400
    
    video = request.files["video"]
    
    video_filename = f"{uuid.uuid4()}.mp4"
    input_path = os.path.join(UPLOAD_FOLDER, video_filename)
    output_path = os.path.join(OUTPUT_FOLDER, f"processed_{video_filename}")

    video.save(input_path)

    subprocess.run(['python', 'main.py', input_path, output_path])

    return redirect(url_for('result', input_video=video_filename, output_video=f"processed_{video_filename}"))

@app.route("/output/<filename>")
def output_video(filename):
    return send_from_directory(OUTPUT_FOLDER, filename)

@app.route("/result")
def result():
    input_video = request.args.get('input_video')
    output_video = request.args.get('output_video')
    
    return render_template("result.html", input_video=input_video, output_video=output_video)

if __name__ == "__main__":
    threading.Timer(1, open_browser).start()  
    app.run(debug=True)
