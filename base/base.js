/*
函数式
function getId(id){
    return document.getElementById(id);
}

*/

/**
 对象式

var base = {
    getId : function(id){
        return document.getElementById(id);  //返回HTMLDivElement对象
    },
    getName : function(iname){
        return document.getElementsByName(iname);
    },
    getTagName : function(tag){
        return document.getElementsByTagName(tag);
    }
};

对象的连缀方式
对象.方法1().方法()2.方法3()

对象.方法1() 执行后返回‘对象’即可
对象.方法1().方法()2  执行后返回‘对象’即可
........

*/

function $(){
    return new Base();
}

function Base() {

    this.elements = [];   //没有了this，内部的所有调用时都不能访问到

    this.getId = function(id){
        this.elements.push(document.getElementById(id));
        return this;  //通过new调用函数，this指向Base()函数本身
    }
    this.getName = function(iname){
        return document.getElementsByName(iname);
        return this;
    }
    this.getTagName = function(tag){
        var tags = document.getElementsByTagName(tag);   //返回一个集合
        for (var i = 0; i <tags.length; i++){   //每个都加入数组中
            this.elements.push(tags[i]);
        }
        return this;
    }


}


Base.prototype.css = function(attr,value){
    for(var i =0; i<this.elements.length; i++){
        this.elements[i].style[attr] = value;
    }
    return this;
}

