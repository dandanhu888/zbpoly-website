const menu=document.querySelector(".menu"),nav=document.querySelector(".site-header nav");
menu.addEventListener("click",()=>{nav.classList.toggle("open");menu.setAttribute("aria-expanded",nav.classList.contains("open"))});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();