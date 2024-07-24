function inputComponent (data) {
    return `
        <article class="custom-input">
            <label for="${data.id}"></label>
            <input 
                type="${data.type}" 
                placeholder="${data.placeholder}"
                id="${data.id}"    
            />
        </article>
    
    `
}


// cette ligne me permet d'utiliser cette fonction ailleurs que dans ce fichier
export default inputComponent