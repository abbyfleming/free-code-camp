/*

Return the provided string with the first letter 
of each word capitalized. Make sure the rest 
of the word is in lower case.

For the purpose of this exercise, 
you should also capitalize connecting 
words like "the" and "of".

*/


function titleCase(str) {

	let phrase = str.toLowerCase().split(' ');
	let title = [];

	for (let i = 0; i < phrase.length; i++) {

		let word = phrase[i];
		let firstChar = word.charAt(0);
		let upper = firstChar.toUpperCase();
		let titleCase = word.replace(firstChar, upper);
	
		title.push(titleCase);
	}

	return title.join(" ");
}


titleCase("I'm a little tea pot"); // a string.
titleCase("I'm a little tea pot"); // "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt"); // "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"); // "Here Is My Handle Here Is My Spout"
