'use strict'; 

var updateContent = function(data) {

    var section = document.getElementById("section");
    section.innerHTML = "";
    for(var i = 0; i < data.RelatedTopics.length; i = i + 1) {
        var resultText = data.RelatedTopics[i].Text,
            url = data.RelatedTopics[i].FirstURL;

        if(!resultText || !url) {
                continue;
            }

        var a = document.createElement("a");
        a.innerText = resultText;
        a.href = url;


        var li = document.createElement("li");
        li.appendChild(a);

        var section = document.getElementById("section");
        section.appendChild(li);
    }
}

var loadContent = function() {

    var query = document.getElementById("searchInput").value;
    var url = "https://api.duckduckgo.com/?q=" + query + "&format=json&pretty=1";
    
    var request = new XMLHttpRequest();

    request.open("get", url);

    request.send();

    request.onreadystatechange = function(data) {
        if(request.readyState == 4 && request.status == 200) {
            var jsonData =  JSON.parse(request.responseText)
            updateContent(jsonData);
        }
    }; 
};

var button = document.getElementById("searchButton");
button.addEventListener("click", loadContent);