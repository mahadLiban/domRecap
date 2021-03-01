let squares = document.querySelectorAll('.square');
let btnJaune = document.querySelector('#btnJaune');
let compteurClick = document.querySelector('#compteurClick');
let i = 1;
btnJaune.addEventListener('click', () => {
    if (squares[0].innerHTML.trim()  != "") {
        let littleSquare = document.createElement('div');
        littleSquare.className = 'littleSquare';
        squares[1].appendChild(littleSquare);
        squares[0].innerHTML = "";
        compteurClick.innerText = i;
        i++
    }else{
        let littleSquare = document.createElement('div');
        littleSquare.className = 'littleSquare';
        squares[0].appendChild(littleSquare);
        squares[1].innerHTML = "";
        compteurClick.innerText = i;
        i++
    }
})

export {btnJaune};