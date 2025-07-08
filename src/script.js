import "./style.css"
import {generateMenu} from "./menutab.js"

const menuButton = document.querySelector(".menuButton");

menuButton.addEventListener("click", generateMenu);