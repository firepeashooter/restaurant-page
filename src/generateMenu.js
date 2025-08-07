import star from "./images/star.png";
import pasta from "./images/pasta.jpg";
import burger from "./images/burger.jpg";



export function generateMenu(){

    const content = document.querySelector("#content");

    //create the home div
    const home = document.createElement("div");
    home.classList.add("home");

    //create the mainMenu div
    const mainMenu = document.createElement("div");
    mainMenu.classList.add("main--menu");

    //create header
    const header = document.createElement("header");
    header.classList.add("header");
    header.textContent = "Menu";

    //create cardContainer
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card--container");


    //Build foodCards
    const foodCardOne = document.createElement("div");
    foodCardOne.classList.add("food--card");

    const foodHeaderOne = document.createElement("h3");
    foodHeaderOne.textContent = "Wormhole Pasta";

    const foodImageOne = document.createElement("img");
    foodImageOne.src = pasta;
    foodImageOne.classList.add("food--image");

    const foodParaOne = document.createElement("p");
    foodParaOne.textContent = "A fine pasta made from a wormhole";

    foodCardOne.appendChild(foodHeaderOne);
    foodCardOne.appendChild(foodImageOne);
    foodCardOne.appendChild(foodParaOne);


    const foodCardTwo = document.createElement("div");
    foodCardTwo.classList.add("food--card");

    const foodHeaderTwo = document.createElement("h3");
    foodHeaderTwo.textContent = "Meteorite Burger";

    const foodImageTwo = document.createElement("img");
    foodImageTwo.src = burger;
    foodImageTwo.classList.add("food--image");

    const foodParaTwo = document.createElement("p");
    foodParaTwo.textContent = "A banging Meteorite Burger";

    foodCardTwo.appendChild(foodHeaderTwo);
    foodCardTwo.appendChild(foodImageTwo);
    foodCardTwo.appendChild(foodParaTwo);


    const foodCardThree = document.createElement("div");
    foodCardThree.classList.add("food--card");

    const foodHeaderThree = document.createElement("h3");
    foodHeaderThree.textContent = "Item 3";

    const foodImageThree = document.createElement("img");
    foodImageThree.src = star;
    foodImageThree.classList.add("food--image");

    const foodParaThree = document.createElement("p");
    foodParaThree.textContent = "Description for Food Item 3";

    foodCardThree.appendChild(foodHeaderThree);
    foodCardThree.appendChild(foodImageThree);
    foodCardThree.appendChild(foodParaThree);


    //Add food cards to container
    cardContainer.appendChild(foodCardOne);
    cardContainer.appendChild(foodCardTwo);
    cardContainer.appendChild(foodCardThree);

    mainMenu.appendChild(header);
    mainMenu.appendChild(cardContainer);

    home.appendChild(mainMenu);

    content.appendChild(home);



};

