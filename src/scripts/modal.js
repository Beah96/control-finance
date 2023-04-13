import { insertedValues } from "./valuesData.js";
import { createItem } from "./index.js";

const modalBox = document.querySelector("dialog")
const entries = document.querySelector("#enteries")
entries.value= 0
const debits = document.querySelector("#debits")
debits.value= 1


const openModal = document.querySelector("#showModal")
openModal.addEventListener("click", (ev)=>{
    modalBox.showModal()
})

const closeModal = document.querySelector("#closeModal")
closeModal.addEventListener("click", (ev)=>{
    modalBox.close()
})

const cancelModal = document.querySelector("#cancel")
cancelModal.addEventListener("click", (ev)=>{
    modalBox.close()
})

const putNewValue = document.querySelector(".insertValue__button")
putNewValue.addEventListener("click", (ev)=>{
    let inputValueString = document.querySelector("#value").value
    let inputValue = parseFloat(inputValueString)
    let inputCategory = document.querySelector('input[name="category"]:checked').value;
    insertValues(insertedValues, inputValue, inputCategory)
    let oldCardsList = document.querySelector(".cards__ul")
    oldCardsList.remove()
    
    createItem(insertedValues)

    modalBox.close()

})


function insertValues(array, inputValueNumber, inputCategoryValue){

    let newObject = {...array[array.length - 1], id:array.length+1, value: inputValueNumber, categoryID: inputCategoryValue }

    array.push(newObject)

    return array
}
