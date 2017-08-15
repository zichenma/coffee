
function HashTable(){
    var table = [];
    this.put = function(key,value){
        var position = loseloseHashCode(key);
        console.log(position + ' - ' + key);
        table[position] = value;
    };
    /*this.put = function(key, value){
    var position = loseloseHashCode(key);
    if (table[position] == undefined) { //{1}
    table[position] = new LinkedList();
    }
    table[position].append(new ValuePair(key, value)); //{2}
    };*/
    this.get = function(key){
        return table[loseloseHashCode(key)];
    };
    this.remove = function(key){
        table[loseloseHashCode(key)] == undefined;
        return true;
    };
    this.print = function(){
        for(var i = 0; i < table.length; i++){
            if(table[i] !== undefined){
                console.log(i + ":" +table[i]);
            }
        }
    };
}
var loseloseHashCode = function(key){
    var hash = 0;
    for(var i = 0; i < key.length; i++){
        hash += key.charCodeAt(i);
    }
    return hash % 37;
};

var ValuePair = function(key, value){
    this.key = key;
    this.value = value;
    this.toString = function() {
    return '[' + this.key + ' - ' + this.value + ']';
    }
};

var hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
hash.put('Aaron', 'aaron@email.com');
hash.put('Donnie', 'donnie@email.com');
hash.put('Ana', 'ana@email.com');
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Mindy', 'mindy@email.com');
hash.put('Paul', 'paul@email.com');
hash.put('Nathan', 'nathan@email.com');

hash.print();




