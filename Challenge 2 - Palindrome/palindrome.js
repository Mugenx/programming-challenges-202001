// digit of the max & min number, default to 3
const digit = process.argv[2] || 3;

/**
 * 
 * @description Logs the result
 * @param {Number} palindrome The largest palindrome
 * @param {Number} num factor of the palindrome
 * 
 */
function logResult(palindrome, num) {
    const result = `${palindrome} = ${num} x ${palindrome / num}`;
    console.log(`The largest palindrome made from the product of two ${digit}-digit numbers is: ${result}`);
}

/**
 * 
 * @param {Number} num number as fisrt half of the Palindrome
 * @returns Palindrome number
 * 
 */
function makePalindrome(num) {
    const palindrome = num + ('' + num).split('').reverse().join('')
    return Number(palindrome);
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
	let palindrome, num;
	while (!stop) {
        palindrome = makePalindrome(half);
		for (i = max; i > min; i--) {
            if (palindrome / i > max || i * i < palindrome) break;
			if (palindrome % i === 0) {
                stop = !stop;
				num = i;
				break;
			}
		}
		half--;
    }
    logResult(palindrome, num)
};

getLargiestPalindrome();
