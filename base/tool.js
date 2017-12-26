function getInner(){
    if(typeof window.innerWidth !='undefined'){
        return {
            width : window.innerWidth,
            height : window.innerHeight
        };
    } else {
        return {
            width : document.documentElement.clientWidth,
            height : document.documentElement.clientHeight
        }
    }
}