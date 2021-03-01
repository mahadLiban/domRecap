let inputTodo = document.querySelector('#inputTodo');
let containerTodo = document.querySelector('.containerTodo');
let btnToutes = document.querySelector('#btnToutes');
let btnComplete = document.querySelector('#btnComplete');
let btnTodo = document.querySelector('#btnTodo');

let todoItem;
let spanDiv;
let span;
let btnDiv;
let btn1;
let btn2;
let btn3;
let edit = false;

btnToutes.addEventListener('click',() => {
    let todoItems = document.querySelectorAll('.todoItem');

    todoItems.forEach(element => {
        element.style.display = 'flex';
        console.log(element.made);
        
    });

})

btnComplete.addEventListener('click', () => {
    let todoItems = document.querySelectorAll('.todoItem');
    todoItems.forEach(element => {
        if (element.made%2 == 0) {
            element.style.display = 'none';
        }else{
            element.style.display = 'flex';
        }
    });
})

btnTodo.addEventListener('click', () => {
    let todoItems = document.querySelectorAll('.todoItem');
    todoItems.forEach(element => {
        if (element.made == true) {
            element.style.display = 'none';
        }else{
            element.style.display = 'flex';
        }
    });
})

document.addEventListener('keypress', (e) => {
    if(e.code == 'Enter'){

        todoItem = document.createElement('div');
        todoItem.className = 'todoItem';
        todoItem.made = 0;
        spanDiv = document.createElement('div');
        span = document.createElement('span');
        span.innerText = inputTodo.value;
        spanDiv.appendChild(span);

        todoItem.appendChild(spanDiv);
        
        btnDiv = document.createElement('div');

        btn1 = document.createElement('button');
        btn1.setAttribute('type', 'button');
        btn1.className = "btn btn-success" ;
        btn1.innerHTML = '<i class="fas fa-check"></i>';
        

        btnDiv.appendChild(btn1);

        btn2 = document.createElement('button');
        btn2.setAttribute('type', 'button');
        btn2.className = "btn btn-warning";
        btn2.innerHTML = '<i class="fas fa-edit"></i>';
        

        btnDiv.appendChild(btn2);

        btn3 = document.createElement('button');
        btn3.setAttribute('type', 'button');
        btn3.className = "btn btn-danger";
        btn3.innerHTML = '<i class="fas fa-trash-alt"></i>';
        
        
        btnDiv.appendChild(btn3);

        todoItem.appendChild(btnDiv);

        containerTodo.appendChild(todoItem);

        inputTodo.value = "";
        
    }
})

document.addEventListener("click",(e)=>{
    if (e.target.className == 'btn btn-success') {
        e.target.parentElement.parentElement.classList.toggle('bg-success');
        e.target.parentElement.parentElement.made++;
    } else if (e.target.className == 'fas fa-check') {
        e.target.parentElement.parentElement.parentElement.classList.toggle('bg-success');
        e.target.parentElement.parentElement.parentElement.made++;
    }
})

document.addEventListener("click",(e)=>{

    if (edit == false) {
        if (e.target.className == 'btn btn-warning') {
            let todoDiv = e.target.parentElement.parentElement;
            let spanDiv1 = todoDiv.firstChild;
            let span1 = spanDiv1.firstChild;

            let valeur = span1.innerText;
            let input1 = document.createElement('input');
            input1.setAttribute('type','text');
            span1.remove();
            spanDiv1.appendChild(input1);
            input1.value = valeur;
            edit = true;
        } else if (e.target.className == 'fas fa-edit') {
            let todoDiv = e.target.parentElement.parentElement.parentElement;
            let spanDiv1 = todoDiv.firstChild;
            let span1 = spanDiv1.firstChild;

            let valeur = span1.innerText;
            let input1 = document.createElement('input');
            input1.setAttribute('type','text');
            span1.remove();
            spanDiv1.appendChild(input1);
            input1.value = valeur;
            edit = true;
        }
    }else{
        if (e.target.className == 'btn btn-warning') {
            let todoDiv = e.target.parentElement.parentElement;
            let spanDiv1 = todoDiv.firstChild;
            let input2 = spanDiv1.firstChild;

            let valeur = input2.value;
            input2.remove();
            let span2 = document.createElement('span');
            spanDiv1.appendChild(span2);
            span2.innerText = valeur;
            edit = false;
        } else if (e.target.className == 'fas fa-edit') {
            let todoDiv = e.target.parentElement.parentElement.parentElement;
            let spanDiv1 = todoDiv.firstChild;
            let input2 = spanDiv1.firstChild;

            let valeur = input2.value;
            input2.remove();
            let span2 = document.createElement('span');
            spanDiv1.appendChild(span2);
            span2.innerText = valeur;
            edit = false;
        }
    }
})

document.addEventListener("click",(e)=>{
    if (e.target.className == 'btn btn-danger') {
        e.target.parentElement.parentElement.remove();
    } else if (e.target.className == 'fas fa-trash-alt') {
        e.target.parentElement.parentElement.parentElement.remove();
    }
    
})

export {inputTodo};