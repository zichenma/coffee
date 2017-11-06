function GetBytes(str){
    
            var len = str.length;
    
            var bytes = len;
    
            for(var i=0; i<len; i++){
    
                if (str.charCodeAt(i) > 255) bytes++;
    
            }
    
            return bytes;
    
        }
    
    document.write(GetBytes("你好,as"));