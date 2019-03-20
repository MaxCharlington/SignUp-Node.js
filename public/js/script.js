function onSearch() {
  var masthead = document.getElementsByClassName("masthead")[0];
  var request = new Request();
  var results = document.getElementById("results");
  var aside = document.getElementsByTagName("aside")[0];
  var h = document.getElementsByTagName("h1")[0];

  //reset
  results.innerHTML = "";
  results.style = h.style = aside.style = "null";  
  var responseText = request.response();

  var form = document.getElementById('searchbar');
  form.setAttribute("type", 'post');

  //filling and style changing
  if (responseText != "") {
    if (masthead.clientHeight < (document.getElementById("searchbar").clientHeight + 280 + h.clientHeight + aside.clientHeight)) {
      h.style.visibility = "hidden";
      h.style.fontSize = "40px";
      h.style.transform = "transform: scale(2, 1);"; /* W3C */
      aside.style.display = "none";
    }
    results.style.display = "block";
    var elem = document.createElement("span");        
    elem.innerText = "Результаты:";
    elem.style.marginBottom  = "100px";
    results.appendChild(elem);

    elem = document.createElement("div");
    elem.classList.add('result');
    elem.innerText = "Услуги:  " + responseText;
    elem.onclick = function() {
    }
    results.appendChild(elem);

    elem = document.createElement("div");
    elem.classList.add('result');
    elem.innerText = "Организации:  " + responseText;
    elem.onclick = function() {
    }
    results.appendChild(elem);

    elem = document.createElement("div");
    elem.classList.add('result');
    elem.innerText = "Адреса:  " + responseText;
    elem.onclick = function() {
    }
    results.appendChild(elem);
  }
}