function buttonComponent (data) {

    /* ici data est un objet. Pourquoi ? Parce qu'un objet peut contenir plusieurs valeurs
        or j'ai plusieurs valeurs à donner à l'élément HTML en question :
        - un type
        - un textContent
        - un id 

        on part du principe que data contient tout cela 

        donc il y aura un data.type, data.id data.textContent 

    */

    

    return `
        <button
            type="${data.type}"
            id="${data.id}"
            class="button custom-button"
        >
            ${data.textContent}
        </button>
    
    `
}

export default buttonComponent