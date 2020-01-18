const a = process.argv[2];
const b = process.argv[3];

const makeMap = text => {
	const map = {};
	for (let char of text) {
		const key = char.toLowerCase();
		const num = map[key];
		map[key] = num ? num + 1 : 1;
	}
	return map;
};

const matchSize = (text1, text2) => {
	if (!text1 || !text2) throw new Error('Required 2 words / phrases');
	return text1.length === text2.length;
};

const isAnagram = (...args) => {
	if (!matchSize(...args)) return false;
	const [map1, map2] = args.map(makeMap);
	for (let char in map1) {
		if (map1[char] !== map2[char]) return false;
	}
	return true;
};

console.log(isAnagram(a, b));
