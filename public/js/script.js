function onSearch() {
  var search = new Search(document.getElementById("searchbar").value);
  //var request = new Request(0, JSON.stringify(search), 0)
  var results = document.getElementById("results");
  var aside = document.getElementsByTagName("aside")[0];
  results.innerHTML = "";
  results.style.display = "none";
  aside.style.display = "block";
  var responseText = search.Input;//TMP
  
  if (responseText != "") {
    aside.style.display = "none";
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