var rob = function(nums) {
	var rob = 0, notRob = 0;

	nums.forEach(function(num){
		var pre = Math.max(rob, notRob);
		rob = notRob + num;
		notRob =  pre;
	});

	return Math.max(rob,notRob);
};

rob([1,2,5,2,1,3]);