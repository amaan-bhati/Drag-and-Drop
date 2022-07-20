//toggling the active state on the label 
const label = document.querySelector('label');

function onEnter() {
    label.classList.add('active');
}
function onLeave(){
    label.classList.remove('active');
}
label.addEventListener('dragenter' , onEnter);

label.addEventListener('drop',onLeave);
label.addEventListener('dragend',onLeave);
label.addEventListener('dragLeave',onLeave);
label.addEventListener('dragexit',onLeave);
//to know when a file was succesfully selected
const input = document.querySelector('input');
input.addEventListener('change' , event=>{
    if(input.files.length>0){
    }
})
