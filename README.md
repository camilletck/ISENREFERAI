# ReferAI 🏆🎥

ReferAI est un outil d'analyse vidéo basé sur l'IA permettant d'identifier les joueurs, le ballon et les temps de possession pour chaque équipe dans une séquence de match. Grâce à des algorithmes avancés de suivi et d'analyse, ReferAI fournit des insights détaillés sur la dynamique du jeu.

## 📌 Fonctionnalités

- **Interface Homme Machine** ✋🖱️  
  Interface créée avec Flask, pour un rendu et un visuel plus propre.

- **Identification des joueurs et du ballon** 🎯  
  Détection des joueurs et du ballon sur chaque frame de la vidéo.  

- **Suivi des mouvements** 🏃‍♂️  
  Tracking des joueurs et estimation de leurs positions en temps réel.  

- **Estimation du mouvement de la caméra** 🎥  
  Correction des déplacements de la caméra pour affiner les trajectoires.  

- **Transformation de vue** 🔄  
  Ajustement des perspectives pour une meilleure analyse des positions sur le terrain.  

- **Estimation de la vitesse et des distances parcourues** ⏱️  
  Ajout des métriques de déplacement des joueurs et du ballon.  

- **Attribution des équipes** ⚽  
  Reconnaissance des couleurs de maillot et assignation des joueurs à leur équipe.  

- **Identification de la possession du ballon** 🏆  
  Détection du joueur en possession du ballon et suivi des temps de contrôle par équipe.  

## 🚀 Installation et exécution

### 1️⃣ Prérequis  
- Python 3.x  
- OpenCV, NumPy, PyTorch
- Ultralytics, Supervision, Pandas, Roboflow
- Flask, uuid, webbrower, threading

### 2️⃣ Installation  
Clonez le dépôt et installez les dépendances :  

```bash
git clone https://github.com/camilletck/referai.git
cd referai
pip install -r requirements.txt
```

### 3️⃣ Exécution  

Placez vos vidéos d’entrée dans le dossier `input_videos/` et lancez le script principal :  

```bash
python app.py
```

La vidéo annotée sera sauvegardée dans `output_videos/` et affichée sur le site web.  


## 📚 Modules utilisés

Le projet utilise plusieurs modules avancés :

- **YOLO** : Modèle d'IA pour la détection d'objets
- **KMeans** : Segmentation des pixels et détection des couleurs de maillot
- **Optical Flow** : Mesure du mouvement de la caméra
- **Perspective Transformation** : Représentation de la profondeur et de la perspective
- **Calcul de vitesse et de distance** par joueur

Le projet utilise plusieurs modules avancés :

- **YOLO** : Modèle d'IA pour la détection d'objets
- **KMeans** : Segmentation des pixels et détection des couleurs de maillot
- **Optical Flow** : Mesure du mouvement de la caméra
- **Perspective Transformation** : Représentation de la profondeur et de la perspective
- **Calcul de vitesse et de distance** par joueur

## 📚 Structure du projet  

```
ReferAI/
│── camera_movement_estimator/   # Estimation des mouvements de caméra
│   ├── __init__.py
│   └── camera_movement_estimator.py  
│
│── player_ball_assignment/       # Détection de possession du ballon
│   ├── __init__.py
│   └── player_ball_assigner.py  
│
│── speed_and_distance_estimator/ # Calcul des vitesses et distances
│   ├── __init__.py
│   └── speed_and_distance_estimator.py  
│
│── team_assigner/                # Assignation des joueurs aux équipes
│   ├── __init__.py
│   └── team_assigner.py  
│
│── trackers/                     # Suivi des objets (ballon, joueurs)
│   ├── __init__.py
│   └── trackers.py  
│
│── view_transformer/              # Transformation de la perspective
│   ├── __init__.py
│   └── view_transformer.py  
│
│── utils/                         # Fonctions utilitaires
│   ├── __init__.py
│   └── bbox_utils.py
│
│── development_and_analysis/       # Analyses et tests
│   └── color_assignment.ipynb
|
│── website/                        # Fonctions du site web
│   ├── app.py
│   └── static
|       └── output
|       └── scripts
|           └── script.js
|       └── uploads
|       └── background.jpg
|       └── logo.png
|       └── style.css
|       └── style2.css
│   └── templates
|       └── index.html
|       └── result.html
│
│── input_videos/                   # Vidéos d'entrée
│── output_videos/                  # Résultats annotés
│── models/                         # Modèle YOLO pour la détection (best.pt)
│── stubs/                          # Fichiers intermédiaires pour le debug
│── main.py                         # Script principal
│── requirements.txt                 # Dépendances du projet
```

## 📌 À venir  
- Amélioration du modèle de reconnaissance d’équipe  
- Ajout de statistiques avancées sur le match  
- Interface graphique pour une visualisation interactive  


## 👥 Contributeurs  
Arthur PRIGENT, Alexis GOURANTON, Alexandre GUIGANTON, Camille TACK

Tous droits réservés - © 2025

