
let cards = []
let sum = 0

let messageEl = document.getElementById("message-el")
let message = ""
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let player = {
    name:"Meron",
    chips:150
}
let playerEl = document.getElementById("player-el")

let tem =37
const normalTemp =37
var Tem =37

console.log(tem + " " + normalTemp + " " + Tem)


let blackJack = false
let isActive = false
console.log(sum)

function getRandomCard(){
    let random = (Math.floor(Math.random() * 13)) + 1 
    console.log(random)
    if(random === 1){
        return 11
    }else if (random > 10){
        return 10 
    }else{
        return random
    }
}
function startGame(){
    isActive = true
    playerEl.textContent = player.name + ": $" + player.chips
   let firstCard = getRandomCard()
   let secondCard = getRandomCard()
   cards = [firstCard, secondCard]
   sum = firstCard + secondCard
    renderGame()
    return firstCard, secondCard
}

function renderGame(){
if (sum < 21){
    message = "do you want to draw a new card "
    console.log(message)
}else if(sum === 21){
    message ="Wohoo! you have got blackjack "
    console.log("Wohoo! you have got blackjack ")
    blackJack = true
}else{
    message = "oops! you have lost the game!  "
    console.log("oops! you have lost the game!  ")
    isActive = false
}
    let allcard = ""
    for(let i = 0; i < cards.length; i++){
        allcard += cards[i] + " " 
        cardEl.textContent = "Cards: " + allcard
    }
sumEl.textContent = "Sum: " + sum
messageEl.textContent =message
}

console.log(blackJack)
console.log(isActive)

function newCard(){
    if(isActive && !blackJack){
    let thirdCard = getRandomCard()
    sum += thirdCard
    cards.push(thirdCard)
    console.log(cards)
    renderGame()
    }
    console.log("Drawing a new card from the dack!")
}
