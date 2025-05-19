# # #JAVASCRIPT

# # Réalisation d'un système dynamique en Javascript pour afficher à partir d'un fichier JSON une liste de voiture

jQuery est inclus dans le projet localement
JSON : les données du projet sont stockées dasn le dossier datas.json 
GSAP: pour animer la page le projet utilise le framwork "GSAP"

# # installation

pour installer le projet la commande "git remote ..."
pour visualiser sur votre navigateur, il est conseiller d'utiliser l'extension "live server"

# # Déroulement

![image](https://github.com/user-attachments/assets/c6801048-263f-4b7d-9355-34f27b3ae0b4)

Au déclenchement de la fonction "Ready"
  -déclenchement de la fonction pour récupérer au format "JSON" les données
    -1er évenement (done): fonction qui prend en paramètre les données JSON 
      - déclaration d'une variable qui va stocker le container la liste des voitures
      - déclaration d'une variable qui récupère à partie du fichier JSON une liste de voiture
      - utilisation d'un "foreach" pour parcourir la liste des voitures et elle prend un paramètres qui est le descendant de la liste et éxecute une fonctionfléchée
        -déclaration d'une constante qui contient une injection HTML qui permet la structure d'une carte de la liste.
        -pour intégrer dynamiquement les variables de la carte nous utilisons la fonction intégrer à jQuery
        -ajout de la constante au parent qui contient les cartes 
    -2ème événement (fail) récupère l'erreur et affiche dans la console ("Erreur de chargement JSON:" +erreur )
