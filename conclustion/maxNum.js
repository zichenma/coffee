function getMax (arr) {
    var min = arr[0]; 
    var max = 0
    for (var i = 0; i < arr.length; i++) {
        var curr = arr[i];
        min = Math.min(min, curr);
        var protential = curr - min;
        max = Math.max(max, protential);
    }
    return max;
}