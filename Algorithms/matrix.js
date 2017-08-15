var arr1 = new Array(2), start = 1;



for (var i = 0; i < 2; i++) {
	arr1[i] = new Array(3);
}

for (var i = 0; i < 2; i++) {
	for (var j = 0;  j < 3; j++) {
		arr1[i][j] = start;
		start++;
	}
}

for (var i = 0; i < 2; i++) {
	for (var j = 0; j < 3; j++) {
		document.write(arr1[i][j] + "&emsp;");
	}
	document.write("<br/>");

}

document.write("<br />");
document.write("<br />");
document.write("_______");
document.write("<br />");
document.write("<br />");


var arr2 = new Array(3);

for (var i = 0; i < 3; i++) {
	arr2[i] = new Array(2);
}
for (var i = 0; i < 3; i++) {
	for (var j = 0; j < 2; j++) {
		arr2[i][j] = start;
		start++;
	}
}
for (var i = 0; i < 3; i++) {
	for(var j = 0; j < 2; j++) {
		document.write(arr2[i][j] + "&emsp;");
	}
	document.write("<br />");
}


document.write("_______");
document.write("<br />");


function matrixMutiplication (mA, mB) {
	var result = new Array(mA.length);
	for(var i = 0; i < result.length; i++){
		result[i] = new Array(mB[i].length);
		for (var j = 0; j < mA.length; j++) {
			result[i][j] = 0;
			for (var k = 0; k < mB.length; k++) {
				result[i][j] += mA[i][k] * mB[k][j] ;
			}

		}
	}
	return result;
}

document.write(matrixMutiplication(arr1,arr2));