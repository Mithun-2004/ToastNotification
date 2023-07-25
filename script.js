let successmsg = "Successfully submitted";
let errormsg = "Please fix the error";
let invalidmsg = "Invalid input, check again";

let toast = document.querySelector('#toastNotification');
let buttons = document.querySelectorAll('.buttons button');

function showMessage(msg, color){
    var div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('message');
    div.setAttribute('id', color);
    toast.appendChild(div);

    setTimeout(function(){
        div.remove();
    }, 5000)
}

buttons[0].addEventListener('click', function(){
    showMessage('<i class="fa-solid fa-circle-check"></i>'+ successmsg, 'green');
})

buttons[1].addEventListener('click', function(){
    showMessage('<i class="fa-solid fa-circle-xmark"></i>' + errormsg, 'red');
})

buttons[2].addEventListener('click', function(){
    showMessage('<i class="fa-solid fa-circle-exclamation"></i>' + invalidmsg, 'yellow');
})
