window.scrollTo(0, 0);
document.body.style.overflow="hidden";
loading = setTimeout(()=>{
    document.querySelector(".load").style.display="none"
    document.body.style.overflow="auto";

},5000)