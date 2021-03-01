let btnOeuf = document.querySelector('#btnOeuf');
let containerOeuf = document.querySelector('#containerOeuf');

btnOeuf.addEventListener('click',() => {
    let oeuf = document.createElement('img');
    oeuf.setAttribute("src","./public/img/oeuf.png");
    oeuf.style.width = '150px';
    containerOeuf.appendChild(oeuf);
})

export {btnOeuf};