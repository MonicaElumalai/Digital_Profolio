/* =========================
   TOP BUTTON
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
   GAME
========================= */

const var1 = document.getElementById("s1");
const var2 = document.getElementById("s2");
const var3 = document.getElementById("s3");
const var4 = document.getElementById("s4");
const var5 = document.getElementById("s5");
const var6 = document.getElementById("s6");

const btnPresent = document.getElementById("here");
const btnNext = document.getElementById("nxt");

const gameText = document.getElementById("text");
const closeButton = document.getElementById("close");
const gameBox = document.querySelector(".game-box");


let count = 1;
let resultNumber = 0;


/* Numbers used by the game */

const key = [10, 20, 30, 50];


/* Final answers */

const result = {

    20: 1,
    30: 2,
    70: 3,
    40: 5,
    10: 6,
    50: 7,
    60: 8,
    80: 9,
    90: 10,
    100: 3

};


/* Initially hide the "Belong" button */

btnPresent.style.visibility = "hidden";


/* =========================
   GAME EVENTS
========================= */

btnNext.addEventListener("click", perform);

btnPresent.addEventListener("click", guess);


/* =========================
   PLAYER SAYS YES
========================= */

function guess() {

    resultNumber = resultNumber + key[count - 2];

    perform();

}


/* =========================
   GAME MAIN FUNCTION
========================= */

function perform() {

    gameText.innerHTML =
        "Is your chosen number here? Click <b>Belong</b> if it is, otherwise click <b>Continue</b>.";


    btnPresent.style.visibility = "visible";

    btnNext.textContent = "Continue";


    switch (count) {

        case 1:

            one();

            count++;

            break;


        case 2:

            two();

            count++;

            break;


        case 3:

            three();

            count++;

            break;


        case 4:

            four();

            count++;

            break;


        default:

            zero();


            gameText.innerHTML =
                "I guess you chose <b>" + result[resultNumber] + "</b> 🎉";


            if (count > 4) {

                count = 1;

                resultNumber = 0;

            }

            break;

    }

}


/* =========================
   GAME LEVEL 1
========================= */

function one() {

    var1.innerHTML = "2";
    var2.innerHTML = "6";
    var3.innerHTML = "5";
    var4.innerHTML = "8";
    var5.innerHTML = "10";
    var6.innerHTML = "";

}


/* =========================
   GAME LEVEL 2
========================= */

function two() {

    var1.innerHTML = "1";
    var2.innerHTML = "2";
    var3.innerHTML = "4";
    var4.innerHTML = "3";
    var5.innerHTML = "";
    var6.innerHTML = "";

}


/* =========================
   GAME LEVEL 3
========================= */

function three() {

    var1.innerHTML = "5";
    var2.innerHTML = "9";
    var3.innerHTML = "10";
    var4.innerHTML = "3";
    var5.innerHTML = "";
    var6.innerHTML = "";

}


/* =========================
   GAME LEVEL 4
========================= */

function four() {

    var1.innerHTML = "4";
    var2.innerHTML = "7";
    var3.innerHTML = "8";
    var4.innerHTML = "9";
    var5.innerHTML = "10";
    var6.innerHTML = "3";

}


/* =========================
   CLEAR GAME NUMBERS
========================= */

function zero() {

    var1.innerHTML = "";
    var2.innerHTML = "";
    var3.innerHTML = "";
    var4.innerHTML = "";
    var5.innerHTML = "";
    var6.innerHTML = "";

}


/* =========================
   CLOSE GAME
========================= */

closeButton.addEventListener("click", function () {

    gameBox.style.display = "none";

});
