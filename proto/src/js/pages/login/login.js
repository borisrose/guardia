import formComponent from "../../components/form/form.js"
import titleComponent from "../../components/title/title.js"

function loginPage () {
    document.getElementById('title-page').textContent = "Login | Page"
    const formData = {
        
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


    return (
        `
            <main class="main login__main">
                ${titleComponent('Page de Connexion')}
                <section>
                    ${formComponent(formData)}
                </section>
            </main>
        
        `
    )

}


export default loginPage