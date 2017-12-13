function createXHR(){
	if(typeof XMLHttpRequest != 'undefined'){
		return new XMLHttpRequest();
	}else if(typeof ActiveXObject != 'undefined'){
		var version = [
			"MSXML2.XMLHttp.6.0",
			"MSXML2.XMLHttp.3.0",
			"MSXML2.XMLHttp"],
		I,len;
        for(i = 0,len = version.length; i<len;i++){
            try{
                return new ActiveXObject(version[i]);
            } catch (e){
				//
            }
        }
	}else{
	throw new Error("你的浏览器什么都不支持！");
    }
}
// var xhr = createXHR();
//console.log(xhr);
//alert(xhr);
// xhr.open('get','demo2.txt',false);
// xhr.send(null);
// if((xhr.status >= 200 && xhr.status <300) || xhr.status == 304){
//if(xhr.readystate == 4)
// 	if(xhr.status == 200){
// 		 alert(xhr.responseText);			//因为这个responseText写成reponseText，什么调试都作不下去了，日了狗了
// 	}else{
//		alert("Request was unsuccessful:" + xhr.status);
// 	}
//alert(xhr.reponseText);
//  addEvent(document,'click',function(){
//  	var xhr = createXHR();
//  	console.log(xhr);
//  	alert(xhr);
//  	xhr.open('get','demo.asp',false);
//  	xhr.send(null);
//  	if((xhr.status >= 200 && xhr.status <300) || xhr.status == 304){
//      if(xhr.readystate == 4)
//  	if(xhr.status == 200){
//  			alert(xhr.responseText);
//  	}else{
//  		alert("Request was unsuccessful:" + xhr.status);
//  	}
//  });


function addEvent(element, type, handler) {
    if (!handler.$$guid) handler.$$guid = addEvent.guid++;
    if (!element.events) element.events = {};
        var handlers = element.events[type];
    if (!handlers) {
        handlers = element.events[type] = {};
        if (element["on" + type]) {
            handlers[0] = element["on" + type];
        }
    }
    handlers[handler.$$guid] = handler;
    element["on" + type] = handleEvent;
}

addEvent.guid = 1;
    
function removeEvent(element, type, handler) {
    if (element.events && element.events[type]) {
        delete element.events[type][handler.$$guid];
    }
}
function handleEvent(event) {
    var returnValue = true;
    event = event || fixEvent(window.event);
    var handlers = this.events[event.type];
    for (var i in handlers) {
        this.$$handleEvent = handlers[i];
        if (this.$$handleEvent(event) === false) {
            returnValue = false;
        }
    }
    return returnValue;
};
    
function fixEvent(event) {
    event.preventDefault = fixEvent.preventDefault;
    event.stopPropagation = fixEvent.stopPropagation;
    return event;
};
fixEvent.preventDefault = function() {
    this.returnValue = false;
};
fixEvent.stopPropagation = function() {
    this.cancelBubble = true;
};