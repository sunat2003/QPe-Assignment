let toggleBar= document.querySelector(".toggle-bar")
document.querySelector(".ham-burger").addEventListener("click",()=>{
    toggleBar.classList.toggle("active");
})

document.querySelector(".close-bar").addEventListener("click",()=>{
    toggleBar.classList.remove("active");
})

window.onscroll=()=>{
    toggleBar.classList.remove("active");
}



