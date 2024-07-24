import buttonComponent from "../button/button.js"
import inputComponent from "../input/input.js"

function formComponent (data) {

    /*
        Quand je définis cette fonction je sais déjà quelle va être la structure de data
        il y aura : {
        
            id: "login-form",
            inputs : [
                {
                    id: "email",
                    placeholder: "Entrer votre identifiant",
                    type: "email"
                }, 
                {
                    id: "password",
                    placeholder: "Entrer votre mot de passe",
                    type: "password"
                }
            
            ],
            buttons: [
                {
                    id: "submit-button",
                    type: "submit",
                    textContent: "Se connecter"
                },
                {
                    id: "reset-button",
                    type: "reset",
                    textContent: "Réinitialiser"
                
                }
            
            ]
        }
    
    */

    return (`
        
        <form id="${data.id}" class="form custom-form">
            <section class="form__inputs">
            <!-- 

                ceci est un commentaire : ce que j'écris en-dessous est la chose suivante:

                pour chacun des éléments du tableau inputs (voir data.inputs) 
                tu vas afficher à sa place dans un nouveau tableau la valeur retournée par la fonction inputComponent() 
                quand on lui passe l'élément en question comme argument 

                vu que c'est un tableau je veux le convertir en chaînes de caractères donc j'utilise la méthode join() 
                à laquelle je passe une chaîne de caractères vide synonomye que je veux que les éléments du tableau de inputComponent()s ne soient pas séparés par une virgule
                mais pas rien ("")
            
            -->
                ${data.inputs.map((input) => inputComponent(input)).join("")}
            </section>
            <section class="form__buttons">
                ${data.buttons.map((button) => buttonComponent(button)).join("")}
            </section>
        
        </form>    
        
    `)

}


// cette ligne me permet d'utiliser cette fonction ailleurs que dans ce fichier
export default formComponent