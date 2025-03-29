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
    let list=document.getElementById("product-details")
    switch (product){
        case "Aura":
            document.getElementById("product").textContent="Aux Aura"
            document.getElementById("product-img").src="images/Aura.jpg"
            list.children[0].innerHTML="<b>Teljes név:</b> AUX AURA ASW-H12C5A4/CAR3DI-D0-4 oldalfali split klíma csomag 3,5 kW"
            list.children[1].innerHTML="<b>Hűtési teljesítmény:</b> 3,5 kW"
            list.children[2].innerHTML="<b>Fűtési teljesítmény:</b> 4.2kW"
            list.children[3].innerHTML="<b>SEER:</b> 8.5"
            list.children[4].innerHTML="<b>SCOP:</b> 4.6"
            list.children[5].innerHTML="<b>Energiaosztály:</b> A+++/A++"
            list.children[6].innerHTML="<b>Ár:</b> 322.900 Ft"
            break
        case "Delta":
            document.getElementById("product").textContent="Aux Delta 3"
            document.getElementById("product-img").src="images/Delta.jpg"
            list.children[0].innerHTML="<b>Teljes név:</b> AUX Delta 3 KSZKLM5131 oldalfali split klíma csomag 3,5 kW"
            list.children[1].innerHTML="<b>Hűtési teljesítmény:</b> 3,5 kW"
            list.children[2].innerHTML="<b>Fűtési teljesítmény:</b> 3.85kW"
            list.children[3].innerHTML="<b>SEER:</b> 7.1"
            list.children[4].innerHTML="<b>SCOP:</b> 4.1"
            list.children[5].innerHTML="<b>Energiaosztály:</b> A++/A+"
            list.children[6].innerHTML="<b>Ár:</b> 269.900 Ft"
            break
        case "ComfortPro":
            document.getElementById("product").textContent="Gree Comfort Pro"
            document.getElementById("product-img").src="images/ComfortPro.jpg"
            list.children[0].innerHTML="<b>Teljes név:</b> Gree Comfort Pro GWH12ACCXD-K6DNA1D oldalfali split klíma csomag 3,5 kW"
            list.children[1].innerHTML="<b>Hűtési teljesítmény:</b> 3,5 kW"
            list.children[2].innerHTML="<b>Fűtési teljesítmény:</b> 3.8 kW"
            list.children[3].innerHTML="<b>SEER:</b> 8.5"
            list.children[4].innerHTML="<b>SCOP:</b> 4.8"
            list.children[5].innerHTML="<b>Energiaosztály:</b> A+++/A++"
            list.children[6].innerHTML="<b>Ár:</b> 322.199 Ft"
            break
        case "Amber":
            document.getElementById("product").textContent="Gree Amber Royal"
            document.getElementById("product-img").src="images/AmberRoyal.jpg"
            list.children[0].innerHTML="<b>Teljes név:</b> Gree Amber Royal GWH12YD-S6DBA1A oldalfali split klíma csomag 3,5 kW"
            list.children[1].innerHTML="<b>Hűtési teljesítmény:</b> 3,5 kW"
            list.children[2].innerHTML="<b>Fűtési teljesítmény:</b> 4.2 kW"
            list.children[3].innerHTML="<b>SEER:</b> 8.5"
            list.children[4].innerHTML="<b>SCOP:</b> 4.6"
            list.children[5].innerHTML="<b>Energiaosztály:</b> A+++"
            list.children[6].innerHTML="<b>Ár:</b> 498.729 Ft"
            break
        case "FComfort":
            document.getElementById("product").textContent="Fisher Comfort Plus"
            document.getElementById("product-img").src="images/FisherComfort.jpg"
            list.children[0].innerHTML="<b>Teljes név:</b> Fisher Comfort Plus FSAIF-CP-121AE3/FSOAIF-CP-121AE3 oldalfali split klíma csomag 3,5 kW"
            list.children[1].innerHTML="<b>Hűtési teljesítmény:</b> 3.51 kW"
            list.children[2].innerHTML="<b>Fűtési teljesítmény:</b> 3.95 kW"
            list.children[3].innerHTML="<b>SEER:</b> 8.5"
            list.children[4].innerHTML="<b>SCOP:</b> 4.6"
            list.children[5].innerHTML="<b>Energiaosztály:</b> A+++/A++"
            list.children[6].innerHTML="<b>Ár:</b> 318.900 Ft"
            break
        case "Nordic":
            document.getElementById("product").textContent="Fisher Nordic"
            document.getElementById("product-img").src="images/Nordic.jpg"
            list.children[0].innerHTML="<b>Teljes név:</b> Fisher Nordic FSAIF-Nord-123AE3 oldalfali split klíma csomag 3,5 kW"
            list.children[1].innerHTML="<b>Hűtési teljesítmény:</b> 3.52 kW"
            list.children[2].innerHTML="<b>Fűtési teljesítmény:</b> 4.25 kW"
            list.children[3].innerHTML="<b>SEER:</b> 9.2"
            list.children[4].innerHTML="<b>SCOP:</b> 5.3"
            list.children[5].innerHTML="<b>Energiaosztály:</b> A+++/A+++"
            list.children[6].innerHTML="<b>Ár:</b> 442.900 Ft"
            break
        case "Special":
            document.getElementById("product").textContent="Fisher Special Edition"
            document.getElementById("product-img").src="images/FisherAIF.jpg"
            list.children[0].innerHTML="<b>Teljes név:</b> Fisher Special Edition FSAIF-SP-121AE3 oldalfali split klíma csomag 3,5 kW"
            list.children[1].innerHTML="<b>Hűtési teljesítmény:</b> 3.6 kW"
            list.children[2].innerHTML="<b>Fűtési teljesítmény:</b> 3.8 kW"
            list.children[3].innerHTML="<b>SEER:</b> 7"
            list.children[4].innerHTML="<b>SCOP:</b> 4.2"
            list.children[5].innerHTML="<b>Energiaosztály:</b> A++/A+"
            list.children[6].innerHTML="<b>Ár:</b> 254.900 Ft"
            break
        case "Xtreme":
            document.getElementById("product").textContent="Midea Xtreme Save Pro"
            document.getElementById("product-img").src="images/XtremeSave.jpg"
            list.children[0].innerHTML="<b>Teljes név:</b> Midea MGP2X-12-SP Xtreme Save Pro oldalfali split klíma csomag 3,5 kW"
            list.children[1].innerHTML="<b>Hűtési teljesítmény:</b> 3.5 kW"
            list.children[2].innerHTML="<b>Fűtési teljesítmény:</b> 3.8 kW"
            list.children[3].innerHTML="<b>SEER:</b> 8.5"
            list.children[4].innerHTML="<b>SCOP:</b> 4.6"
            list.children[5].innerHTML="<b>Energiaosztály:</b> A+++/A++"
            list.children[6].innerHTML="<b>Ár:</b> 309.900 Ft"
            break
        case "Breezless":
            document.getElementById("product").textContent="Midea Breezeless+"
            document.getElementById("product-img").src="images/MideaBreezless.jpg"
            list.children[0].innerHTML="<b>Teljes név:</b> Midea Breezeless+ MSF3-12-SP oldalfali split klíma csomag 3,5 kW"
            list.children[1].innerHTML="<b>Hűtési teljesítmény:</b> 3.5 kW"
            list.children[2].innerHTML="<b>Fűtési teljesítmény:</b> 3.8 kW"
            list.children[3].innerHTML="<b>SEER:</b> 8.5"
            list.children[4].innerHTML="<b>SCOP:</b> 4.6"
            list.children[5].innerHTML="<b>Energiaosztály:</b> A+++/A++"
            list.children[6].innerHTML="<b>Ár:</b> 379.900 Ft"
            break
        case "Daikin":
            document.getElementById("product").textContent="Daikin FTXC35C/RXC35C"
            document.getElementById("product-img").src="images/MideaBreezless.jpg"
            list.children[0].innerHTML="<b>Teljes név:</b> Daikin FTXC35C/RXC35C oldalfali split klíma csomag 3,5 kW"
            list.children[1].innerHTML="<b>Hűtési teljesítmény:</b> 3.44 kW"
            list.children[2].innerHTML="<b>Fűtési teljesítmény:</b> 4 kW"
            list.children[3].innerHTML="<b>SEER:</b> 6.87"
            list.children[4].innerHTML="<b>SCOP:</b> 4.28"
            list.children[5].innerHTML="<b>Energiaosztály:</b> A++/A+"
            list.children[6].innerHTML="<b>Ár:</b> 312.800 Ft"
            break
        //Hőszivattyúk
        case "Versati":
            document.getElementById("product").textContent="Gree Versati III"
            document.getElementById("product-img").src="images/GreeVersati.jpg"
            list.children[0].innerHTML="<b>Teljes név:</b> Gree Versati III Osztott Levegő-víz 15,5 kW Hőszivattyú (3 fázisú)"
            list.children[1].innerHTML="<b>Hűtési teljesítmény:</b> 13 kW"
            list.children[2].innerHTML="<b>Fűtési teljesítmény:</b> 15,5 kW"
            list.children[3].innerHTML="<b>Fázis:</b> 3 fázisú"
            list.children[4].innerHTML="<b>Hűtőközeg:</b> R32"
            list.children[5].innerHTML="<b>Energiaosztály:</b> A+++"
            list.children[6].innerHTML="<b>Hőszivattyú kivitel: Osztott hőszivattyú"
            list.children[7].innerHTML="<b>SCOP: 4.82"
            list.children[8].innerHTML="<b>Ár:</b> 2.040.031 Ft"
            break
        case "Therma":
            document.getElementById("product").textContent="LG Therma-V"
            document.getElementById("product-img").src="images/LGTherma.jpg"
            list.children[0].innerHTML="<b>Teljes név:</b> LG Therma-V HUN1436MA Levegő-víz Split Hőszivattyú 14 kW"
            list.children[1].innerHTML="<b>Hűtési teljesítmény:</b> 14 kW"
            list.children[2].innerHTML="<b>Fűtési teljesítmény:</b> 14 kW"
            list.children[3].innerHTML="<b>Fázis:</b> 3 fázisú"
            list.children[4].innerHTML="<b>Hűtőközeg:</b> R410A"
            list.children[5].innerHTML="<b>Energiaosztály:</b> A+++"
            list.children[6].innerHTML="<b>Hőszivattyú kivitel: Osztott hőszivattyú"
            list.children[7].innerHTML="<b>SCOP: 4.61"
            list.children[8].innerHTML="<b>Ár:</b> 2.748.280 Ft"
            break
        case "EHeat":
            document.getElementById("product").textContent="Fisher e-HeatR"
            document.getElementById("product-img").src="images/FisherEHeat.jpg"
            list.children[0].innerHTML="<b>Teljes név:</b> Fisher e-HeatR FHF-WHS-161CE3-3F 3 fázisú levegő-víz hőszivattyú 16 kW"
            list.children[1].innerHTML="<b>Hűtési teljesítmény:</b> 15.2kW"
            list.children[2].innerHTML="<b>Fűtési teljesítmény:</b> 12 kW"
            list.children[3].innerHTML="<b>Fázis:</b> 3 fázisú"
            list.children[4].innerHTML="<b>Hűtőközeg:</b> R32"
            list.children[5].innerHTML="<b>Energiaosztály:</b> A++/A++"
            list.children[6].innerHTML="<b>Hőszivattyú kivitel: Osztott hőszivattyú"
            list.children[7].innerHTML="<b>SCOP: 4.07"
            list.children[8].innerHTML="<b>Ár:</b> 1.971.810 Ft"
            break
        default:
            break
    }
}
document.getElementById("close").addEventListener('click',e=>{
    document.querySelector("#popup-div").classList.toggle("open-popup")
})
function togglePopup(option = "") {
    if(document.querySelector("#popup-div").classList.contains("open-popup")==false){
        document.querySelector("#popup-div").classList.toggle("open-popup")
    }
    if (option == "one") document.querySelector("#section-one").scrollIntoView({behavior: "smooth"})
    if (option == "two") document.querySelector("#section-two").scrollIntoView({behavior: "smooth"})
}
function scrollingTo(where=""){
    if(document.querySelector("#popup-div-2").classList.contains("open-popup")){
        document.querySelector("#popup-div-2").classList.toggle("open-popup")
    }
    if(document.querySelector("#popup-div").classList.toggle("open-popup")){
        document.querySelector("#popup-div").classList.toggle("open-popup")
    }
    document.querySelector(where).scrollIntoView()
}