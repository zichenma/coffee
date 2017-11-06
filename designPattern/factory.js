// 主要好处就是可以消除对象间的耦合，通过使用工程方法而不是new关键字。
// 将所有实例化的代码集中在一个位置防止代码重复。

// 工厂模式解决了重复实例化的问题 ，但还有一个问题,那就是识别问题，
// 因为根本无法 搞清楚他们到底是哪个对象的实例。


function createObject(name, age, profession){
    //集中实例化的函数
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.profession = profession;
    obj.move = function () {
        return this.name + ' at ' + this.age + ' engaged in ' + this.profession;
    };
    return obj;
}
var test1 = createObject('trigkit4',22,'programmer');//第一个实例
var test2 = createObject('mike',25,'engineer');//第二个实例



