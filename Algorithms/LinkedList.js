function LinkedList(){
    //Node类声明
    let Node = function(element){
        this.element = element;
        this.next = null;
    };
    //初始化链表长度
    let length = 0;
    //初始化第一个元素
    let head = null;
    this.append = function(element){
        //初始化添加的Node实例
        let node = new Node(element),current;
        if (head === null){
            //第一个Node实例进入链表，之后在这个LinkedList实例中head就不再是null了
            head = node;
        } else {
            current = head;
            //循环链表知道找到最后一项，循环结束current指向链表最后一项元素
            while(current.next){
                current = current.next;
            }
            //找到最后一项元素后，将他的next属性指向新元素node,j建立链接
            current.next = node;
        }
        //更新链表长度
        length++;
    }; //Node类声明

    this.removeAt = function(position){
        if(position > -1 && position < length){
            var current = head,
            previous,
            index = 0;
            if(position === 0){
                head = current.next;
            }else{
                while(index++ < position){
                    //set the previous to current;
                    previous = current;
                    //loop to the node which is needed to be delete
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return current.element;
        }else{
            return null;
        }

    };
    this.insert = function(position, element){
        if(position >= 0 && position <= length){
            var node = new Node(element),
            current = head,
            index = 0,
            previous;
            if(position === 0){
                head = node;
                node.next = current;
            }else{
                while(index++ < position){
                    
                    previous = current;

                    current = current.next;
                }
                previous.next = node;
                node.next = current;
            }
            length++;
            return true;
            
        }else{
            return false;
        }
    }
    this.print = function() {
        let temp = [],
            current = head;
        while(current) {
            temp.push(current.element);
            current = current.next;
        }
        console.log(temp);
    };
    this.toString = function(){
        var current = head,
            string ='';
        while (current){
            string = current.element;
            current = current.next;
        }
        return string;
    };
    this.indexOf = function(element){
        var current = head,
        index = 0;
        while(current){
            if(element === current.element){
                return index;
            }
            index++;
            current = current.next;
        }
    };
    this.remove = function(element){
        var index = this.indexOf(element);
        return this.removeAt(index);
    };
    this.isEmpty = function(){
        return length === 0;
    };
    this.size = function(){
        return length;
    };
    this.getHead = function(){
        return head;
    }

}

var list = new LinkedList();
list.append(15);
list.append(10);
list.append(9);
list.append(43);
list.append(13);
list.removeAt(3);
list.insert(1,"lll");
list.print();
list.toString();

