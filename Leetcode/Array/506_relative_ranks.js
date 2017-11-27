var findRelativeRanks = function(nums) {
    //slice() return a new array, this for store the original array
    var sorted = nums.slice();
    //sort array from large to small
    sorted.sort(function(a,b){return b-a});
    //find the indexOf sorted a
    nums.forEach(function(value,index){
        if(sorted.indexOf(nums[index]) == 0){
        	nums[index] = "Gold Medal"
        }
        else if(sorted.indexOf(nums[index]) == 1){nums[index] = "Silver Medal"}
        else if(sorted.indexOf(nums[index]) == 2){nums[index] = "Bronze Medal"}
        else {nums[index] = (sorted.indexOf(nums[index]) + 1) + ''}
    });

    console.log(nums);
    return nums

}


var findRelativeRanks2 = function(nums) {
    var sorted = nums.slice(),
        map = {};
    
    sorted.sort(function(a,b){return b-a});

    sorted.forEach(function(v,i){
        map[v] = i + 1 + '';
    });
    
    console.log(map);
    return nums.map(function(v,i){
        switch(v){
            case sorted[0]:
                return "Gold Medal";
            case sorted[1]:
                return "Silver Medal";
            case sorted[2]:
                return "Bronze Medal";
            default:
                return map[v]
        }
    });
};

findRelativeRanks2([10,3,8,9,4]);