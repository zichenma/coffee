//  Time: best: avg: O(nlogn) worset: O(n2) Space: O(n) (in this case)

function quickSort (arr) {
    if (arr === null || arr.length === 0) {
        return;
    }
    var sortedArr = partition(arr, 0 , arr.length - 1);
    return sortedArr;
}

function partition (arr, start, end) {
    if (start >= end) {
        return;
    }

    var left = start, right = end;
    var pivot = arr[Math.floor((start + end) / 2)];

    while (left <= right) {
        while (left <= right && arr[left] < pivot) {
            left++;
        }

        while (left <= right && arr[right] > pivot) {
            right--;
        }

        if (left <= right) {
            var temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left ++;
            right --;
        }
    }
    partition(arr, start, right);
    partition(arr, left, end);  
    return arr;
}

console.log(quickSort([3,2,1]));



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

