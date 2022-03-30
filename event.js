/**
 * const button      = document.querySelector('.box button');


button.addEventListener('mouseup', function(e){
    alert();
});

button.addEventListener('mouseover', () => {

    button.nextElementSibling.innerHTML = 'We love Js';

});
 */


const check_button = document.querySelector('#age_check');
const name = document.querySelector('#name');
const year = document.querySelector('#age');
const resut = document.querySelector('#result');

 
check_button.addEventListener('click', () => {

    resut.innerHTML =ageCal(name.value, year.value); 

 name.value  = '';
 year.value  = ''; 

}); 