const button = document.querySelector('button');
const popup  = document.querySelector('.popup-wrapper');
const close  = document.querySelector('.popup-close');
const form   = document.querySelector('.signup-form');
const username = document.querySelector('#username');
const feedback=document.querySelector('.feedback');
const username =form.username.value;
button.addEventListener('click',()=>{
popup.style.display='block';
});
popup.addEventListener('click',()=>{
    popup.style.display='none';
});
close.addEventListener('click',()=>{
    close.style.display='none';
});
form.addEventListener('submit',e=>{
e.preventDefault();

const usernamePattern=/^[a-zA-z]{6-10}$/;
if(usernamePattern.test(username))
{
   // feedbak good info 
   feedback.textContent='this is valid user name';
}
else{
    //feedback bad info
    feedback.textContent='user name must contain small and upper letter';
}
});