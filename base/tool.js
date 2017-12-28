function getInner(){
    if(typeof window.innerWidth !='undefined'){
        return {  //W3C
            width : window.innerWidth,
            height : window.innerHeight  
        };
    } else {
        return {  //IE
            width : document.documentElement.clientWidth,
            height : document.documentElement.clientHeight
        }
    }
}