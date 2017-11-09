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


var binarySearch = function(item, array){
	array.quickSort();

	var low = 0,
		high = array.length -1;
		mid, element;

	while (low <= high){
		mid = Math.floor((low + high)/2);
		element = array[mid];
		if (element < item){
			low = mid + 1;
		}else if (element > item){
			high = mid -1;
		}else{
			return mid;
		}
	}
	return -1;
}




