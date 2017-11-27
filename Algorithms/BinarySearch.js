function quickSort(arr) {
    if(arr.length<=1) {
        return arr;
    }
    let leftArr = [];
    let rightArr = [];
	let q = arr[0];
    for(let i = 1; i<arr.length; i++) {
        if(arr[i]>q) {
            rightArr.push(arr[i]);
        }else{
            leftArr.push(arr[i]);
        }
    }
    return [].concat(quickSort(leftArr),[q],quickSort(rightArr));
}


var binarySearch = function(nums, target){
	quickSort(nums);

	if (nums == null || nums.length == 0) {
		return -1;
	}

	var start = 0, end = nums.length - 1;

	while (start + 1 < end) {

        var mid = Math.floor((start + end) / 2);
       
		if (nums[mid] == target) {
			end = mid;
		} else if (nums[mid] > target) {
			end = mid;
		} else {
			start = mid;
		}
	}
    if (nums[start] == target) {
		return start;
	}
	if (nums[end] == target) {

		return end;
	}

	return -1;

}



console.log(binarySearch([1,4,5,13,0,4], 4));