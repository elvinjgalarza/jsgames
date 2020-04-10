document.addEventListener('DOMContentLoaded', () => {

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
			name:'integration',
			img: 'images/cp4int.png'
		},
		{
			name:'integration',
			img: 'images/cp4int.png'
		},
		{
			name:'mcm',
			img: 'images/cp4mcm.png'
		},
		{
			name:'mcm',
			img: 'images/cp4mcm.png'
		},
		{
			name:'security',
			img: 'images/cp4sec.png'
		},
		{
			name:'security',
			img: 'images/cp4sec.png'
		}
    ]

	const grid = document.querySelector('.grid')
	var cardsChosen = []
	var cardsIDChosen = []
	var cardPair = []
	const resultDisplay = document.querySelector('#result')

	
	// build the board
	function buildBoard(){
		for(let i=0; i<cardArray.length; i++){
			var card = document.createElement('img')
			card.setAtrribute('src', 'images/board.png')
			card.setAttribute('card-id', i) // assign an ID to each card
			card.addEventListener('click', flipCard) // listen if cards have been picked, invoke flipCard
			grid.appendChild(card)
		}
	}
	
	// flip a card
	function flipCard(){
		var cardID = this.getAttribute('card-id')
		cardsChosen.push(cardArray[cardID].name)
		this.setAttribute('src', cardArray[cardID].img) // get image of card
		if(cardsChosen.length == 2){
			setTimeout(checkMatch, 500)
		}
	}
	
	// check for a match
	function checkMatch(){
		var cards = document.querySelectorAll('img')
		const opt1 = cardsIDChosen[0]
		const opt2 = cardsIDChosen[1]
		if(cardsChosen[0] == cardsChosen[1]){
			alert('You have found a match!')
			cards[opt1].setAttribute('src', 'images/white.png')
			cards[opt2].setAttribute('src', 'images/white.png')
			cardPair.push(cardsChosen)
		}
		else{
			cards[opt1].setAttribute('src', 'images/board.png')
			cards[opt2].setAttribute('src', 'images/board.png')
			alert('Sorry, try again.')
		}
		cardsChosen = []
		cardsIDChosen = []
		resultDisplay.textContent = cardPair.length
		if(cardPair.length == cardPair.length/2){
			resultDisplay.textContent = 'Congrats!'
		}
	}
	
	
	buildBoard()
	
})