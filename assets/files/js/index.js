//DISABLE THE BODY SCROLL WHEN DROPDOWN MENU IS ACTIVE
let menuToggle = document.getElementById('menuToggle');
let body = document.body;

menuToggle.addEventListener('change', function() {
    if(menuToggle.checked){
        body.classList.add('no-scroll');
    }else{
        body.classList.remove('no-scroll');
    }
});
