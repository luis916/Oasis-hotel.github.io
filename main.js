//variables
let user_complete_name = document.getElementById('complete_name');
let user_address = document.getElementById('address');
let user_rut = document.getElementById('rut');
let user_phone_number = document.getElementById('phone_number');
let user_sex = document.getElementById('sex');
let user_arrival_date = document.getElementById('arrival_date');
let user_exit_date = document.getElementById('exit_date');
let user_room = document.getElementById('room');
let form_btn_restart = document.getElementById('form_btn_restart');
let form_btn_sent = document.getElementById('form_btn_sent');
let user_payment_method = document.querySelectorAll('input[name="payment_method"]');
let user_other_services = document.querySelectorAll('input[name="other_services"]');

const ouput = document.getElementById('texto');
const myModal = new bootstrap.Modal(document.getElementById('mymodal'));
//------------------------------------------------------------------------------------------------------
//modal variables
let modal_user_name = document.getElementById('modal_user_name');
let modal_user_address = document.getElementById('modal_user_address');
let modal_user_rut = document.getElementById('modal_user_rut');
let modal_user_room = document.getElementById('modal_user_room');
let modal_user_phone_number = document.getElementById('modal_user_phone_number');
let modal_user_sex = document.getElementById('modal_user_sex');
let modal_user_arrival_date = document.getElementById('modal_user_arrival_date');
let modal_user_exit_date = document.getElementById('modal_user_exit_date');
let modal_user_payment_method = document.getElementById('modal_user_payment_method');
let modal_user_other_services = document.getElementById('modal_user_other_services');
//Boton de enviar datos.
form_btn_sent.addEventListener('click',(e)=>{
    e.preventDefault();
    modal_user_name.textContent = user_complete_name.value;
    modal_user_address.textContent = user_address.value;
    modal_user_rut.textContent = user_rut.value;
    modal_user_phone_number.textContent = user_phone_number.value;
    modal_user_sex.textContent = user_sex.value;
    modal_user_room.textContent = user_room.value;
    modal_user_arrival_date.textContent = user_arrival_date.value;
    modal_user_exit_date.textContent = user_exit_date.value;
    showRadioButton(user_payment_method,modal_user_payment_method);
    obtenerValoresSeleccionados();
    inputValidation();
});
// boton de reiniciar.
form_btn_restart.addEventListener('click',(e)=>{
    e.preventDefault();
    location.reload();
});
//Funcion que valida que los campos no queden vacios.
let validacionEjecutada = true;
function inputValidation(){
    if(user_complete_name.value===''||user_address.value===''||user_rut.value=== ''||user_phone_number.value===''||user_sex.value===''||user_arrival_date.value===''||user_exit_date===''||!Array.from(user_payment_method).some(checkbox => checkbox.checked)){
        alert('Debe rellenar todos los campos');
        
    }else{
        myModal.show();
    }
    showRadioButton
}
//Funcion que autocompleta el sexo ingresando 'F,''M' 0 'I';
function autocompleteSex(){
    user_sex.addEventListener('blur',()=>{
        if(user_sex.value === 'f'||user_sex.value ==='F'){
            user_sex.value = 'Femenino';
        }else
        if(user_sex.value === 'm'||user_sex.value==='M'){
            user_sex.value = 'Masculino';
        }else
        if(user_sex.value === 'i'||user_sex.value==='I'){
            user_sex.value = 'Indefenido';
        }
    });
}autocompleteSex();
//Funcion que muestra los radio button en la modal.
function showRadioButton(radioBtn,modal) {
    radioBtn.forEach((boton) => {
        if (boton.checked) {
            modal.textContent = boton.value;
        }
});}
//Funcion que obtine los valores seleccionados en los checkbox.
function obtenerValoresSeleccionados() {
    const valoresSeleccionados = Array.from(user_other_services)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    modal_user_other_services.textContent = valoresSeleccionados;
}
//cree una funcion que cambia la primera y ultima letra de los input.
function capitalizeFirstAndLastLetter(input) {
    input.addEventListener('blur',()=>{
        let text = input.value;
    if(text.length ===0){
        input.value = '';
    }else{
        const firstLetter = text[0].toUpperCase();
        const lastLetter = text[text.length-1].toUpperCase();
        const middleText = text.slice(1,text.length-1)
        input.value = firstLetter+middleText+lastLetter;
    }
    })
}
capitalizeFirstAndLastLetter(user_complete_name);
capitalizeFirstAndLastLetter(user_address);
capitalizeFirstAndLastLetter(user_phone_number);
capitalizeFirstAndLastLetter(user_rut);

