const btnUp = document.querySelector(".scrollup")
const headerFixed = document.querySelector(".header-fixed")
const burger = document.querySelector(".burger")
const nav = document.querySelector(".nav")

burger.addEventListener("click", function(){
    burger.classList.toggle("active")
    nav.classList.toggle("active")
    document.body.classList.toggle("overflow")
})

function scrollUp(){
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    })
}

btnUp.addEventListener("click", scrollUp)
window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset
    if(scrollHeight > 200) btnUp.classList.add("active")
    if(scrollHeight > 10) headerFixed.classList.add("active")
    else {
        btnUp.classList.remove("active")
        headerFixed.classList.remove("active")
    }
    
})

const year = document.querySelector(".year")
const data = new Date()
year.innerText = data.getFullYear()

