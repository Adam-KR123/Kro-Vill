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

function togglePopup(option = "") {
    document.querySelector("#popup-div").classList.toggle("open-popup")
    if (option == "one") document.querySelector("#section-one").scrollIntoView({behavior: "smooth"})
    if (option == "two") document.querySelector("#section-two").scrollIntoView({behavior: "smooth"})
}
function scrollingTo(){
    document.querySelector(".notify").scrollIntoView()
}