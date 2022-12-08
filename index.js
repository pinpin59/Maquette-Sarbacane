console.log('ok');
const el = document.getElementById("modal");
const check = document.querySelector('#check-modal');
const close = document.querySelector('#close-modal');

check.addEventListener('click',(e)=>{
    e.preventDefault();
    el.style.visibility = el.style.visibility = "visible";
    
})

close.addEventListener('click',(e)=>{
    e.preventDefault();
    el.style.visibility = el.style.visibility = "hidden";
    
})
