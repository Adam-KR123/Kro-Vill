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
function togglePopup2(product=""){
    document.querySelector("#popup-div-2").classList.toggle("open-popup")
    console.log("wut")
    switch (product){
        case "Aura":
            document.getElementById("product").textContent="Aux Aura"
            document.getElementById("product-img").src="images/Aura.jpg"
            let list=document.getElementById("product-details")
            list.children[0].innerHTML="<b>Teljes név:</b> AUX AURA ASW-H12C5A4/CAR3DI-D0-4 oldalfali split klíma csomag 3,5 kW"
            list.children[1].innerHTML="<b>Hűtési teljesítmény:</b> 3,5 kW"
            list.children[2].innerHTML="<b>Fűtési teljesítmény:</b> 4.2kW"
            list.children[3].innerHTML="<b>SEER:</b> 8.5"
            list.children[4].innerHTML="<b>SCOP:</b> 4.6"
            list.children[5].innerHTML="<b>Energiaosztály:</b> A+++/A++"
            list.children[6].innerHTML="<b>Ár:</b> 322.900 Ft + Telepítési díj"
            break
        
        default:
            break
    }
}
function togglePopup(option = "") {
    document.querySelector("#popup-div").classList.toggle("open-popup")
    if (option == "one") document.querySelector("#section-one").scrollIntoView({behavior: "smooth"})
    if (option == "two") document.querySelector("#section-two").scrollIntoView({behavior: "smooth"})
}
function scrollingTo(){
    document.querySelector(".notify").scrollIntoView()
}