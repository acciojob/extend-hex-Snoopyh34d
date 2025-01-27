const extendHex = (shortHex) => {
  // write your code here
	//shortHex ="#bA0"

	let i = shortHex.length - 3, isLower = true;
	let output = "#";

	while (i<shortHex.length) {

		let asciiCode = shortHex[i].charCodeAt(0);
		if (asciiCode >=97 && asciiCode <=122) {
			isLower = flase;
		}
		output += shortHex[i] + shortHex[i];
		i++;
	}
	return isLower ? output.LowerCase() : output;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
