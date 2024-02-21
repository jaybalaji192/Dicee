// var p1Name = prompt("Enter Name of Player 1");
// var p2Name = prompt("Enter Name of Player 2");



// var p1 = 1;
// var p2 = 1;

var faces = [
    'img/dice/dice-six-faces-one.png',
    'img/dice/dice-six-faces-two.png',
    'img/dice/dice-six-faces-three.png',
    'img/dice/dice-six-faces-four.png',
    'img/dice/dice-six-faces-five.png',
    'img/dice/dice-six-faces-six.png',
]

function updateDice(p, val) {
    $(p).setAttribute("src", faces[val]);
}


var p1 = Math.floor(Math.random() * 5);
var p2 = Math.floor(Math.random() * 5);

updateDice(".p1", p1.toString())
updateDice(".p2", p2.toString())


if (p1 == p2) {
    $("h1").text("Tie 🏳️");
}
else {
    if (p1 > p2) {
        $("h1").text("Player 1 wins 🚩");
    }
    else {
        $("h1").text("Player 2 wins 🚩");
    }
}


