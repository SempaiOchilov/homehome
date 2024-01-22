let num =  document.querySelector('h5')
let minus = document.querySelector('.minus')
let retturn = document.querySelector('.return')
let plus = document.querySelector('.plus')



minus.onclick = () =>{

    num.textContent = parseInt(num.textContent) - 1;

    
}
retturn.onclick= () => {

    
    num.textContent  = 0;
}

plus.onclick = () =>{

    num.textContent = parseInt(num.textContent) + 1;

    
}



console.log(num);
console.log(minus);
console.log(retturn);
console.log(plus);




let button1 = document.querySelector('.one')
let button2 = document.querySelector('.two')









button1.onclick = () => {
    
      button2.classList.add('active')
}

button2.onclick = () => {
    
    button1.classList.add('active')


}
console.log(button1,button2);
