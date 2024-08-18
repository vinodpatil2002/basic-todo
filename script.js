let ctr = 1;


function deleteTask(id) {
    const taskToDelete = document.getElementById('task' + id);
    taskToDelete.parentNode.removeChild(taskToDelete);
}

function addTodo() {
    const inp = document.querySelector('input');
    const task = inp.value;
    if (task === '') {
        alert('Task cannot be empty');
        return;
    }
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'task' + ctr);
    newDiv.classList.add('task-item');
    newDiv.innerHTML = "<div>" + ctr +". " + task + "</div><button onclick='deleteTask(" + ctr + ")'>Delete</button>";
    document.body.appendChild(newDiv);
    ctr++;
    inp.value = '';
}

