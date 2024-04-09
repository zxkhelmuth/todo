function insertarNombre(event) {
    event.preventDefault();
    let inputName = document.getElementById("nombre").value
    const ul = document.getElementById("lista-nombres")
    ul.innerHTML += `<li> ${inputName} </li>`
}
