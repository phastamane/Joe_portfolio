
export default function navBar() {const navBar = document.getElementById('navBar');

window.addEventListener('scroll', () => {
  let scroll = window.pageYOffset;

  if (scroll > 70) {
    navBar.style.margin = '15px 0 0 0';
    navBar.style.position = 'fixed'
  } else {
    navBar.style.margin = '85px 0 0 0';
    navBar.style.position = 'absolute'
  }
});
}