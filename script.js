/* =========================
   BACK TO TOP BUTTON
========================= */

const myButton = document.getElementById("myBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }

});

myButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   NUMBER GUESSING GAME
========================= */

const boxes = [
    document.getElementById("s1"),
    document.getElementById("s2"),
    document.getElementById("s3"),
    document.getElementById("s4"),
    document.getElementById("s5"),
    document.getElementById("s6")
];

const belongButton = document.getElementById("here");
const nextButton = document.getElementById("nxt");
const gameText = document.getElementById("text");
const closeButton = document.getElementById("close");
const gameBox = document.querySelector(".game-box");


/*
   CARD SYSTEM

   Card 1 contains:
   1, 3, 5, 7, 9

   Card 2 contains:
   2, 3, 6, 7, 10

   Card 3 contains:
   4, 5, 6, 7

   Card 4 contains:
   8, 9, 10

   The values are:

   Card 1 = 1
   Card 2 = 2
   Card 3 = 4
   Card 4 = 8

   Adding the values of the cards
   where the number appears gives
   the original number.
*/

const cards = [

    {
        numbers: [1, 3, 5, 7, 9],
        value: 1
    },

    {
        numbers: [2, 3, 6, 7, 10],
        value: 2
    },

    {
        numbers: [4, 5, 6, 7],
        value: 4
    },

    {
        numbers: [8, 9, 10],
        value: 8
    }

];


/* Current card */

let currentCard = 0;


/* Final guessed number */

let guessedNumber = 0;


/* =========================
   INITIAL STATE
========================= */

belongButton.style.visibility = "hidden";

nextButton.textContent = "Let's Go";


/* =========================
   LET'S GO / CONTINUE
========================= */

nextButton.addEventListener("click", function () {

    /*
       If all cards have already been checked,
       start a new game.
    */

    if (currentCard >= cards.length) {

        resetGame();

        showCard();

        return;

    }


    /*
       If the button says Continue,
       the current card was NOT selected.

       Therefore move to the next card.
    */

    if (nextButton.textContent === "Continue") {

        currentCard++;

    }


    /*
       Show the next card.
    */

    showCard();

});


/* =========================
   BELONG BUTTON
========================= */

belongButton.addEventListener("click", function () {

    /*
       The number exists in this card.

       Add the card's value to the answer.
    */

    guessedNumber += cards[currentCard].value;


    /*
       Move to the next card.
    */

    currentCard++;


    /*
       Show next card.
    */

    showCard();

});


/* =========================
   SHOW CARD
========================= */

function showCard() {

    /*
       If all 4 cards are checked,
       show the final answer.
    */

    if (currentCard >= cards.length) {

        showResult();

        return;

    }


    const current = cards[currentCard];


    /*
       Clear all six boxes first.
    */

    boxes.forEach(function (box) {

        box.textContent = "";

    });


    /*
       Put the numbers into the boxes.
    */

    current.numbers.forEach(function (number, index) {

        boxes[index].textContent = number;

    });


    /*
       Update instruction.
    */

    gameText.textContent =
        "Is your number in this card? Click Belong if YES, otherwise click Continue.";


    /*
       Show Belong button.
    */

    belongButton.style.visibility = "visible";


    /*
       Change button text.
    */

    nextButton.textContent = "Continue";

}


/* =========================
   SHOW RESULT
========================= */

function showResult() {

    /*
       Clear numbers.
    */

    boxes.forEach(function (box) {

        box.textContent = "";

    });


    /*
       Display answer.
    */

    gameText.innerHTML =
        "🎉 I guess your number is <strong>" +
        guessedNumber +
        "</strong>!";


    /*
       Hide Belong.
    */

    belongButton.style.visibility = "hidden";


    /*
       Change Continue to Play Again.
    */

    nextButton.textContent = "Play Again";

}


/* =========================
   RESET GAME
========================= */

function resetGame() {

    currentCard = 0;

    guessedNumber = 0;


    boxes.forEach(function (box) {

        box.textContent = "";

    });


    gameText.textContent =
        "Guess a number from 1 to 10";


    belongButton.style.visibility = "hidden";

    nextButton.textContent = "Let's Go";

}


/* =========================
   CLOSE GAME
========================= */

closeButton.addEventListener("click", function () {

    gameBox.style.display = "none";

});
