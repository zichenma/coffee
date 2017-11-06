(function () {
    function createJs(sUrl){
        var oScript = document.createElement('script');
        oScript.type = 'text/javascript';
        oScript.src = sUrl;
        document.getElementsByTagName('head')[0].appendChild(oScript);
    }
        
    createJs('jsonp.js');

    box({
        'name': 'test'
    });

    function box(json){
        alert(json.name);
    }
})()