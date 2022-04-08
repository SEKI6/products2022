const list = document.querySelector('#list');

 //fetch('http://localhost:3000/')//promise
//.then(data=>data.json()) //json() pretvara promise u js objekt
//.then(data=>data.forEach(item=>list.innerHTML+=`${item.name}<br>`))

fetch('http://localhost:3000/')//promise
.then(data=>data.json()) //json() pretvara promise u js objekt
.then(data=>console.log(data))