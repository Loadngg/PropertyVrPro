const modal = document.getElementById("form-overflow")
const form = document.getElementById("form")
const send_form_button = document.getElementById("send-form")
const close_form_button = document.getElementById("overflow__close")
const form_button = document.getElementById("form-button")

form_button.onclick = () => {
    modal.classList.remove('hidden'); 
    setTimeout(function(){
        modal.classList.remove('transparent')
    }, 20)
};

const hideOverflow = (event) => {
    event.preventDefault();
    modal.classList.add('transparent'); 
    setTimeout(function(){
        modal.classList.add('hidden')
    }, 500);
}

const sendOverflow = (event) => {
    form.reset();
    hideOverflow(event);
}

send_form_button.onclick = (event) => sendOverflow(event)
close_form_button.onclick = (event) => sendOverflow(event)
modal.onclick = (event) => {
    event.preventDefault();
    if (event.target !== modal) return
    sendOverflow(event)
}