var myModule = angular.module("myApp", []);

myModule.controller('myCtr', function($scope){
	$scope.getAllFactorsFor = function(remainder) {
		var remainder = $scope.input;
		if(typeof(remainder) === "string"){
			console.log("is string");
		};
        var factors = [], i;   
        for (i = 2; i <= remainder; i++) {
            while ((remainder % i) === 0) {
                factors.push(i);
                remainder = remainder / i;
            }
        }
       
        document.getElementById("demo").innerHTML = factors;
	}
	
});


function toJadenCase (str) {
   var wordList = str.split(' ');
   for (var i = 0; i < wordList.length; i++) {
   	    wordList[i].charAt(0).toUpperCase();
   }
   return wordList;
}


function isIsogram(str){
  if (str === ' ') {
  	return true;
  }
  var hash = {};
  str = str.toLowerCase();
  for (var i = 0; i < str.length; i++) {
  	if (!hash[str.charAt(i)]) {
  		hash[str.charAt(i)] = 1;
  	} else {
  		hash[str.charAt(i)] += 1;
  	}
  }
  
  var maxValue = 1;

  for (var k in hash) {
  	if (hash[k] >= maxValue) {
  		maxValue = hash[k];
  	}
  }

  if (maxValue > 1) {
  	return false;
  }else {
  	return true;
  }
}


function longest (s1, s2) {
  var s = s1 + s2;
  s = s.split('');

  function checkUniqueness(value, index, self) {
  	return self.indexOf(value) === index;
  }

  return s.filter(checkUniqueness).sort().join('');
}

function removeDuplicateStr (str) {
  var strSet = new Set(str);
  return Array.from(strSet).join('');
}



function mergeSort(arr) {  //采用自上而下的递归方法
    var len = arr.length;
    if(len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}


var looping = function(n) {
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
};

var recursive = function(n) {
    if(n <= 2) {
        return 1;
    } else {
        return this.recursive(n - 1) + this.recursive(n - 2);
    }
};
//console.log(recursive(8));




var globalVar = "abc"; 

// Parent self invoking function 
(function outerFunction (outerArg) { // begin of scope outerFunction
    // Variable declared in outerFunction function scope 
    var outerFuncVar = 'x';    
    // Closure self-invoking function 
    (function innerFunction (innerArg) { // begin of scope innerFunction
        // variable declared in innerFunction function scope
        var innerFuncVar = "y"; 
        console.log(          
            "outerArg = " + outerArg + "\n" +
            "outerFuncVar = " + outerFuncVar + "\n" +
            "innerArg = " + innerArg + "\n" +
            "innerFuncVar = " + innerFuncVar + "\n" +
            "globalVar = " + globalVar);
 
    })(5); // Pass 5 as parameter 
    // end of scope innerFunction
})(7); // end of scope outerFunction  // Pass 7 as parameter 
//innerFunction is closure that is defined inside outerFunc







