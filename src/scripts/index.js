import { insertedValues } from "./valuesData.js";

export const cardSection = document.querySelector(".cards__section")
const total = document.querySelector(".total__p")
const modalBox = document.querySelector("dialog")

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
        if(cardsList.children.length === 0){
            emptyListMessage(cardsList,"Nenhum valor cadastrado" )
        }
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

export function emptyListMessage(list, string){
    let emptyList = document.createElement("div")
    emptyList.classList.add("empty__div")
    let emptyTitle = document.createElement("h1")
    emptyTitle.classList.add("empty__title")
    emptyTitle.innerText= string
    let emptyButton = document.createElement("button")
    emptyButton.innerText= "Registrar novo valor"
    emptyButton.classList.add("empty__button")
    emptyList.addEventListener("click", (ev)=>{
        modalBox.showModal()
    })
    emptyList.appendChild(emptyTitle)
    emptyList.appendChild(emptyButton)
    list.appendChild(emptyList)
}


createItem(insertedValues)