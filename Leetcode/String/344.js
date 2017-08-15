var reverseString = function(s) {
  var str = '';
  for(var i = s.length-1; i>=0; i--){
  	  str = str + s.charAt(i);
  }
  return str;
};


var reverseString2 = function(s){
	var array =	s.split('');
    for(var i = 0; i < array.length/2; i++){
    	swap(i,array.length-1-i);
    }
    function swap(a,b){
    	var temp = array[a];
    		array[a] = array[b];
    		array[b] = temp;
    }
    return console.log(array.join(""));
}


reverseString("Hello");

reverseString2("Hello");