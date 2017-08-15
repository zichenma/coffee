 // for object and primitive data
 var noDuplicate1 = function (arr) {
    	var hash = {}, output = [];
    	for (var i = 0; i < arr.length; i++) {
    		var key = arr[i];
    		if (!hash[key]) {
    			hash[key] = true;
    			output.push(key);
    		}
    	}
    	return output;
    }
 // for primitive data
var noDuplicate2 = function (arr) {
    	arr = arr.filter ( function (item, index, arr) {
    		return arr.indexOf(item) == index;
    	});
    	return arr;
    }
// for primitive data
var noDuplicate3 = function (arr) {
    	return Array.from(new Set(arr));
    }
