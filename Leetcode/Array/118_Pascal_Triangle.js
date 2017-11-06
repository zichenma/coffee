var getRow = function(rowIndex) {
    var res;
    if (rowIndex === 0) {
        return [1];
    }
    if (rowIndex === 1) {
        return [1,1];
    }
   
    if (rowIndex >  1) {
        res = [1].concat(mid(getRow(rowIndex - 1))).concat([1]);
        console.log(res);
        return res;
    }
};

var mid = function(lastRes) {
    var res = [];
    for (var i = 0; i < lastRes.length - 1; i++) {
        res.push(lastRes[i] + lastRes[i + 1]);
    }
    return res;
}

getRow(6);