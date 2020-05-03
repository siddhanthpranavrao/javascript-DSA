function areThereDuplicates(...arr) {
	const freqCounter = {};

	for (let e of arr) {
		if (freqCounter[e]) {
			return true;
		}
		freqCounter[e] = 1;
	}

	return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));
