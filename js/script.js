const ul = document.querySelector('.list');
console.log(ul);

for (let i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        ul.innerHTML += `<li class="box red">Fizz</li>`;
    }else if (i % 5 == 0) {
        ul.innerHTML += `<li class="box yellow">Buzz</li>`;
    }else if ( i % 3 == 0) {
         ul.innerHTML += `<li class="box green ">FizzBuzz</li>`;
    }else {
         ul.innerHTML += `<li class="box none">${i}</li>`;
    }                
};   


