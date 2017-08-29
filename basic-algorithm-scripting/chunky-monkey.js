/*

Write a function that splits an array (first argument) 
into groups the length of size (second argument) 
and returns them as a two-dimensional array.

*/


function chunkArrayInGroups(arr, size) {

	let complete = [];

	for (let i = 0; i < arr.length; i+= size) {
		if (i % size === 0 ) {
			let sliced = arr.slice(i, i+size); // start/stop
			complete.push(sliced);
		}
	}
	
	return complete;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); // [["a", "b"], ["c", "d"]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3); // [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2); // [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4); // [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3); // [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); // [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2); // [[0, 1], [2, 3], [4, 5], [6, 7], [8]]