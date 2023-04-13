import { insertedValues } from "./valuesData.js";
import { createItem } from "./index.js";

const allFilter = document.getElementById('allFilter')
allFilter.addEventListener("click", (ev)=>{
    let oldCardsList = document.querySelector(".cards__ul")
    oldCardsList.remove()
    createItem(insertedValues)
})

const enteriesFilter = document.getElementById('enteriesFilter')
enteriesFilter.addEventListener("click",(ev)=>{
    let oldCardsList = document.querySelector(".cards__ul")
    oldCardsList.remove()
    let enteriesFiltered = insertedValues.filter(item => item.categoryID == 0)
    createItem(enteriesFiltered)
})

const debitsFilter = document.getElementById('debitsFilter')
debitsFilter.addEventListener("click",(ev)=>{
    let oldCardsList = document.querySelector(".cards__ul")
    oldCardsList.remove()
    let debitsFiltered = insertedValues.filter(item => item.categoryID == 1)
    createItem(debitsFiltered)
})
