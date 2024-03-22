const jokes = [
	"Why don't skeletons fight each other?<br>Because they don't have the guts!",
	"Did you hear about the mathematician who's afraid of negative numbers?<br>He'll stop at nothing to avoid them!",
	"Why did the tomato turn red?<br>Because it saw the salad dressing!",
	"I told my wife she should embrace her mistakes...<br>She gave me a hug!",
	"Why don't scientists trust atoms?<br>Because they make up everything!",
	"Why don't skeletons go to scary movies?<br>They don't have the guts for it!",
	"I'm reading a book on anti-gravity...<br>It's impossible to put down!",
	"Why was the math book sad?<br>Because it had too many problems!",
	"I'm reading a horror book in Braille...<br>Something bad is about to happen, I can feel it!",
	"Why don't oysters donate to charity?<br>Because they're shellfish!",
	"Why don't scientists trust atoms?<br>Because they make up everything!",
	"Parallel lines have so much in common.<br>It's a shame they'll never meet.",
	"I told my wife she was drawing her eyebrows too high.<br>She looked surprised.",
	"I'm reading a book on anti-gravity.<br>It's impossible to put down!",
	"Why don't skeletons fight each other?<br>They don't have the guts.",
	"I used to be a baker,<br>but I couldn't make enough dough.",
	"I told my computer I needed a break,<br>and now it won't stop sending me vacation ads.",
	"I told my wife she should embrace her mistakes.<br>She gave me a hug.",
	"I'm on a whiskey diet.<br>I've lost three days already.",
	"Why don't scientists trust stairs?<br>Because they're always up to something.",
];

const jokeText = document.getElementById("joke-text");
const generateButton = document.getElementById("generate-button");

generateButton.addEventListener("click", () => {
	const randomIndex = Math.floor(Math.random() * jokes.length);
	jokeText.innerHTML = jokes[randomIndex];
});
