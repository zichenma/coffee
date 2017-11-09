//  Time: best: avg: O(nlogn) worset: O(n2) Space: O(n) (in this case)

function quickSort (arr) {
    // edge case
    if (arr.length <= 1) return arr;
    //initialize lfet, right and pointer as the left
    var left = [], right = [], q = arr[0];
    // i is start from 1
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > q) {
            right.push(arr[i]);
        } else {
            left.push(arr[i]);
        }
    
    }
    // merge them
    return [].concat(quickSort(left),q,quickSort(right));

}

document.write(quickSort([32,45,37,16,2,87]));



function mergeSort(arr)
{
    if (arr.length <= 1) return arr;
 
    var middle = Math.floor(arr.length / 2);
    var left   = arr.slice(0, middle);
    var right  = arr.slice(middle, arr.length);
 
    return merge(mergeSort(left), mergeSort(right));
}
 
function merge(left, right)
{
    var result = [];
 
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
 
    while (left.length)
        result.push(left.shift());
 
    while (right.length)
        result.push(right.shift());
 
    return result;
}

document.write(mergeSort([32,45,37,16,2,87]));

