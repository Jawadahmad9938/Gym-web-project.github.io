let hellobtn = document.querySelector('button');
hellobtn.addEventListener('click', inputMsg);

function inputMsg(){
    let name = prompt('Thank You so much for Coming on Our Website.Give Your Feedback.');
    hellobtn.textContent = 'Keep Smiling ' + name;
}
