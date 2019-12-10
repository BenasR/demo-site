var Http = new XMLHttpRequest();
var url = 'https://jsonplaceholder.typicode.com/posts';
var dynamic_list = document.getElementById("dynamic-list")
Http.open("GET", url);
Http.send();

Http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        for (var i = 0; i < 4; i++) {
            // Taking only titles to save space.
            dynamic_list.innerHTML += '<li>' + myArr[i].title + '</li>'
        }
    }
}
