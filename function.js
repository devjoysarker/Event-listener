/**
 * Age calculator for user
 * @param {*} name 
 * @param {*} year 
 * @returns 
 */
function ageCal(name,year){
    let date     = new Date();
    age          = date.getFullYear() - year;


    return`
    <p class="alert alert-success"> Hi ${name}, your are ${age} years old</p>;
    `
}