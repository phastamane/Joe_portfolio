import scrollText from "./js/scrollText.js";
import {navButtons, scrollButton} from "./js/navButton.js";
import navBar from "./js/navBar.js";


document.addEventListener('scroll', () => scrollText())
navButtons()
navBar()
document.addEventListener('scroll', () => scrollButton())
