window.onload = function () {
    var go = document.getElementById('go');
    var box = document.getElementById('box');

    eventUtil.addHandler(box, 'click', function () {
        alert("I am parent box"); 
    });

    eventUtil.addHandler(go, 'click', function (e) {
        e = eventUtil.getEvent(e);
        alert(eventUtil.getElement(e));
        eventUtil.preventDefault(e);
        eventUtil.stopPropagation(e);
    });
}