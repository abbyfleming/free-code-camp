/*

Return an English translated sentence of the passed binary string.

The binary string will be space separated.

Helpful Resources:
The radix is the number of values for a single digit. Hexidecimal would be 16. Octal would be 8, Binary would be 2, and so on...
https://stackoverflow.com/a/6611870

*/

function binaryAgent(str) {

	let phrase = str.split(" ");
	let sentence = "";

	for (let i = 0; i < phrase.length; i++) {
		let unicodeLetter = parseInt(phrase[i], 2);
		let character = String.fromCharCode(unicodeLetter);
		sentence += character;
	
	} 
	
	return sentence;
}


binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); // "Aren't bonfires fun!?"
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"); // "I love FreeCodeCamp!