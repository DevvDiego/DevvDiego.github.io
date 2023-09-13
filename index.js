const navTitle = document.querySelector("nav h1");
const titles = document.querySelectorAll("h1.title");

let scrollPosition = document.documentElement.scrollTop;
document.addEventListener("scroll", ()=>{
    
    scrollPosition = document.documentElement.scrollTop;
    scrollPosition = scrollPosition+100;

    titles.forEach(element => {
        if(element.offsetTop <= scrollPosition){
            navTitle.innerHTML = element.innerHTML;
            
        }
    });
})