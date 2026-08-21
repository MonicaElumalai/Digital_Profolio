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

const numbers = [
    document.getElementById("s1"),
    document.getElementById("s2"),
    document.getElementById("s3"),
    document.getElementById("s4"),
    document.getElementById("s5"),
    document.getElementById("s6")
];

const btnPresent = document.getElementById("here");
const btnNext = document.getElementById("nxt");
const gameText = document.getElementById("text");
const closeButton = document.getElementById("close");

const gameBox = document.querySelector(".game-box");


/*
   Four cards are enough to identify
   every number from 1 to 10.

   Card 1 = 1
   Card 2 = 2
   Card 3 = 4
   Card 4 = 8
*/

const cards = [
    {
        key: 1,
        values: [1, 3, 5, 7, 9]
    },

    {
        key: 2,
        values: [2, 3, 6, 7, 10]
    },

    {
        key: 4,
        values: [4, 5, 6, 7]
    },

    {
        key: 8,
        values: [8, 9, 10]
    }
];


let currentCard = 0;
let guessedNumber = 0;


/* Hide Belong button initially */

btnPresent.style.visibility = "hidden";


/* =========================
   NEXT BUTTON
========================= */

btnNext.addEventListener("click", function () {

    showCard();

});


/* =========================
   BELONG BUTTON
========================= */

btnPresent.addEventListener("click", function () {

    guessedNumber += cards[currentCard - 1].key;

    currentCard++;

    if (currentCard <= cards.length) {

        showCard();

    } else {

        showResult();

    }

});


/* =========================
   SHOW CARD
========================= */

function showCard() {

    if (currentCard >= cards.length) {

        showResult();

        return;

    }


    const card = cards[currentCard];

    numbers.forEach(function (box, index) {

        if (index < card.values.length) {

            box.textContent = card.values[index];

        } else {

            box.textContent = "";

        }

    });


    gameText.textContent =
        "Is your number in this box? Click Belong if YES, otherwise click Continue.";

    btnPresent.style.visibility = "visible";

    btnNext.textContent = "Continue";

    currentCard++;

}


/* =========================
   SHOW FINAL RESULT
========================= */

function showResult() {

    numbers.forEach(function (box) {

        box.textContent = "";

    });


    if (guessedNumber >= 1 && guessedNumber <= 10) {

        gameText.innerHTML =
            "🎉 I guess your number is <strong>" +
            guessedNumber +
            "</strong>!";

    } else {

        gameText.textContent =
            "Hmm... something went wrong. Please try again.";

    }


    btnPresent.style.visibility = "hidden";

    btnNext.textContent = "Play Again";


    btnNext.onclick = function () {

        resetGame();

    };

}


/* =========================
   RESET GAME
========================= */

function resetGame() {

    currentCard = 0;

    guessedNumber = 0;

    btnPresent.style.visibility = "hidden";

    btnNext.textContent = "Let's Go";

    btnNext.onclick = function () {

        showCard();

    };

    gameText.textContent =
        "Guess a number from 1 to 10";

}


/* =========================
   CLOSE GAME
========================= */

closeButton.addEventListener("click", function () {

    gameBox.style.display = "none";

});
