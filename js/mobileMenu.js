export default function mobileMenu() {
    const menuButton = document.querySelector(".nav-menu-button");
    const mobileMenu = document.getElementById("mobileMenu"); 
    const cancelBut = document.getElementById('cancel-button')
    const htmlElement = document.documentElement;

    const mobileHome = document.getElementById('mobile-homeButton');
    const mobileProject = document.getElementById('mobile-projectButton');
    const mobileAbout = document.getElementById('mobile-aboutButton');
    const mobileContact = document.getElementById('mobile-contactButton');

    
    menuButton.addEventListener("click", () => {
      mobileMenu.classList.remove("hidden");
      htmlElement.style.overflowY = 'hidden'
    });

    cancelBut.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    htmlElement.style.overflowY = 'auto'
  });

    mobileHome.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    htmlElement.style.overflowY = 'auto'
  });

    mobileProject.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    htmlElement.style.overflowY = 'auto'
  });

    mobileAbout.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    htmlElement.style.overflowY = 'auto'
  });

    mobileContact.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    htmlElement.style.overflowY = 'auto'
  });
}
