const form = document.querySelector('.form');
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const box = document.querySelector('.box');
const bo = document.querySelector('.bo');
const b = document.querySelector('.b');
const lik = document.querySelector('.lik');



form.addEventListener('submit', (event) => {
    event.preventDefault();
    let son1 = Number(input1.value);
    let son2 = Number(input2.value);

    let sum = son1 + son2;
    box.innerHTML = son1 + ' + ' + son2 + ' = ' + sum;
    let uzb = son1 - son2;
    bo.innerHTML = son1 + ' - ' + son2 + ' = ' + uzb;
    let uz = son1 * son2;
    b.innerHTML = son1 + ' * ' + son2 + ' = ' + uz; 
    let u = son1 / son2;
    lik.innerHTML = son1 + ' / ' + son2 + ' = ' + u; 
});