const cards = [
    { name: 'card1', img: 'https://i.pinimg.com/736x/6e/fa/f3/6efaf31741d39113e84c613a1cf27857.jpg' },
    { name: 'card2', img: 'https://i.pinimg.com/736x/bc/da/8b/bcda8b7fb3e7300b132b848ae5a8585a.jpg' },
    { name: 'card3', img: 'https://i.pinimg.com/736x/ad/f3/9a/adf39a09bc810bb04aea515b42aaf945.jpg' },
    { name: 'card4', img: 'https://i.pinimg.com/736x/a7/d9/c5/a7d9c58e5a792fd7d2a415b36b4fcf4f.jpg' },
    { name: 'card1', img: 'https://i.pinimg.com/736x/6e/fa/f3/6efaf31741d39113e84c613a1cf27857.jpg' },
    { name: 'card2', img: 'https://i.pinimg.com/736x/bc/da/8b/bcda8b7fb3e7300b132b848ae5a8585a.jpg' },
    { name: 'card3', img: 'https://i.pinimg.com/736x/ad/f3/9a/adf39a09bc810bb04aea515b42aaf945.jpg' },
    { name: 'card4', img: 'https://i.pinimg.com/736x/a7/d9/c5/a7d9c58e5a792fd7d2a415b36b4fcf4f.jpg' },
];

// Sắp xếp ngẫu nhiên các card
cards.sort(() => 0.5 - Math.random());

// phần dưới căng quá lên lấy code trên mạng về sử dụng =)

const gridContainer = document.querySelector('.grid-container');

function createBoard() {
    cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.setAttribute('data-id', index);
        cardElement.classList.add('card');
        cardElement.addEventListener('click', flipCard);
        gridContainer.appendChild(cardElement);
    });
}

let chosenCards = [];
let chosenCardIds = [];
let score = 0;

function checkMatch() {
    const cardElements = document.querySelectorAll('.card');
    const [firstCardId, secondCardId] = chosenCardIds;
    
    if (chosenCards[0] === chosenCards[1]) {
        cardElements[firstCardId].removeEventListener('click', flipCard);
        cardElements[secondCardId].removeEventListener('click', flipCard);
        score++;
        document.getElementById('score').innerText = score;
    } else {
        cardElements[firstCardId].style.backgroundImage = `url('https://i.pinimg.com/736x/8b/0c/79/8b0c79e5652d0f1f2400e97a7ea2ab7d.jpg')`; // Default back image
        cardElements[secondCardId].style.backgroundImage = `url('https://i.pinimg.com/736x/8b/0c/79/8b0c79e5652d0f1f2400e97a7ea2ab7d.jpg')`; // Default back image
    }
    
    chosenCards = [];
    chosenCardIds = [];
}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    chosenCards.push(cards[cardId].name);
    chosenCardIds.push(cardId);
    this.style.backgroundImage = `url('${cards[cardId].img}')`;
    
    if (chosenCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

createBoard();
