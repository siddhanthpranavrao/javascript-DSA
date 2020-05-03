function isSubsequence(str1, str2) {
	//Check if the length of the first string is greater than the second string
	if (str1.length > str2.length) return false;
    
    //Check if the string1 is empty
	 if (!str1) return true;

	//Declare 2 pointers for each string to keep track
	let str1Pointer = 0;
	let str2Pointer = 0;

	//Loop over till the string2 pointer reaches the end
	while (str2Pointer < str2.length) {
		if (str1Pointer === str1.length - 1) return true;
		//Check against each letter of the first string
		if (str1[str1Pointer] === str2[str2Pointer]) {
			str1Pointer++;
			str2Pointer++;
		} else {
			str2Pointer++;
		}
	}

	return false;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));
console.log(isSubsequence('', 'acb'));