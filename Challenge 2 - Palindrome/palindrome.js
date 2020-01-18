// digit of the max & min number, default to 3
const digit = process.argv[2] || 3;

/**
 * 
 * @description Logs the result
 * @param {Number} palindrom The largest palindrome
 * @param {Number} num factor of the palindrome
 * 
 */
function logResult(palindrom, num) {
    const result = `${palindrom} = ${num} x ${palindrom / num}`;
    console.log(`The largest palindrome made from the product of two ${digit}-digit numbers is: ${result}`);
}

/**
 * 
 * @param {Number} num number as fisrt half of the Palindrome
 * @returns Palindrome number
 * 
 */
function makePalindrome(num) {
    const palindrom = num + ('' + num).split('').reverse().join('')
    return Number(palindrom);
}

/**
 * 
 *      Find the largest palindrome made from the product of numbers
 * 
 */
const getLargiestPalindrome = () => {
    const max = Math.pow(10, digit) - 1;
    const min = Math.pow(10, digit - 1) - 1;

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
    logResult(palindrom, num)
};

getLargiestPalindrome();
