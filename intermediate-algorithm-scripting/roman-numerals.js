/*

Convert the given number into a roman numeral.

*/


function convertToRoman(num) {

	let converted = ''; 
	let roman = {
			'M': 1000,
			'CM': 900,
			'D': 500,
			'CD': 400,
			'C': 100,
			'XC': 90,
			'L': 50,
			'XL': 40,
			'X': 10,
			'IX': 9,
			'V': 5,
			'IV': 4,
			'I': 1,
		};


	for (key in roman) {
		let value = roman[key];

		while (num >= value) {
			converted += key; // add the key to the string
			num -= value; // subtract the value from the number
		};
	};	

	console.log('converted', converted); 	
	return converted;
};

convertToRoman(2); // "II"
convertToRoman(3); // "III"
convertToRoman(4); // "IV"
convertToRoman(5); // "V"
convertToRoman(9); // "IX"
convertToRoman(12); // "XII"
convertToRoman(16); // "XVI"
convertToRoman(29); // "XXIX"
convertToRoman(44); // "XLIV"
convertToRoman(45); // "XLV"
convertToRoman(68); // "LXVIII"
convertToRoman(83); // "LXXXIII"
convertToRoman(97); // "XCVII"
convertToRoman(99); // "XCIX"
convertToRoman(500); // "D"
convertToRoman(501); // "DI"
convertToRoman(649); // "DCXLIX"
convertToRoman(798); // "DCCXCVIII"
convertToRoman(891); // "DCCCXCI"
convertToRoman(1000); // "M"
convertToRoman(1004); // "MIV"
convertToRoman(1006); // "MVI"
convertToRoman(1023); // "MXXIII"
convertToRoman(2014); // "MMXIV"
convertToRoman(3999); // "MMMCMXCIX"
