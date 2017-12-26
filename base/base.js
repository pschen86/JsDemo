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
    //在这里this代表着Base函数的实例化对象
    this.elements = [];   //放在这里，作为私有属性，每个new对象都有自己的节点数组
    //alert(this);



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

Base.prototype.getInner = 

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

//设置窗口居中
Base.prototype.Wcenter = function(topwidth,leftwidth){
    var top = (document.documentElement.clientHeight - topwidth) / 2;
    var left = (document.documentElement.clientWidth - leftwidth) / 2;
    // alert(top);
    // alert(left);
    // return;
    for(var i = 0; i < this.elements.length; i++){
        this.elements[i].style.top = top + 'px';
        this.elements[i].style.left = left + 'px';
    }
    return this;
}

//遮罩效果
Base.prototype.Wlock = function(){
    for(var i = 0; i < this.elements.length; i++){
        this.elements[i].style.width = document.documentElement.clientWidth + 'px';
        this.elements[i].style.height = document.documentElement.clientHeight + 'px';
        this.elements[i].style.display = 'block';
    }
    return this;
}
//关闭遮罩效果
Base.prototype.Wunlock = function(){
    for(var i = 0; i < this.elements.length; i++){
        this.elements[i].style.display = 'none';
    }
    return this;
}

//弹出窗口拖动效果
Base.prototype.Wdrag = function(){
    for(var i = 0; i < this.elements.length; i++){
        this.elements[i].onmousedown = function(e){
            var e = event || window.event;
            var _this = this;  //this指向this.elements[i]对象
            var diffX = e.clientX - _this.offsetLeft;
            var diffY = e.clientY - _this.offsetTop;
            // var diffX = e.clientX - this.elements[i].offsetLeft;
            // var diffY = e.clientY - this.elements[i].offsetTop;
    
            document.onmousemove = function(e){
                var e = e || window.event;
                var left = e.clientX - diffX;
                var top = e.clientY - diffY;
                // console.log(window.innerWidth);
                // console.log(_this.offsetHeight);
                // if(left < 0){
                //     left = 0;
                // }else if(left > getInner.width - _this.offsetWidth){
                //     // left = window.innerWidth - _this.offsetWidth;
                // }
                if(left < 0){
                    left = 0;
                }else if(left > document.documentElement.clientWidth - _this.offsetWidth){
                    // left = window.innerWidth - _this.offsetWidth;
                    left = document.documentElement.clientWidth - _this.offsetWidth;
                }
                // if(top < 0){
                //     top = 0;
                // }else if(top > window.innerHeight - _this.offsetHeight){
                //     // top = window.innerHeight - _this.offsetHeight;
                // }
                if(top < 0){
                    top = 0;
                }else if(top > document.documentElement.clientHeight - _this.offsetHeight){
                    // top = window.innerWidth - _this.offsetHeight;
                    top = document.documentElement.clientHeight - _this.offsetHeight;
                }
                _this.style.left = left + 'px';
                _this.style.top = top + 'px';
            }
            document.onmouseup = function(){
                document.onmousemove = null;
                document.onmouseup = null;
            }
        }
        
    }
    return this;
}


//触发点击事件
Base.prototype.click = function(fn){
    for(var i = 0; i < this.elements.length; i++){
        this.elements[i].onclick = fn;
    }
    return this;
}
//浏览器弹出窗口事件
Base.prototype.resize = function(fn){
    window.onresize = fn;
}
