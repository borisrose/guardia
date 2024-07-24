import buttonComponent from "../../components/button/button.js"
import titleComponent from "../../components/title/title.js"

function homePage () {
    document.getElementById('title-page').textContent = "Home | Page"
    return `

        <main class="main home__main"> 
            ${titleComponent('Page d\'accueil')}
            <section>
                ${buttonComponent({
                    type: "button",
                    textContent: "Se connecter",
                    id:"home-login-button"
                })}
            </section>
        </main>

    `
}

export default homePage