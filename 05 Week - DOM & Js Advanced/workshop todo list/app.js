var todoItem1 = {
  id: 0,
  title: 'Todo 1',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin posuere ligula non nunc auctor, eu consectetur ante lobortis.'
}

var todoList = [
  todoItem1,
  {
    id: 1,
    title: "Todo -----2",
    description: 'description 111123232'
  },
  {
    id: 2,
    title: "Todo 3",
    description: 'description 2323'
  }
]

// afisare in DOM

// va returna reprezentare unui TodoItem 
function createTodoItemDiv(title, description) {
  var todoItemDiv = document.createElement('div')

  todoItemDiv.setAttribute('data-id', 1)
  todoItemDiv.style.background = 'grey'

  var todoTitleH2 = document.createElement('h2')
  todoTitleH2.innerText = title;

  var todoDescriptionP = document.createElement('p')
  todoDescriptionP.innerText = description;

  todoItemDiv.appendChild(todoTitleH2)
  todoItemDiv.appendChild(todoDescriptionP)

  return todoItemDiv;
}

for (var index = 0; index < todoList.length; index++) {
  var todoItem = todoList[index];

  var todoListContainer = document.querySelector('.todo-list');
  var todoItemDiv1 = createTodoItemDiv(todoItem.title, todoItem.description)
  todoListContainer.appendChild(todoItemDiv1)
}


var btn = document.getElementById('add');

var inputTitle = document.getElementById('title')
var inputDescription = document.getElementById('description')

btn.addEventListener('click', function (event) {

  console.log('Valoare din inputTitle:', inputTitle.value)
  console.log('Valoare din inputDescription:', inputDescription.value)

  var todoListContainer = document.querySelector('.todo-list');
  var todoItemDiv1 = createTodoItemDiv(inputTitle.value, inputDescription.value)
  todoListContainer.appendChild(todoItemDiv1)
})

//  stergem tot dintr-un div, putem string-ul vid
// todoListContainer.innerHTML = ""
