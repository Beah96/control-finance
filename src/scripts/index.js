import { insertedValues } from "./valuesData.js";

export const cardSection = document.querySelector(".cards__section")
const total = document.querySelector(".total__p")

export function createItem(array){
    let cardsList = document.createElement("ul")
    cardsList.classList.add("cards__ul")

    array.forEach(element => {

    let item = document.createElement("li")
    item.classList.add("cards__li")
    item.dataset.id = `${element.id}`

    let itemValue = document.createElement("p")
    itemValue.classList.add("value__p")
    itemValue.innerText = `R$${element.value}`

    let itemDiv = document.createElement("div")
    itemDiv.classList.add("item__div")

    let itemCategory = document.createElement("p")
    itemCategory.classList.add("category__p")
        if(element.categoryID == 0){
            itemCategory.innerText = "Entrada"
        } else if (element.categoryID == 1){
            itemCategory.innerText = "Saída"
        }

    let itemButton = document.createElement("button")
    itemButton.classList.add("item__button")
    let buttonImage= document.createElement("img")
    buttonImage.src="./src/assets/trash.svg"
    itemButton.appendChild(buttonImage)
    itemButton.addEventListener("click", (ev)=>{
        item.remove()
        let index = array.indexOf(element)
        array.splice(index)
        totalValue-= element.value
        total.innerText = `R$${totalValue}`
    })

    itemDiv.append(itemCategory, itemButton)
    item.append(itemValue, itemDiv)
    cardsList.appendChild(item)

    return cardsList
    });

    let totalValue = array.reduce((acumulador, itemAtual)=>{
        return acumulador += itemAtual.value
    },0)
    total.innerText = `R$${totalValue}`
    cardSection.appendChild(cardsList)

    return cardSection
}


createItem(insertedValues)