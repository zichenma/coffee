function randomStr (n) {
    var str = 'abcdefghijklmnopqrstuvwxyz9876543210';
    var temp = '', i = 0, len = str.length;

    for (i = 0; i < n; i ++) {
        temp += str.charAt(Math.floor(Math.random() * len));
    }
    return temp;
}