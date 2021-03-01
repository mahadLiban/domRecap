let inconnu = document.querySelector('#inconnu'); 
let go = document.querySelector('#btnExo3');
let inputExo3 = document.querySelector('#inputExo3');

go.addEventListener('click', () => {
    if (inputExo3.value.trim() != "") {
        inconnu.innerHTML = inputExo3.value;
        inputExo3.value = "";
    }
})

export {go};