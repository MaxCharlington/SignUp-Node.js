class Request {
  constructor(cmdId, StrData, IntData) {    
    this.cmdId = cmdId;
    this.StrData = StrData;
    this.IntData = IntData;
  }
}

class Search {
  constructor(txt) {
    this.Input = txt;
  }
}

/* Function that make a request to the server and returns
   its response in a form of an object

   Use reference:
           var response = ServerResponseTo(request);
*/
function ServerResponseTo(request) {
    var req = new XMLHttpRequest();
    req.open("POST", "", false);
    req.send(JSON.stringify(request));
    return JSON.parse(req.responseText);
}

/* Function that make a request to the server and performs
   an action (second param) with server response after receiving it.
   Action format is: Func(response), where response is object
   
   Use reference:
           ServerResponseAsyncTo(request, function (response) {
                alert(response.IntData);
           });
*/
function ServerResponseAsyncTo(request, onRespond) {
    var req = new XMLHttpRequest();
    req.open("POST", "", true);
    req.send(JSON.stringify(request));
    req.onreadystatechange = function () {
        if (req.readyState != 4) return;
        if (req.status == 200) {
            onRespond(req.responseText);
            req.abort();
        }
    };
}



/*Dinamic colors
  var d = new Date();
  d.getHours();

  var hours = new Date().getHours(); 
  if (hours >= 5 && hours < 11) {
    console.log("morning");
    changeBackground("#2d1a73");
  }
  else if (hours >= 11 && hours < 19){
    console.log("day");
    changeBackground("#2db9ca");
  } 
  else if (hours >= 19 && hours < 23) {
    console.log("evening");
    changeBackground("#2d1a73");
  }
  else {
    console.log("night");
    changeBackground("#531a75");
  }

  //tmp
  changeBackground("#531a75");
  
  function changeBackground(color) {
    document.body.style.background = color;
  }
*/