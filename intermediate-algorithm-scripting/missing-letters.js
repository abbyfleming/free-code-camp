/*

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

*/


function fearNotLetter(str) {

	for (let i = 0; i < str.length; i++) {
		
		let letter = str.charCodeAt(i);
		let finder = str.charCodeAt(0) + i; // take the character code and add the incremented

		if (letter !== finder) {
			return String.fromCharCode(finder);
		}
	}

	return undefined;
}

fearNotLetter("abce"); // d
fearNotLetter("abcdefghjklmno"); // i
fearNotLetter("bcd") // undefined
fearNotLetter("yz") // undefined