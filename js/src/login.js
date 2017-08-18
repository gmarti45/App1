var tort = document.getElementById("tort");
tort.onclick = function() {tortMove()};
var hare = document.getElementById("hare");
hare.onclick = function() {hareMove()};
var tortPosition = 50;
var harePosition =50;

function tortMove() {
    tort.style.left = tortPosition + "px";
    tortPosition = tortPosition + 20;
}

function hareMove() {
    hare.style.left = harePosition + "px";
    harePosition = harePosition + 5;
}

