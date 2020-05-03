function same(arr1, arr2) {
	//First check to see if the arrays are actually arrays, if not return error
	if (!(Array.isArray(arr1) && Array.isArray(arr2))) {

		throw new Error('Only Array Arguments');
	}

	//Check to see if the arrays have the same length, if not return false
	if ((arr1.length !== arr2.length)) {

		return false;
	}

	//Declare 2 objects which will hold the frequency of the two array elements
	const freqCounter1 = {};
	const freqCounter2 = {};

	//Iterate over the 2 arrays and calulate the freqency
	for (let element of arr1) {
		freqCounter1[element] = (freqCounter1[element] || 0) + 1;
	}

	for (let element of arr2) {
		freqCounter2[element] = (freqCounter2[element] || 0) + 1;
	}

	//Now Iterate over one Object by comparing the values to the other object
	for (let key in freqCounter1) {
		//First check if the key of one Object is present in the other object keys, if not return false
		if (!(key * key in freqCounter2)) {
			return false;
		}
		//Check if obj1[key] === obj2[key*key], in not return false
		if ((freqCounter1[key] !== freqCounter2[key * key])) {
			return false;
		}
	}
	//If all conditions are satisfied return true
	return true;
}

console.log(same([ 1, 2, 3 ], [ 4, 1, 9 ]));
console.log(same([ 1, 2, 3 ], [ 1, 9 ]));
console.log(same([ 1, 2, 1 ], [ 4, 4, 1 ]));