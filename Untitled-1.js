window.onload = function () {
	buttonCounter = 0;
	console.log(buttonCounter);
};
let leftButton = document.getElementById("button-backward"),
	rightButton = document.getElementById("button-forward"),
	track = document.getElementById("track"),
	buttonCounter;

leftButton.onclick = function () {
	buttonCounter == 0 ? (buttonCounter = 0) : (buttonCounter -= 1);
	moveCards();
};

rightButton.onclick = function () {
	buttonCounter == 2 ? (buttonCounter = 0) : (buttonCounter += 1);
	moveCards();
};

function moveCards() {
	track.style.transform = `translateX(-${buttonCounter}00%)`;
	console.log(`translateX(-${buttonCounter}00%);`);
}
