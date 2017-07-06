function stringStuff(s1, s2, s3, s4) {
	//if 1st starts with 2nd
	//if 1st includes 3rd
	//if 1st ends w first
	var count = 0;

	if (s1.startsWith(s2) && s1.includes(s3) && s1.endsWith(s4)) {
		return 'My head, body and tail';
	}
	else {
		return 'Incomplete';
	}
}

console.log(stringStuff("Centipede", "Cent", "tip", "pede"));