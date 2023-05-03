const textDisplay = document.getElementById('type-writers');
const phrases = ['UI/UX Designer. ', 'Full Stack Web Developer. ', 'Digital Designer. '];
const phrasesLength = phrases.length;

let i = 0;
let j = 0;
let curPhrase = [];
let curPhraseLength = 0;
let isDeliting = false;

function loop() {
	textDisplay.textContent = curPhrase.join('');

	if (i < phrasesLength) {
		curPhraseLength = phrases[i].length;
		if (!isDeliting && j <= curPhraseLength) {
			curPhrase.push(phrases[i][j]);
			j++;
		}

		if (isDeliting && j <= curPhraseLength) {
			curPhrase.pop(phrases[i][j]);
			j--;
		}
		if (j == curPhraseLength) {
			isDeliting = true;
		}
		if (isDeliting && j === 0) {
			curPhrase = [];
			isDeliting = false;
			i++;
			if (i == phrasesLength) {
				i = 0;
			}
		}
	}
	setTimeout(loop, 300);
}
loop();
