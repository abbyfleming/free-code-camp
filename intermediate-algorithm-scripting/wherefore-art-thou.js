/*

Make a function that looks through an array 
of objects (first argument) and returns an 
array of all objects that have matching 
property and value pairs (second argument). 
Each property and value pair of the source 
object has to be present in the object from 
the collection if it is to be included 
in the returned array.

For example, if the first argument is 
[{ first: "Romeo", last: "Montague" }, 
{ first: "Mercutio", last: null }, 
{ first: "Tybalt", last: "Capulet" }], 

and the second argument is 
{ last: "Capulet" }, 

then you must return the third object 
from the array (the first argument), 
because it contains the property 
and its value, that was passed 
on as the second argument.

*/


function whatIsInAName(collection, source) {
	
	// Function is a predicate, to test each element of the array. 
	// Return true to keep the element, false otherwise
	
	let finder = collection.filter(function(obj){
		
		for (var key in source) {
	
			if (obj[key] !== source[key]) { 
				// check for falsies -- if the first one doesn't match, continue
				// otherwise, it's kick to true and stop
				return false; 
			}
		}

		return true; // returns obj
	});

	return finder;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) // [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]






