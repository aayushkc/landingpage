const hamburger = document.querySelector(".hamburger")
const closeMenu = document.querySelector(".close")
const navItem = document.querySelector(".nav--right")
const backdrop = document.querySelector(".nav--backdrop")
const featureList = document.querySelector(".features-list")
const navList = document.querySelector(".nav--list")
const contactList = document.querySelector(".contact-list")
hamburger.addEventListener('click', ()=>{
    // navItem.style.transform = "translateX(0px)"
    // navItem.style.width = "60%"
     backdrop.style.opacity = "1"
    navItem.classList.add("nav--right-show")
})
closeMenu.addEventListener('click', ()=>{
    navItem.classList.remove("nav--right-show")
    backdrop.style.opacity = "0"
})
const handleFeatureSubMenu = () =>{
    navList.classList.toggle('show-features')
    featureList.classList.toggle('rotate-icon')
}
const handleContactSubMenu= ()=>{
    navList.classList.toggle('show-contact')
    contactList.classList.toggle('rotate-icon')
}

featureList.addEventListener('click', handleFeatureSubMenu)
contactList.addEventListener('click', handleContactSubMenu)


