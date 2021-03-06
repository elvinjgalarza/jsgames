﻿document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'applications',
            img: 'images/cp4apps.png'
		},
        {
            name: 'applications',
            img: 'images/cp4apps.png'
		},
        {
            name: 'automation',
            img: 'images/cp4auto.png'
		},
        {
            name: 'automation',
            img: 'images/cp4auto.png'
		},
        {
            name: 'data',
            img: 'images/cp4data.png'
		},
        {
            name: 'data',
            img: 'images/cp4data.png'
		},
        {
            name: 'integration',
            img: 'images/cp4int.png'
		},
        {
            name: 'integration',
            img: 'images/cp4int.png'
		},
        {
            name: 'mcm',
            img: 'images/cp4mcm.png'
		},
        {
            name: 'mcm',
            img: 'images/cp4mcm.png'
		},
        {
            name: 'security',
            img: 'images/cp4sec.png'
		},
        {
            name: 'security',
            img: 'images/cp4sec.png'
		}
    ]

    cardArray.sort(() => 0.5 - Math.random())


    const grid = document.querySelector('.grid')
    var cardsChosen = [] // contains names of image
    var cardsIDChosen = [] // contains assigned ids
    var cardPair = [] // contains matches
    const resultDisplay = document.querySelector('#result')


    // build the board
    function buildBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/cloud.jpg')
            card.setAttribute('card-id', i) // assign an ID to each card
            card.addEventListener('click', flipCard) // listen if cards have been picked, invoke flipCard
            grid.appendChild(card)
        }
    }

    // flip a card
    function flipCard() {
        var cardID = this.getAttribute('card-id')
        if(cardID == cardsIDChosen[0]){
            alert('Im sorry, Dave, Im afraid I cant do that. I think you know what the problem is just as well as I do.')
            return
        }
        // check if the card has been matched already
        if(this.src.includes("images/white.png")){
            alert('Please choose a card still in play.')
            return
        }
        
        cardsChosen.push(cardArray[cardID].name)
        cardsIDChosen.push(cardID)
        
        
        this.setAttribute('src', cardArray[cardID].img) // set src to image of card to reveal it
        if (cardsChosen.length === 2) {
            setTimeout(checkMatch, 500)
        }
    }

    // check for a match
    function checkMatch() {
        var cards = document.querySelectorAll('img')
        const ID1 = cardsIDChosen[0]
        const ID2 = cardsIDChosen[1]
        if (cardsChosen[0] == cardsChosen[1]) {
            alert('You have found a match!')
            cards[ID1].setAttribute('src', 'images/white.png')
            cards[ID1].setAttribute('className', 'match')
            cards[ID2].setAttribute('src', 'images/white.png')
            cards[ID2].setAttribute('className', 'match')
            cardPair.push(cardsChosen)
        } else {
            cards[ID1].setAttribute('src', 'images/cloud.jpg')
            cards[ID2].setAttribute('src', 'images/cloud.jpg')
            alert('Sorry, try again.')
        }

        cardsChosen = [] //reset for next pair of choices
        cardsIDChosen = [] //reset for next pair of choices

        resultDisplay.textContent = cardPair.length
        if (cardPair.length == cardArray.length / 2) { // if we've found all the pairs
            resultDisplay.textContent = 'Congrats!'
        }
    }


    buildBoard()

})
