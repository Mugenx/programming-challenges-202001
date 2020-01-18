function makePalindrome(num) {
    const palindrom = num + ('' + num).split('').reverse().join('')
    return Number(palindrom);
}

const getLargiestPalindrome = () => {
	const max = 999, min = 99;
	let half = Math.floor((max * min) / 100);
	let stop = false;
	let palindrom, num;
	while (!stop) {
		palindrom = makePalindrome(half);
		for (i = max; i > min; i--) {
			if (palindrom / i > max || i * i < palindrom) break;
			if (palindrom % i === 0) {
				stop = !stop;
				num = i;
				break;
			}
		}
		half--;
    }
	console.log(palindrom, '=', num, 'x', palindrom / num);
};

getLargiestPalindrome();
