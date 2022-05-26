const sort = arr => {
	if(!arr.length)
		return [];

	for(let i = arr.length - 1; i >= 0; i--) {
		for(let j = 0; j < i; j++) {
			if(arr[j] > arr[j + 1])
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
		}
	}

	return arr;
}

const TEST_CASES = [
	[29, 10, 14, 37, 14],
	[7, 30, 45, 29, 28, 7, 32, 42, 42, 15, 22, 29, 12, 24],
	[17, 6, 42, 31, 48, 29, 16, 22, 48, 4, 38, 7],
	[25, 8, -46, 41, -1, 26, 6, 0, 31, 17, 3, -17, 37, 12],
	[],
	[1, 1, 1, 1, 1],
	[0, -1, 1]
];

TEST_CASES.forEach(arr => console.log(sort(arr)));