

window.onload = function(){


    //显示隐藏下拉菜单 
    $().getClass('member').hover(function(){
        $().getClass('member_ul').show();
    },function(){
        $().getClass('member_ul').hide();
    });


    //点击弹出登陆窗口
    $().getClass('login').click(function(){
        $().getId('login').css('display','block');
        $().getId('screen').Wlock();
    });
    //登陆窗口的位置
    $().getId('login').Wcenter(250,350);
    //以下情况在窗口改变大小的时候，遮罩没有改变大小
    // $().getId('login').Wcenter(250,350).resize(function(){
    //     $().getId('login').Wcenter(250,350);
    // });


   //弹出登陆窗口未封装
    // var top = (document.documentElement.clientHeight - 250) / 2;
    // var left = (document.documentElement.clientWidth - 350) / 2;
    // $().getId('login').css('top',top + 'px').css('left',left + 'px');

    // window.onresize = function(){
    //     var top = (document.documentElement.clientHeight - 250) / 2;
    //     var left = (document.documentElement.clientWidth - 350) / 2;
    //     $().getId('login').css('top',top + 'px').css('left',left + 'px');
    //     }
   

    //点击关闭登陆窗口
    $().getId('loginclose').click(function(){
        $().getId('login').css('display','none');
        $().getId('screen').Wunlock();

    });


    //遮罩div也随着窗口大小的改变而改变
    $().resize(function(){
        $().getId('login').Wcenter(250,350);
        if($().getId('login').css('display') == 'block'){
            $().getId('screen').Wlock();
        }      
    });


    //拖动窗口 onmousemove onmouseup onmousedown
    //1、点住窗口
    //2、在点住的窗口中，移动
    //3、抬起鼠标，移动停止
    //4、点击某个窗口，move up是全局document
    // window.event

    // e.clientX;//点击的点到浏览器边的距离
    // login.offsetLeft //弹出的登陆窗口的边到浏览器边的距离
    // e.clientX - login.offsetLeft  //点击点到弹出的登陆窗口的边的距离
    $().getId('login').Wdrag();




    // alert(document.documentElement.clientHeight);
    // alert(window.innerHeight);

    //IE8以下支持获取CSS样式内容
    //alert(document.getElementById('screen').currentStyle['backgroundColor']);


    //$();
}

