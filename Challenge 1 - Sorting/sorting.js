const getNum = () => Math.floor(Math.random() * 100);

// an array of 100 random integers bewtween 1 and 99
const nums = [...Array(100)].map(getNum);

const quickSort = arr => {
	if (arr.length <= 1) return arr;
	const pivot = arr.pop();
	const left = [];
	const right = [];

	const patition = num => {
		num <= pivot ? left.push(num) : right.push(num);
	};
	arr.forEach(patition);
	return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort(nums));
