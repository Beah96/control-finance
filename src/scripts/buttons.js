import { insertedValues } from "./valuesData.js";
import { createItem, cardSection, emptyListMessage} from "./index.js";

const allFilter = document.getElementById('allFilter')
allFilter.addEventListener("click", (ev)=>{
    let oldCardsList = document.querySelector(".cards__ul")
    oldCardsList.remove()
    createItem(insertedValues)
    let cardsList = document.querySelector(".cards__ul")
    if(cardsList.children.length<=0){
        emptyListMessage(cardsList, "Nenhum valor cadastrado")
    }

})

const enteriesFilter = document.getElementById('enteriesFilter')
enteriesFilter.addEventListener("click",(ev)=>{
    let oldCardsList = document.querySelector(".cards__ul")
    oldCardsList.remove()
    let enteriesFiltered = insertedValues.filter(item => item.categoryID == 0)
    createItem(enteriesFiltered)
    let cardsList = document.querySelector(".cards__ul")
    if(cardsList.children.length<=0){
        emptyListMessage(cardsList, "Nenhum valor de entrada cadastrado")
    }
})

const debitsFilter = document.getElementById('debitsFilter')
debitsFilter.addEventListener("click",(ev)=>{
    let oldCardsList = document.querySelector(".cards__ul")
    oldCardsList.remove()
    let debitsFiltered = insertedValues.filter(item => item.categoryID == 1)
    createItem(debitsFiltered)
    let cardsList = document.querySelector(".cards__ul")
    if(cardsList.children.length<=0){
        emptyListMessage(cardsList, "Nenhum valor de saída cadastrado")
    }
})
