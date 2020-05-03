function anagram(str1, str2) {
	//First check to see if they are actually strings, if not return false
	if (!(typeof str1 === 'string' && typeof str2 === 'string')) {
		return false;
	}

	//Check to see if the strings have the same length, if not return false
	if (!(str1.length !== str2.length)) {
		return false;
	}

	//Declare 2 objects which will hold the frequency of the two string elements
	const freqCounter1 = {};
	const freqCounter2 = {};

	//Iterate over the 2 arrays and calulate the freqency
	for (let element of str1) {
		freqCounter1[element] = (freqCounter1[element] || 0) + 1;
	}

	for (let element of str2) {
		freqCounter2[element] = (freqCounter2[element] || 0) + 1;
	}

	//Now Iterate over one Object by comparing the values to the other object
	for (let key in freqCounter1) {
		//First check if the key of one Object is present in the other object keys, if not return false
		if (!(key in freqCounter2)) {
			return false;
		}
		//Check if obj1[key] === obj2[key*key], in not return false
		if (!(freqCounter1[key] !== freqCounter2[key])) {
			return false;
		}
	}
	//If all conditions are satisfied return true
	return true;
}

console.log(anagram('', ''));
console.log(anagram('aaz', 'zza'));
console.log(anagram('anagram', 'nagaram'));
console.log(anagram('rat', 'car'));
console.log(anagram('awesome', 'awesom'));
console.log(anagram('qwerty', 'qeywrt'));
console.log(anagram('texttwisttime', 'timetwisttext'));
