// 1. Ce este DOM?
// 2. READ: Cautarea elementelor
// putem folosi orice selector de css
// doar primul element
console.log("Cautam dupa tag:", document.querySelector("div"))
console.log("Cautam dupa class: ", document.querySelector(".my-div"))
// querySelectorAll - toate elementele
console.log(document.querySelectorAll("div")[2])

// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()

var listContainer = document.getElementById('list');
console.log(listContainer)



// 3. Modificare elementelor, operatii CRUD - create, read, update, delete

// 2.1 UPDATE: css sau continu 
// sa adaugam css
listContainer.style.background = "red"

// continut
listContainer.innerText = "aici va fi lista de elemente";

listContainer.innerHTML = `
  <div>item1</div>
  <div>item2</div>
  <div>item3</div>
  <div>item3</div>
  <div>item3</div>
  <div>item3</div>
  <div>item3</div>
  <div>item3</div>
  <div>item3</div>
  <div>item3</div>
  <div>item3</div>
  <div>item3</div>
  <div>item3</div>
`

// 2.2 CREATE

// newDiv nu exista in pagina nostra
var newDiv = document.createElement('div');
var title = document.createElement('h1');
title.innerText = "Titlu new Div"
newDiv.appendChild(title)


document.body.appendChild(newDiv);

// cautam elementul unde vream sa adaugam

var parent = document.querySelector('div:nth-child(3)');
parent.appendChild(newDiv)

// Delete
var listParent = document.querySelector("#list")
var item3 = listParent.querySelector("div:nth-child(3)");

listParent.removeChild(item3)

// sa obtinem parent de la children
// console.log(item3.parentNode.removeChild(item3))


// 4. CSS manipulation


var listParent = document.querySelector("#list")
listParent.style.color = "red";
listParent.style.color = "blue";
listParent.style.color = "red";
listParent.style.backgroundColor = "green"

// add/remove class
var item1 = listParent.querySelector('div') // ne va da primul div
var item2 = listParent.querySelector('div:nth-child(2)')

item1.classList.add('item')
item2.classList.add('item')

item1.classList.remove('item')

// v2
var allItems = listParent.querySelectorAll('div')

for (var index = 0; index < allItems.length; index++) {
  var item = allItems[index];
  item.classList.add('item')
}


