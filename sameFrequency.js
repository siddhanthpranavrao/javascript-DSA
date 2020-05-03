function sameFrequency(num1, num2) {
	//Convert the numbers into strings
	const str1 = num1.toString();
	const str2 = num2.toString();

	//Check if both the strings have the same length
	if (str1.length !== str2.length) return false;

	//Declare a variable to store the frequency of the first string
	const str1FreqCount = {};

	//Loop over the String and calulate the frequency of each element
	for (let element of str1) {
		//Check if the value exits or not
		str1FreqCount[element] = (str1FreqCount[element] || 0) + 1;
	}

	//Loop over the first string
	for (let i = 0; i < str2.length; i++) {
		//Declare a variable to store the current letter of the second string
		let letter = str2[i];
		//Check if the the letter is not present in the freqCounter object
		if (!str1FreqCount[letter]) {
			//return false
			return false;
		}
		//Otherwise subtract 1 from the value with the key equal to the letter
		str1FreqCount[letter] = str1FreqCount[letter] - 1;
	}

	//If all conditions are satisfied return true
	return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
