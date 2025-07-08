import "./style.css"
import {generateHome} from "./hometab.js"
import {generateMenu} from "./menutab.js"
import {generateAbout} from "./abouttab.js";

const homeButton = document.querySelector(".homeButton");
const menuButton = document.querySelector(".menuButton");
const aboutButton = document.querySelector(".aboutButton");

homeButton.addEventListener("click", generateHome);
menuButton.addEventListener("click", generateMenu);
aboutButton.addEventListener("click", generateAbout);