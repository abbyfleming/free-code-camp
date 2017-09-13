/*

Convert a string to spinal case. 
Spinal case is all-lowercase-words-joined-by-dashes.

*/

function spinalCase(str) {
 
  // In the replacement text, the script uses $1 and $2 to 
  // indicate the results of the corresponding matching 
  // parentheses in the regular expression pattern.
  // In most implementations + means "one or more".

  let find = /\s+|_+/g; // space, underscore
  let spaces = str.replace(/([a-z])([A-Z])/g, '$1 $2'); // add a space between words
  let taps = spaces.replace(find, "-").toLowerCase();

  return taps;
}

spinalCase('This_Is Spinal Tap');
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things");