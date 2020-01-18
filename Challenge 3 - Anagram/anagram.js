const a = process.argv[2];
const b = process.argv[3];

/**
 *
 * @description The function is for checking if the param is a letter
 * @param {String} str string to be check
 * @returns boolean
 *
 */
const isLetter = str => {
	const rule = /^[a-z]+$/i;
	return rule.test(str);
};

/**
 *
 * @description The function is for creating char map
 * @param {String} text String to be coverted into Object
 * @returns char map
 *
 */
const makeMap = text => {
	const map = {};
	for (let char of text) {
		if (isLetter(char)) {
			const key = char.toLowerCase();
			const num = map[key];
			map[key] = num ? num + 1 : 1;
		}
	}
	return map;
};

/**
 *
 * @description The function is for validating the strings
 * @param {Array} args array of text1, text2
 * @returns boolean
 *
 */
const isValid = args => {
	args.forEach(arg => {
		if (!arg) throw new Error('Required 2 words / phrases');
	})
	return true;
};

/**
 * 
 * @description The function is to check if the length of 2 Object are the same
 * @param {Object} map1 the first map
 * @param {Object} map2 the second map
 * @returns boolean
 * 
 */
const isLengthMatch = (map1, map2) => {
	const getLength = obj => Object.keys(obj).length;
	return getLength(map1) === getLength(map2);
};

/**
 *
 * @description The function is for determine if two strings of letters are anagrams
 * @param  {String} text1 The first word / phrase
 * @param  {String} text2 The second word / phrase
 * @returns boolean
 *
 */
const isAnagram = (...args) => {
	if (!isValid(args)) return;
	const [map1, map2] = args.map(makeMap);
	if (!isLengthMatch(map1, map2)) return false;
	for (let char in map1) {
		if (map1[char] !== map2[char]) return false;
	}
	return true;
};

console.log(isAnagram(a, b));
