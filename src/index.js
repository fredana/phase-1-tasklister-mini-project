document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    listTask(e.target.newTaskDescription.value);
    form.reset();
  })
});

function listTask(addTask){
  let li = document.createElement('li');
  li.textContent = `${addTask} `;
  let btn = document.createElement('button');
  btn.textContent = 'x';
  btn.addEventListener('click', deleteTask);
  li.appendChild(btn).style.color='red';
  document.querySelector('#tasks').appendChild(li);
}

function deleteTask(e){
  e.target.parentNode.remove();
}
