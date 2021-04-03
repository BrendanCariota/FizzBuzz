let inputBar = document.querySelector('.inputBar')
let btn = document.querySelector('.btnGo')
let list = document.querySelector('.returnList')

let num
let arr = []
let tempElement

// Functions
const fizzBuzz = (number) => {
    arr = []
    list.innerHTML = ""
    for(i = 1; i <= number; i++) {
        if (i%3 == 0 && i%5 == 0) {
            arr.push('FizzBuzz')
        }
        else if (i%5 == 0) {
            arr.push('Buzz')
        }
        else if (i%3 == 0) {
            arr.push('Fizz')
        }
        else {
            arr.push(i);
        }
    }
    arr.map(num => {
        let listItem = document.createElement("li")
        listItem.textContent = num
        list.appendChild(listItem)
    })
    
}

// Getting the number
btn.addEventListener("click", function() {fizzBuzz(inputBar.value)})