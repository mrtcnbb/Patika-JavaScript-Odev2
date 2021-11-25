const newTodo = document.querySelector('#task');
const listTodo = document.querySelector('#list');
const addButton = document.querySelector('#liveToastBtn');
const listItems = document.querySelectorAll('li');

listItems.forEach((item) => {
  const iconDelete = document.createElement('i');

  iconDelete.classList.add('far', 'fa-trash-alt', 'delete', 'close');

  item.classList.add('through');
  item.append(iconDelete);
});

let todoCounter = 0;

// Creating and adding a new List Item to the list
addButton.addEventListener('click', newElement);

function newElement(e) {
  e.preventDefault();

  const newValue = newTodo.value.trim();

  if (newValue.length) {
    todoCounter++;

    let newListItem = document.createElement('li');

    newListItem.classList.add('through');

    newListItem.innerHTML = `${newValue}<i class="far fa-trash-alt delete close"></i>`;

    newTodo.value = '';

    listTodo.prepend(newListItem);

    // Adding todos to local storage
    localStorage.setItem(`todo${todoCounter}`, newValue);

    $('.success').toast('show');
  } else {
    $('.error').toast('show');
  }
}

// Adding 'delete' and 'check' icons to the default todos

// Deleting todos from the list
listTodo.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

// Toggling between checked and unchecked
listTodo.addEventListener('click', (e) => {
  if (e.target.classList.contains('through')) {
    e.target.classList.toggle('checked');
  }
});
