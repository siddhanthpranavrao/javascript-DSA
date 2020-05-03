function countUniqueValues(arr) {
	//Check if the input is an array, if not return false
	if (!Array.isArray(arr)) {
		return false;
	}

	//Check if the arr is empty, if it is return 0
	if (arr.length === 0) {
		return {
			no  : 0,
			arr : []
		};
	}

	//Declare 2 pointers starting next to each other
	let reference = 0;
	let counter = 1;

	//Declare a new array with unique values
	const uniqueArr = [];
	arr.push(arr[reference]);

	//Declare a variable which holds the total no. of unique values
	let uniqueValues = 0;

	//Loop over until the second pointer is equal to the last index
	while (counter < arr.length) {
		//Check if the reference value is equal to the counter value in array
		if (arr[reference] === arr[counter]) {
			//If true increment counter
			counter++;
		} else {
			//Increment uniqueValues, set reference to counter value, then increment counter
			uniqueArr.push(arr[reference]);
			uniqueValues++;
			reference = counter;
			counter++;
		}
	}
	return {
		no  : uniqueValues,
		arr : uniqueArr
	};
}

console.log(countUniqueValues([ 1, 1, 1, 1, 1, 2 ]));
console.log(countUniqueValues([ 1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13 ]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([ -2, -1, -1, 0, 1 ]));
