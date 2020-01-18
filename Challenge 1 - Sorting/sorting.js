const arr = [40, 2, 66, 93, 32];

const quickSort = arr => {
	if (arr.length <= 1) return arr;
	const pivot = arr.pop();
	const left = [];
	const right = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] <= pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort(arr));
