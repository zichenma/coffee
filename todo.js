(function (window) {
    "use strict";
    function defineTodo () {
        var Todo = {};
        Todo.element = function(name, content, att, attVal, eveName, event) {
            var ele = document.createElement(name);
            ele.innerHTML = content;
            if (att !== "undefined" && attVal !== "undefined") {
                    ele.setAttribute(att, attVal);
            } 
           
            ele.addEventListener(eveName, function(){
                        event();
            }, false);
            document.body.appendChild(ele);
        }
      
        return Todo;
    }
    if (typeof Todo === "undefined") {
        window.Todo = defineTodo();
    }
})(window);





