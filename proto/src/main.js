import loginPage from "./js/pages/login/login.js"
import homePage from "./js/pages/home/home.js"
import header from "./js/layout/header.js"
console.log('main.js') 
/* 
    la valeur entre parenthèses d'appel de la méthode log est 
    visible dans la console du navigateur 
    - clic droit sur la page du navigateur
    - inspecter 
    - onglet console 

    dès que vous voyez un . ce qui est devant est un objet donc console 
    est un objet 
    
*/


/*

USER STORY : Quand je suis à la racine de l'application, je veux voir la page d'accueil

*/

/* 
    Tout d'abord on va définir une fonction dont la tâche sera de 
    retourner une chaîne de caractères qui sera interprétée en html 
    et créera l'interface utilisateur de la page d'accueil
*/


/*
    La fonction ci-dessous a une tâche plus spécifique : elle créé un header 
    et affiche la valeur de l'argument qu'on lui passe

    L'intérêt d'utiliser une fonction qui admet un paramètre c'est qu'en fonction de celui-ci 
    elle produira un résultat différent. Elle pourra donc être utilisée dans différentes situations
*/



/*

    L'idée c'est que si vous voulez présenter sur la page Web la valeur retournée par 
    la fonction homePage, vous allez devoir affecter cette valeur à la propriété innerHTML
    d'un élément HTML qui existe sur la page.

    En l'occurrence l'élément HTML ayant l'id root existe on va donc assigner la valeur retournée par 
    la fonction homePage() à sa propriété innerHTML

*/
const root = document.getElementById('root')
root.innerHTML = header()
root.innerHTML += homePage()

/*  à cette ligne 107 , 
    je suis certain que l'interface a été créée donc que le bouton à l'identifiant 
    "home-login-button" existe

    Je vais donc maintenant m'occuper non plus de la logique de présentation, 
    mais de la logique métier, je vais faire en sorte que le bouton fonctionne

*/

const homeLoginButton = document.getElementById('home-login-button')

homeLoginButton.addEventListener('click', function(){
    // lorsqu'on clique sur le bouton cette instruction s'exécute elle tranforme le contenu de root
    // en la valeur retournée par loginPage() juste après avoir mis celle retournée par header() et interprêtée en HTML via innerHTML
    root.innerHTML = header()
    root.innerHTML += loginPage() // notez le += cela signifie qu'on ajoute qqch en plus de ce qui existait déjà
    
    const inputEmail = document.getElementById("email")
    inputEmail.addEventListener("input", (e) => {

        // chaque fois que le champ de saisi qui concerne l'identifiant reçoit un input, l'évélement se réalise et cette fonction se déclenche et l'instruction s'exécute 
        // affichant dans la console du navigateur les caractères présents dans le champ de saisi
        console.log('e.target.value', e.target.value)
    })


})






