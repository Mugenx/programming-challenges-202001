/**
 * @description This function is for getting a random number
 * @param {Number} range range of the random integer, default to 100
 * @returns random integer
 */
const getNum = (range = 100) => Math.floor(Math.random() * range);

// an array of 100 random integers bewtween 1 and 99
const nums = [...Array(100)].map(getNum);

/**
 * @description This function is used to quick sort the numbers in array
 * @param {Array} arr array to be sorted
 * @returns sorted numbers of array
 */
const quickSort = arr => {
	if (arr.length <= 1) return arr;
	const pivot = arr.pop();
	const left = [];
	const right = [];

	const partition = num => {
		num <= pivot ? left.push(num) : right.push(num);
	};

	arr.forEach(partition);
	return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort(nums));
