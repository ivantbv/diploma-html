var menu = document.getElementsByClassName('menu_text')
var about = document.getElementsByClassName('aboutpage');

// menu[1].addEventListener('click', () => {
//     console.log('posts hello')
//     customEvent()
   
// })

// about[0].addEventListener('click', customEvent)

window.onload = () => {
var widget = document.getElementsByClassName('justwidget')

//var styleElem = document.head.appendChild(document.createElement("style"));

if (typeof(widget) != 'undefined' && widget != null) {

    // var widgetCircle = document.getElementsByClassName('justwidget--asst justwidget--toggle-action')
    // console.log('this is widgetCircle ' + widgetCircle[0].children[0])
    
    // widgetCircle[0].addEventListener('click', () => {
    //     console.log('clicked on widget')
    //     customEvent();
    // })

    
   

    widget.item(0).addEventListener('click', () => {
        JustWidgetSendRawData = function() {     
             return {       
                 currentUrl: window.location.href 
             };   
     
         };
         window.JustWidgetRawParams = {
            currentUrl: window.location.href 
        }

        customEvent();
    })
    
}

}

function customEvent() { 
    window.JustWidget.sendEvent({ event: "clickEvent", eventData: { example: false }});
}
