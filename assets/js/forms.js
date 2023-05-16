const modal = document.getElementById("form-overflow")
const form1 = document.getElementById("form1")
const form2 = document.getElementById("form2")
const send_form_button_1 = document.getElementById("send-form-1")
const send_form_button_2 = document.getElementById("send-form-2")
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

const sendOverflow = (event, form, hide=true) => {
    form.reset();
    hide && hideOverflow(event);
}

send_form_button_1.onclick = (event) => sendOverflow(event, form1, false)
send_form_button_2.onclick = (event) => sendOverflow(event, form2)
close_form_button.onclick = (event) => sendOverflow(event, form2)
modal.onclick = (event) => {
    event.preventDefault();
    if (event.target !== modal) return
    sendOverflow(event, form2)
}