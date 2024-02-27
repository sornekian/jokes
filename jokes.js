const jokes = [
	"Why don't skeletons fight each other? Because they don't have the guts!",
	"Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
	"Why did the tomato turn red? Because it saw the salad dressing!",
	"I told my wife she should embrace her mistakes... She gave me a hug!",
	"Why don't scientists trust atoms? Because they make up everything!",
	"Why don't skeletons go to scary movies? They don't have the guts for it!",
	"I'm reading a book on anti-gravity... It's impossible to put down!",
	"Why was the math book sad? Because it had too many problems!",
	"I'm reading a horror book in Braille... Something bad is about to happen, I can feel it!",
	"Why don't oysters donate to charity? Because they're shellfish!",
];

const jokeText = document.getElementById("joke-text");
const generateButton = document.getElementById("generate-button");

generateButton.addEventListener("click", () => {
	const randomIndex = Math.floor(Math.random() * jokes.length);
	jokeText.textContent = jokes[randomIndex];
});
