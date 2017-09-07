/*

Perform a search and replace on the 
sentence using the arguments provided 
and return the new sentence.

First argument is the sentence to 
perform the search and replace on.

Second argument is the word that 
you will be replacing (before).

Third argument is what you will be 
replacing the second argument with (after).

NOTE: Preserve the case of the original word 
when you are replacing it. For example if you mean to 
replace the word "Book" with the word "dog", 
it should be replaced as "Dog"

*/


function myReplace(str, before, after) {

	// split the string into an array
	let phrase = str.split(' ');

	// find where before is in the array
	let pos = phrase.indexOf(before);
	let word = phrase[pos];
	let letter = word[0];

	if (letter === letter.toUpperCase()) {
		// if the first letter is uppercase, replace
		let titleCase = after.replace(after.charAt(0), after.charAt(0).toUpperCase());
		phrase[pos] = titleCase;

	} else {
		// set to after
		phrase[pos] = after;
	}

console.log('phrase', phrase.join(' ')); 
return phrase.join(' ');
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");




