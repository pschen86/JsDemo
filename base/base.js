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

var  $ = function(){
    return new Base();
}

function Base() {

    //没有了this，内部的所有调用时都不能访问到
    this.elements = [];   //放在这里，作为私有属性，每个new对象都有自己的节点数组



}

//获取ID节点
Base.prototype.getId = function(id){
    this.elements.push(document.getElementById(id));
    return this;  //通过new调用函数，this指向Base()函数本身
}
Base.prototype.getName = function(iname){
    return document.getElementsByName(iname);
    return this;
}

//获取元素节点
Base.prototype.getTagName = function(tag){
    var tags = document.getElementsByTagName(tag);   //返回一个集合
    for (var i = 0; i <tags.length; i++){   //每个都加入数组中
        this.elements.push(tags[i]);
    }
    return this;
}

//获取class数组或选定区域内的class数组
Base.prototype.getClass = function(classname,idname){
    var node = null;
    if(arguments.length == 2){
        node = document.getElementById(idname);
    }else{
        node = document;
    }
    var all = node.getElementsByTagName('*');
    for(var i = 0; i <all.length; i++){
        // console.log(all[i].className);
        if(all[i].className == classname){    //节点.className返回class属性
            this.elements.push(all[i]);
        }
    }
    return this;
    // console.log(all.length);
}

//获取某一个class
Base.prototype.getElement = function(num){
    var element = this.elements[num];
    this.elements = [];
    this.elements.push(element);
    return this;
}

//设置CSS
Base.prototype.css = function(attr,value){
    for(var i =0; i<this.elements.length; i++){
        if(arguments.length == 1){
            if(typeof window.getComputedStyle != 'undefined'){//W3C
                return window.getComputedStyle(this.elements[i],null)[attr]; //返回CSS样式的值
                // return this.elements[i].style[attr];
            }else if(typeof this.elements[i].currentStyle != 'undefined'){//IE
                return this.elements[i].currentStyle[attr];   //ie很多样式名称与W3C不同
            }
        }
        this.elements[i].style[attr] = value;
    }
    return this;
}

//设置html内容
Base.prototype.html = function(str){
    for(var i = 0; i < this.elements.length; i++){
        if(arguments.length == 0){
            return this.elements[i].innerHTML;
        }
        this.elements[i].innerHTML = str;
    }
    return this;
};


//设置鼠标移入移出
Base.prototype.hover = function (over,out){
    for(var i = 0; i < this.elements.length; i++){
        this.elements[i].onmouseover = over;
        this.elements[i].onmouseout = out;
    }
    return this;
}

//设置显示下拉菜单
Base.prototype.show = function(){
    for(var i = 0; i < this.elements.length; i++){
        this.elements[i].style.display = 'block';
    }
    return this;

}

//设置隐藏下拉菜单
Base.prototype.hide = function(){
    for(var i = 0; i < this.elements.length; i++){
        this.elements[i].style.display = 'none';
    }
    return this;

}
