var open = false
function toggleNavbar() {
    var toggle = document.querySelector('.menu-toggle')
    if (open){
        toggle.textContent = "☰"
        open = false
    }
    else{
        toggle.textContent = "✖"
        open = true
    }
    var navList = document.querySelector('.navbar');
    navList.classList.toggle('show');
}