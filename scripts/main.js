first_load = sessionStorage.getItem("load")
if(first_load){
    document.getElementById("load").style.display="none"
    document.body.style.animation="none"
}
else{
    sessionStorage.setItem("load", true)
}

function toggleMenu() {   
    document.querySelector("body").classList.toggle("open-menu")
}

function togglePopup() {
    document.querySelector("#popup-div").classList.toggle("open-popup")
}