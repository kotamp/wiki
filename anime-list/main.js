(function(){
  var toWatchEl, watchedEl;

  var elem = function(tag) {
    return document.createElement(tag);
  }

  var createEntry = function(name, poster, anidb) {
    let a = elem('a');
    a.setAttribute("href", anidb);

    

    let img = elem('img');
    img.setAttribute("alt", name);

    let newImage = new Image;
    newImage.onload = function() {
      img.src = this.src;
    };
    newImage.src = poster;

    let title = elem('div');
    title.setAttribute('class', 'title');
    title.innerHTML = name;

    a.appendChild(img);
    a.appendChild(title);
    return a;
  };

  var display = function(json){
    if (json["to-watch"] != null) {
      const arr = json["to-watch"];
      for (let i = 0; i < arr.length; i++) {
        let name = arr[i].name || "";
        let poster = arr[i].poster || "";
        let anidb = arr[i].anidb || "";

        let entry = createEntry(name, poster, anidb);
        toWatchEl.appendChild(entry);
      }
    }

    if (json["watched"] != null) {
      const arr = json["watched"];
      for (let i = 0; i < arr.length; i++) {
        let name = arr[i].name || "";
        let poster = arr[i].poster || "";
        let anidb = arr[i].anidb || "";

        let entry = createEntry(name, poster, anidb);
        watchedEl.appendChild(entry);
      }
    }
  };

  var init = function() {
    toWatchEl = document.getElementById("to-watch");
    watchedEl = document.getElementById("watched");

    fetch("./database.json")
    .then(res => res.json())
    .then(data => display(data));
  };

  window.addEventListener("load", init);
})()