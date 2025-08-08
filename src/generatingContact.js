
export function generateContact(){

      const content = document.querySelector("#content");

    //create the home div
    const home = document.createElement("div");
    home.classList.add("home");

    //create the mainContact div
    const mainContact = document.createElement("div");
    mainContact.classList.add("contact--main");

    //create header
    const header = document.createElement("header");
    header.classList.add("header");
    header.textContent = "Contact Us";


    //build contact cards
    const contactCardOne = document.createElement("div");
    contactCardOne.classList.add("contact--info");

    const contactHeaderOne = document.createElement("h3");
    contactHeaderOne.textContent = "Benjamin";

    const contactParaOne = document.createElement("p");
    contactParaOne.textContent = "An aspiring chef whos dream is to taste the Universe!";

    const phoneOne = document.createElement("p");
    phoneOne.textContent = "Phone Number";

    const emailOne = document.createElement("p");
    emailOne.textContent = "Email";

    contactCardOne.appendChild(contactHeaderOne);
    contactCardOne.appendChild(contactParaOne);
    contactCardOne.appendChild(phoneOne);
    contactCardOne.appendChild(emailOne);


    const contactCardTwo = document.createElement("div");
    contactCardTwo.classList.add("contact--info");

    const contactHeaderTwo = document.createElement("h3");
    contactHeaderTwo.textContent = "Brett";

    const contactParaTwo = document.createElement("p");
    contactParaTwo.textContent = "An aspiring artist who comes up with new dish ideas!";

    const phoneTwo = document.createElement("p");
    phoneTwo.textContent = "Phone Number";

    const emailTwo = document.createElement("p");
    emailTwo.textContent = "email";


    contactCardTwo.appendChild(contactHeaderTwo);
    contactCardTwo.appendChild(contactParaTwo);
    contactCardTwo.appendChild(phoneTwo);
    contactCardTwo.appendChild(emailTwo);

    mainContact.appendChild(header);
    mainContact.appendChild(contactCardOne);
    mainContact.appendChild(contactCardTwo);

    home.append(mainContact);

    content.append(home);
}

