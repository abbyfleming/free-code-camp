
/*

Return the length of the longest word in the provided sentence.

Your response should be a number.

*/

function findLongestWord(str) {

	let phrase = str.split(' ');
	let maxLength = 0;

	for (let i = 0; i < phrase.length; i ++) {
		
		let wordLength = phrase[i].length;

		if (wordLength > maxLength) {
			maxLength = wordLength;
		}
	}

	return maxLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog"); // 6
findLongestWord("May the force be with you"); // 5
findLongestWord("Google do a barrel roll"); // 4
findLongestWord("What is the average airspeed velocity of an unladen swallow"); // 6
findLongestWord("What if we try a super-long word such as otorhinolaryngology"); //19 

