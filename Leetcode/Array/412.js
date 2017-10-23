var thirdMax = function(nums) {
	var newArr = Array.from(new Set(nums));
	newArr.sort(function (a,b) {return a - b});
	if (newArr[newArr.length - 3] !== undefined) {
		return newArr[newArr.length - 3];
	} else {
		return newArr[newArr.length - 1];
	}
};



thirdMax([1,2,3,4,5]);
