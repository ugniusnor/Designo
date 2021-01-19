
function Header() {
    const burger = document.querySelector(".burger")
    const mobNav = document.querySelector(".mobile-nav");

    burger.addEventListener('click', ()=>{
    burger.classList.toggle("change");
  
    mobNav.classList.toggle("show")
})


  }
  export default Header;
