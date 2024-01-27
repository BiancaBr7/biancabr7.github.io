var open = false
function toggleNavbar() {
    var toggle = document.querySelector('.menu-toggle')
    if (open){
        toggle.textContent = "☰";
        open = false;
    }
    else{
        toggle.textContent = "\u2715";
        open = true;
    }
    var navList = document.querySelector('.navbar');
    var body = document.querySelector('body');
    navList.classList.toggle('show');
    body.classList.toggle('disabled');
}