let inputCalc1 = document.querySelector('#inputCalc1');
let inputCalc2 = document.querySelector('#inputCalc2');
let egalLvl1 = document.querySelector('#egalLvl1');
let answerLvl1 = document.querySelector('#answerLvl1');

egalLvl1.addEventListener('click', () => {
    let reponse = parseInt(inputCalc1.value)  + parseInt(inputCalc2.value);
    answerLvl1.innerText = reponse;
    inputCalc2.value = '';
    inputCalc1.value = '';
})

let touches = document.querySelectorAll('.bouton');
let ecran = document.querySelector("#ecran");
let reponseFinale = document.querySelector('#reponse');
let op;
let elem1;
let elem2;

touches.forEach(element => {
    element.addEventListener('click',() => {

        let reponse;
        if(element.innerText == '='){
            switch (op) {
                case '*':
                    elem2 = ecran.value;
                    reponse = parseInt(elem1) * parseInt(elem2);
                    reponseFinale.innerText = `${elem1} * ${elem2} = ${reponse}`;
                    ecran.value = "";
                    break;
                case '+':
                    elem2 = ecran.value;
                    reponse = parseInt(elem1) + parseInt(elem2);
                    reponseFinale.innerText = `${elem1} + ${elem2} = ${reponse}
                    `;
                    ecran.value = "";
                    break;
                case '-':
                    elem2 = ecran.value;
                    reponse = parseInt(elem1) - parseInt(elem2);
                    reponseFinale.innerText = `${elem1} - ${elem2} = ${reponse}`;
                    ecran.value = "";
                    break;
                case '/':
                    elem2 = ecran.value;
                    reponse = parseInt(elem1) / parseInt(elem2);
                    reponseFinale.innerText = `${elem1} / ${elem2} = ${reponse}`;
                    ecran.value = "";
                    break;
                default:
                    break;
            }
        }else if (element.innerText == 'C' ) {
            ecran.value = "";
        }else if(element.innerText == '*' ){
            elem1 = ecran.value;
            op = '*';
            ecran.value = "*";
        }else if(element.innerText == '-' ){
            elem1 = ecran.value;
            op = '-';
            ecran.value = "-";
        }else if(element.innerText == '+' ){
            elem1 = ecran.value;
            op = '+';
            ecran.value = "+";
        }else if(element.innerText == '/' ){
            elem1 = ecran.value;
            op = '/';
            ecran.value = "/";
        }
        else{
            if (ecran.value == "/" || ecran.value == "*" || ecran.value == "-" || ecran.value == "+") {
                ecran.value = "";
            }
            ecran.value += element.innerText;
        }
    })
});

export {egalLvl1,touches};