document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "image1",
      img: "images/img1.jpg",
    },
    {
      name: "image2",
      img: "images/img2.jpg",
    },
    {
      name: "image3",
      img: "images/img3.jpg",
    },
    {
      name: "image4",
      img: "images/img4.jpg",
    },
    {
      name: "image5",
      img: "images/img5.jpg",
    },
    {
      name: "image6",
      img: "images/img6.jpg",
    },
    {
      name: "image7",
      img: "images/img7.jpg",
    },
    {
      name: "image8",
      img: "images/img8.jpg",
    },
    {
      name: "image1",
      img: "images/img1.jpg",
    },
    {
      name: "image2",
      img: "images/img2.jpg",
    },
    {
      name: "image3",
      img: "images/img3.jpg",
    },
    {
      name: "image4",
      img: "images/img4.jpg",
    },
    {
      name: "image5",
      img: "images/img5.jpg",
    },
    {
      name: "image6",
      img: "images/img6.jpg",
    },
    {
      name: "image7",
      img: "images/img7.jpg",
    },
    {
      name: "image8",
      img: "images/img8.jpg",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  const cardsWon = [];

  //create  board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      alert("You have clicked the same image!");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].setAttribute("src", cardArray[cardsChosenId[0]].img);
      cards[optionTwoId].setAttribute("src", cardArray[cardsChosenId[1]].img);
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You found them all!";
    }
  }

  //flip your card
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});

function refresh() {
  location.reload();
}
