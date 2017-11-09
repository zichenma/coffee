function isArray(obj){
    return Object.prototype.toString.call( obj ) === '[object Array]';
}

function isArray2(obj){
    return obj.__proto__ === Array.prototype;
}