import './styles.css';
import { generateHome } from './generateHome';
import { generateMenu } from './generateMenu';
import { generateContact } from './generatingContact';


const navBar = document.querySelector(".nav--bar");
const content = document.querySelector("#content");
const aboutButton = document.querySelector("#about");
const menuButton = document.querySelector("#menu");
const contactButton = document.querySelector("#contact");

navBar.addEventListener("click", (e) => {

    //Clear the current page
    content.textContent = "";

    aboutButton.classList.remove("active");
    menuButton.classList.remove("active");
    contactButton.classList.remove("active");

    if (e.target.id == "about"){

        aboutButton.classList.add("active");
        generateHome();


    }else if (e.target.id == "menu"){

        menuButton.classList.add("active");
        generateMenu();

    }else if (e.target.id == "contact"){

        contactButton.classList.add("active");
        generateContact();

    }


});

//Initial Render
aboutButton.classList.add("active");
generateHome();