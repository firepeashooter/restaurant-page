import './styles.css';


//A function that generates the home tab
const generateHome = () => {

    const content = document.querySelector("#content");

    //create the home div
    const home = document.createElement("div");
    home.classList.add("home");

    //create the main div
    const main = document.createElement("div");
    main.classList.add("main");

    //create header
    const header = document.createElement("header");
    header.classList.add("header");
    header.textContent = "Starlight Snackery";

    //create info div
    const info = document.createElement("div");
    info.classList.add("info");

    const infoHeader = document.createElement("h3");
    infoHeader.textContent = "Welcome to Starlight Snackery! - A Taste of the Cosmos!";

    const infoParagraph = document.createElement("p");
    infoParagraph.textContent = "At Starlight Snackery, we serve up shimmering bites and celestial delights straight from the stars." 
                                    + "From galaxy-glazed treats to meteorite munchies, our menu is designed to take your tastebuds on an interstellar adventure." 
                                    + "One bite, and you’ll be over the moon!";

    info.appendChild(infoHeader);
    info.appendChild(infoParagraph);


    //create hours div
    const hours = document.createElement("div");
    hours.classList.add("hours");

    const hoursHeader = document.createElement("h3");
    hoursHeader.textContent = "Hours";

    const monday = document.createElement("h4");
    monday.textContent = "Monday: 8am-9pm";
    const tuesday = document.createElement("h4");
    tuesday.textContent = "Tuesday: 8am-9pm";
    const wednesday = document.createElement("h4");
    wednesday.textContent = "Wednesday: 8am-9pm";

    hours.appendChild(hoursHeader);
    hours.appendChild(monday);
    hours.appendChild(tuesday);
    hours.appendChild(wednesday);


    //Add all the divs in
    main.appendChild(header);
    main.appendChild(info);
    main.appendChild(hours);

    home.appendChild(main);

    content.appendChild(home);

    

};
