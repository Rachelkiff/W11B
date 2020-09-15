function getDog() {
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      let dogImages = JSON.parse(this.responseText);
      document.getElementById("dogImages").innerHTML = dogImages;
    }else if(this.readyState != 4) {
      document.getElementById("dogImages").innerHTML = "Loading!";
    }else {
      document.getElementById("dogImages").innerHTML = "Something is wrong!"
    }
}

ajax.open("GET", "https://dog.ceo/api/breeds/image/random", true);
ajax.send();
}

let refreshDog = document.getElementById("refreshDog");
refreshDog.addEventListener("click", getDog)

