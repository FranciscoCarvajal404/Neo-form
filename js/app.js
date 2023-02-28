import {validation} from "./components/validaciones.js";

const inputs = document.querySelectorAll("input");

inputs.forEach((input) =>{
    input.addEventListener("blur", (input) =>{
        validation(input.target);
    });
});