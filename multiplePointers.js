function sumZero(arr) {
	//Check if the input is an array, if not return false
	if (!Array.isArray(arr)) {
		return false;
	}

	//Check is the array contains any negative numbers or zero, if not return false
	if (Math.min(...arr) > 0) {
		return false;
	}

	//Declare 2 pointers - 1 pointing to the beginning index and the other to the end index
	let left = 0;
	let right = arr.length - 1;
	//loop over with the condition that left pointer is lower than the right pointer
	while (left < right) {
		//Check the sum of the 2 elements
		let sum = arr[left] + arr[right];
		//If sum is zero return the pair
		if (sum === 0) {
			return [ arr[left], arr[right] ];
		} else if (sum > 0) {
			// If sum is positive move the right pointer towards the left
			right--;
		} else {
			// If sum is negative move the left pointer towards the right
			left++;
		}
	}

	//If nothing is returned in the loop return false
	return false;
}

console.log(sumZero([ -4, -3, -2, -1, 0, 1, 2, 3, 10 ]));
