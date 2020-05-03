function countUniqueValues(arr) {
    debugger;
	//Check if the input is an array, if not return false
	if (!Array.isArray(arr)) {
		return false;
	}

	//Check if the arr is empty, if it is return 0
	if (arr.length === 0) {
		return 0;
	}

	//Declare 2 pointers starting next to each other
	let reference = 0;

	//Loop over until the second pointer is equal to the last index
	for (let counter = 1; counter < arr.length; counter++) {
		//Check if the reference value is equal to the counter value in array
		if (arr[reference] !== arr[counter]) {
			//If true increment reference
			reference++;
			arr[reference] = arr[counter];
		} 
	} 
	return ++reference;
}

console.log(countUniqueValues([ 1, 1, 1, 1, 1, 2 ]));
console.log(countUniqueValues([ 1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13 ]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([ -2, -1, -1, 0, 1 ]));
