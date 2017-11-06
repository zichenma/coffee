(function (){
    for(var i = 1; i <= 100; i++) {
        var div = document.createElement("div");                       
        document.body.appendChild(div);
        div.innerHTML = i;
    
    }
    for(var i = 0; i < 100; i++) {
        if( i % 2 == 0){
            document.getElementsByTagName("div")[i].style.color = "red";
        }else{
            document.getElementsByTagName("div")[i].style.color = "blue";
        }	
    }
})()
