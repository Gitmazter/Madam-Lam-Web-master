import MenuItem from './MenuItem.js';
import { items } from './menuItems.js';

/* Globals */


/* Main FN */
export default function menuView () {
    let menu = document.getElementById("fullMenu");

    const dishes = document.createElement("section");
    dishes.id = "dishes";
    dishes.classList = "menuSection";
    dishes.innerHTML = `<h2 class="menuSecH2">Feeling Hungry?</h2>`;

    const snacks = document.createElement("section");
    snacks.id = "snacks";
    snacks.classList = "menuSection";
    snacks.innerHTML = `<h2 class="menuSecH2">Feeling Peckish?</h2>`;

    const bowls = document.createElement("section");
    bowls.id = "bowlss";
    bowls.classList = "menuSection";
    bowls.innerHTML = `<h2 class="menuSecH2">Feeling Smooth?</h2>`;

    const alcohol = document.createElement("section");
    alcohol.id = "alcohol";
    alcohol.classList = "menuSection";
    alcohol.innerHTML = `<h2 class="menuSecH2">Alcohol</h2>`;

    const milkshakes = document.createElement("section");
    milkshakes.id = "milkshakes";
    milkshakes.classList = "menuSection";
    milkshakes.innerHTML = `<h2 class="menuSecH2">Milkshakes</h2>`;

    const juices = document.createElement("section");
    juices.id = "juices";
    juices.classList = "menuSection";
    juices.innerHTML = `<h2 class="menuSecH2">Juices</h2>`;

    const coffee = document.createElement("section");
    coffee.id = "coffee";
    coffee.classList = "menuSection";
    coffee.innerHTML = `<h2 class="menuSecH2">Coffee</h2>`;

    const smoothies = document.createElement("section");
    smoothies.id = "smoothies";
    smoothies.classList = "menuSection";
    smoothies.innerHTML = `<h2 class="menuSecH2">Smoothies</h2>`;
    
    for (let i = 0; i < items.length; i++) {
        console.log("running loop");
        const curItem = new MenuItem(items[i].id, items[i].price,items[i].dish,items[i].category, items[i].allergens,items[i].imgUrl); 
        let itemDiv = document.createElement("div");
        itemDiv.id = curItem.dish;
        itemDiv.classList = curItem.category;
        itemDiv.innerHTML = `<div class="mItemDiv"> <p class="itemTxt">${curItem.dish}</p> <p class="itemTxt">Price: ${curItem.price}</p> <div>`

        console.log(curItem);
        /*  Switch to append to correct section */
        switch (curItem.category) {
            case "dish":
                dishes.appendChild(itemDiv);
                break;

            case "snack":
                snacks.appendChild(itemDiv);
                break;

            case "bowl":
                bowls.appendChild(itemDiv);
                break;

            case "alcohol":
                alcohol.appendChild(itemDiv);
                break;

            case "juice":
                juices.appendChild(itemDiv);
                break;

            case "smoothie":
                smoothies.appendChild(itemDiv);
                break;

            case "milkshake":
                milkshakes.appendChild(itemDiv);
                break;

            case "coffee":
                coffee.appendChild(itemDiv);
        }
    }

    //menu.appendChild(dishes, snacks, bowls, alcohol, juices, smoothies, milkshakes, coffee);

    menu.appendChild(dishes);
    menu.appendChild(snacks);
    menu.appendChild(bowls);
    menu.appendChild(alcohol);
    menu.appendChild(juices);
    menu.appendChild(smoothies);
    menu.appendChild(milkshakes);
    menu.appendChild(coffee);

};