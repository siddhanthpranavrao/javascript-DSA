function averagePair(arr, avg) {
	//Check if the decimal part is 0.5 or 0
	if (!(avg % 1 === 0.5 || avg % 1 === 0)) return false;
	//Check if the array has atleat 2 elements
	if (arr.length <= 2) return false;

	//Declare 2 pointers to keep track
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		if ((arr[left] + arr[right]) / 2 === avg) {
			return true;
		} else if ((arr[left] + arr[right]) / 2 > avg) {
			right--;
		} else {
			left++;
		}
	}
	return false;
}

console.log(averagePair([ 1, 2, 3 ], 2.5));
console.log(averagePair([ 1, 3, 3, 5, 6, 7, 10, 12, 19 ], 8));
console.log(averagePair([ -1, 0, 3, 4, 5, 6 ], 4.1));
console.log(averagePair([], 4));
