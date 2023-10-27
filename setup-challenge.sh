#!/bin/bash

# Vérifie si un argument (le chemin du dossier) a été fourni
if [ $# -eq 0 ]; then
    echo "Usage: $0 <chemin_du_dossier>"
    exit 1
fi

# Direction vers le dossier du challenge
cd "$1" || exit 1

# Clone du ReactModele
git clone https://github.com/O-clock-Lucy/React-modele.git

# Copie des fichiers cachés et non-cachés présents à la racine du modèle
# Note : des alertes sont affichées à propos de dossiers ignorés, c'est normal
cp -n ../React-modele/{.*,*} .

# Copie (récursive) des dossiers src/, config/ et public/
# Note : des alertes peuvent être affichées à propos de fichiers ignorés, c'est normal
cp -rn ../React-modele/{src,config,public} .

# Installation des dépendances listées dans le package.json
yarn

# Lancement de Visual Studio Code
code .

# Lancement du serveur de développement
yarn start

#Copiez le script dans le projet git-cloné initialmeent
#Donnez les permissions d'exécution : chmod +x setup-challenge.sh
#Exécutez le script: ./setup-challenge.sh /chemin/vers/le/repertoire
#Le chemin vers le repertoire correspond au repertoire du projet et non à celui du React-Modele