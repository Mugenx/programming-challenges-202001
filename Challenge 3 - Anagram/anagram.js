const a = process.argv[2];
const b = process.argv[3];

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
		if (char !== ' ') {
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
 * @param {String} text1 The first string
 * @param {String} text2 The second string
 * @returns boolean
 * 
 */
const isValid = (text1, text2) => {
	if (!text1 || !text2) throw new Error('Required 2 words / phrases');
	return true;
};

/**
 *
 * @description The function is for determine if two strings of letters are anagrams
 * @param  {...any} args array of text1, text2
 * @returns boolean
 *
 */
const isAnagram = (...args) => {
	if (!isValid(...args)) return;
	const [map1, map2] = args.map(makeMap);
	for (let char in map1) {
		if (map1[char] !== map2[char]) return false;
	}
	return true;
};

console.log(isAnagram(a, b));
