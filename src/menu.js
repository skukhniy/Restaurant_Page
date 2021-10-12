import menu1 from "./imgs/pizza.jpeg"
import menu2 from './imgs/pasta.jpeg'
import menu3 from './imgs/gabagool.png'

function loadItem(itemNum, imgSrc,h2innerHTML,pinnerHTML){
    
    //create div
    const itemDiv = document.createElement('div');
    itemDiv.classList.add("menu")
    itemDiv.id = itemNum

    //img
    const itemPic = new Image();
    itemPic.src = imgSrc;

    //h2
    const itemH2 = document.createElement('h2');
    itemH2.innerHTML = h2innerHTML;

    //p
    const itemP = document.createElement('p');
    itemP.innerHTML = pinnerHTML

    itemDiv.appendChild(itemPic)
    itemDiv.appendChild(itemH2)
    itemDiv.appendChild(itemP)
    
    return itemDiv
}

function loadMenu(){

    const item1 = 'item1'
    const img1 = menu1
    const h21 = 'Pizza'
    const p1 = 'Margherita, Parmigana, Pepperoni, BBQ Chicken, Prosciutto, Ham, Hawaiian, Meat Lovers'

    const item2 = 'item2'
    const img2 = menu2
    const h22 = 'Pasta'
    const p2 = 'Ricotta Pasta, Creamy Pasta with Spinach, Cherry Tomato Pasta Salad, Garlic Mushroom Pasta, Sun-Dried Tomato Pesto Pasta'

    const item3 = 'item3'
    const img3 = menu3
    const h23 = 'Gabagool!'
    const p3 = "New Jersey's Finest"

    const page = document.createElement('div')
    page.classList.add('page')
    
    const item0 = document.createElement('div')
    item0.classList.add('margin')

    page.appendChild(item0)
    page.appendChild(loadItem(item1,img1,h21,p1))
    page.appendChild(loadItem(item2,img2,h22,p2))
    page.appendChild(loadItem(item3,img3,h23,p3))

    const content = document.getElementById('content')

    content.appendChild(page)
    
    
}

export default loadMenu;