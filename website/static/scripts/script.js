document.addEventListener("DOMContentLoaded", function () {
  const video1 = document.getElementById("video1");
  console.log("Vidéo détectée :", video1);  
  const zoomArea = document.getElementById("zoom-area");
  const zoomCanvas = document.createElement("canvas");
  const ctx = zoomCanvas.getContext("2d");
  zoomArea.appendChild(zoomCanvas);

  zoomCanvas.width = zoomArea.clientWidth;
  zoomCanvas.height = zoomArea.clientHeight;

  let mouseX = 0;
  let mouseY = 0;
  let isMouseOver = false;

  function updateZoom() {
      if (!isMouseOver) return;

      const rect = video1.getBoundingClientRect();
      const zoomFactor = 2;
      const zoomSize = 100;

      ctx.clearRect(0, 0, zoomCanvas.width, zoomCanvas.height);
      ctx.drawImage(
          video1,
          Math.max(0, mouseX - zoomSize / 2) * (video1.videoWidth / rect.width),
          Math.max(0, mouseY - zoomSize / 2) * (video1.videoHeight / rect.height),
          zoomSize * (video1.videoWidth / rect.width),
          zoomSize * (video1.videoHeight / rect.height),
          0, 0,
          zoomCanvas.width, zoomCanvas.height
      );

      requestAnimationFrame(updateZoom);
  }

  video1.addEventListener("mousemove", function (event) {
      const rect = video1.getBoundingClientRect();
      mouseX = event.clientX - rect.left;
      mouseY = event.clientY - rect.top;
      isMouseOver = true;
  });

  video1.addEventListener("mouseleave", function () {
      isMouseOver = false;
      ctx.clearRect(0, 0, zoomCanvas.width, zoomCanvas.height);
  });

  video1.addEventListener("play", function () {
      requestAnimationFrame(updateZoom);
  });
});