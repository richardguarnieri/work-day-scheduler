// defining global variables
const currentDayEL = document.querySelector('#currentDay')
const container = document.querySelector('.container');
const textAreaElements = document.querySelectorAll('textarea');
let currentDate = new Date();
let currentHour = currentDate.getHours();

// adding current day to currentDay HTML ID
currentDayEL.innerHTML = Date();

// establishing the class of textareas depending on the hour of the day (past, present, future) using forEach method.
textAreaElements.forEach(element => {
    // console.log(element.id)
    let elementHour = parseInt(element.id);
    if (elementHour < currentHour) {
        element.classList.add('past');        
    } else if (elementHour === currentHour) {
        element.classList.add('present');
    } else {
        element.classList.add('future');
    }
})

// on window load, extract data from localStorage | IMPORTANT: we can merge this code with above (establishing classes to text areas) to simplify code. However, for simplicity and teaching purposes, I do it separately 
textAreaElements.forEach(element => {
    let elementHour = parseInt(element.id);
    element.value = localStorage.getItem(elementHour);
})

// establish the event listener function
const saveTimeBlock = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.target.localName === 'i') {
        let textAreaElement = event.path[2].querySelector('textarea');
        let textAreaElementID = textAreaElement.id;
        let textAreaElementValue = textAreaElement.value;
        localStorage.setItem(textAreaElementID, textAreaElementValue);
    }
}
// add event listener to container
container.addEventListener('click', saveTimeBlock);