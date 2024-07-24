# Explications

## Proto

A l'intérieur de ce fichier vous allez voir que j'ai découpé le main.js
autrement dit au lieu d'avoir un seul fichier qui contient tout j'ai modulé le code 
J'ai créé des modules ( différnetes fichiers ) que j'importe dans d'autres pour pouvoir les utiliser dedans.
Cette une architecture modulaire qui est beaucoup plus maintenable qu'un gros bloc sans cohérence réelle.

### Le dossier js 

Il contient le dossiers components qui contient les composants réutilisables partout dans l'application indépedamment de la page sur laquelle on est:
- le bouton
- l'input
- le formulaire 
- une en-tête 

Il contient également le dossier pages qui contient les composants pages qui vont passer des valeurs aux composants réutilisables enfants vous allez voir cela du côté du composant login page qui va transmettre en argument à la fonction formComponent() un objet rempli de valeurs qu'il va ensuite transmettre lui-même à d'autres composants.  


## Le dossier css

Pas besoin de le regarder