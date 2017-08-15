"use strict";
var sort = (function(){
	return{
			quickSort: function bubbleSort(arr) {  
			    for(let i = 0,l=arr.length;i<l-1;i++) {
			        for(let j = i+1;j<l;j++) { 
			          if(arr[i]>arr[j]) {
			                let tem = arr[i];
			                arr[i] = arr[j];
			                arr[j] = tem;
			            	}
	        		}
	    		}
	    		return arr;
			},
			insertionSort: function (arr) {
			    var len = arr.length;
			    var preIndex, current;
			    for (var i = 1; i < len; i++) {
			        preIndex = i - 1;
			        current = arr[i];
			        while(preIndex >= 0 && arr[preIndex] > current) {
			            arr[preIndex+1] = arr[preIndex];
			            preIndex--;
			        }
			        arr[preIndex + 1] = current;
			    }
			    return arr;
			}
	}
})();

//var sort = new Sort();


var test = (function(){
	function randmArr(len,n,m){
		let randmArr = [];
		for(let i =0; i < len; i++){
			randmArr.push(Math.round(Math.random()*(n-m)+m));
		}
		return randmArr;
	}
	return function(){
		console.log(sort.quickSort(randmArr(9,10,25)));
	}
})();

//test();