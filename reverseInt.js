const reverseInt = (number) => {
	const numberString = number > 0 ? String(number) : String(0 - number);
	let result = number >= 0 ? "" : "-";
	for (let i = numberString.length - 1; i >= 0; i--) {
		result += numberString[i];
	}
	return Number(result);
};
export default reverseInt;
