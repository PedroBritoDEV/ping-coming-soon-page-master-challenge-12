var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
var form = document.querySelector('.inputs')
var error_text = document.querySelector('.error-txt')
var divEmail = document.querySelector('.email')

function send(event) {
    var email = document.querySelector('#email').value
    if (email.match(pattern)){
        alert('thanks')
    }else{
        event.preventDefault();
        error_text.style.display = "inline" ;
        divEmail.style.border = "solid 1px #ff5263" ;
    }
    
}
function writing() {
    error_text.style.display = "none" ;
    divEmail.style.border = "solid 1px #c2d3ff" ;
}

form.addEventListener('submit', send)