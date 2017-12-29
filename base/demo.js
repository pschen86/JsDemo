/*
//函数式
window.onload = function(){
    alert(getId('nav').innerHTML);
}

//对象式
window.onload = function(){
    alert(base.getId('nav').innerHTML);
    alert(base.getName('sex')[0].value);
    alert(base.getTagName('p')[0].innerHTML);
}
 */

window.onload = function(){
    // alert($().getId('nav').elements[0].innerHTML);

    //$().getId('nav').css('color','red').css('','');
    // $().getTagName('p').css('color','blue');
    //console.log($().getId('nav').css('border'));
    // alert($().getId('nav').css('borderTopWidth'));   //IE的样式名称有很多的不同
    //$().getId('nav').html('ellen');
    // $().getClass('col').css('color','red');  //所有class=col 的元素都改变
    // $().getClass('col').getElement(3).css('color','red');  //只改变选定的那一个
    // $().getClass('col','pp').css('color','red');  //只改变选定区域内的元素

    //alert(document.getElementsByTagNameNS('*'));
    // alert($().getName('sex')[0].value);
    // alert($().getTagName('p').elements[0].innerHTML); //

    // alert(document);  //HTMLdocument  IE:object
    // alert(document.childNodes[0]);  //documentType  IE:object
    // alert(document.childNodes[5].nodeType);  //10  IE:8
    // alert(document.childNodes[5].nodeName);  //html  IE:#comment


    //DOM操作
    // alert(document.getElementById('nav'));   //w3c  HTMLDivElement  IE  object
    // alert(document.getElementById('sex1').tagName);  //input
    // alert(document.getElementById('nav').innerHTML);  //<span>pschen</span>
    // alert(document.getElementById('nav').style.background);
    // document.getElementById('nav').innerHTML = "<strong>pschen</strong>"


    // alert(document.getElementById('nav').getAttribute('id'));  
    // alert(document.getElementById('nav').getAttribute('style'));  
    // alert(document.getElementById('nav').getAttribute('class'));  //IE无法获取null
    // alert(document.getElementById('nav').getAttribute('className'));  //其他无法获取，IE可以
    // alert(document.getElementById('nav').innerHTML);  
    
    // alert(document.getElementsByTagName('p'));   //返回所有的 P 数组 w3c HTMLCollection  IE object
    // alert(document.getElementsByTagName('p').length);  //数组长度 w3c 6    IE6.0  7
    // alert(document.getElementsByTagName('p')[0].innerHTML);  //这个IE怎么无法获取
    // alert(document.getElementsByTagName('p')[1].innerHTML);  //IE6.0 获取的是第一个p  w3c获取的是第二个p
    // alert(document.getElementsByTagName('p')[0].getAttribute('class'));  //IE无法获取null
    // alert(document.getElementsByTagName('p')[0].getAttribute('className'));  //非IE无法获取
}
























