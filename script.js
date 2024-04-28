let tasks = [];

const images = ['./imagenes/images.jpg', './imagenes/imagen2.jpg', './imagenes/imagen3.jpg'];
let currentImageIndex = 0;
const imageElement = document.querySelector('#task-form img');

function changeImage() {
    currentImageIndex = (currentImageIndex + 5) % images.length;
    imageElement.src = images[currentImageIndex];
}


setInterval(changeImage, 4000);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        tasks.push({ text: taskText, completed: false });
        renderTasks();
        taskInput.value = '';
    }
}

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
    
        taskElement.classList.add(task.completed ? 'completed' : 'incomplete');
        taskElement.innerHTML = `
            <span onclick="editTask(${index})">${task.text}</span>
            <button onclick="toggleTask(${index})">${task.completed ? 'Marcar como incompleta' : 'Marcar como completada'}</button>
            <button onclick="deleteTask(${index})">Eliminar</button>
        `;
        taskList.appendChild(taskElement);
    });
}

function editTask(index) {
    const newText = prompt('Editar tarea:', tasks[index].text);
    if (newText !== null && newText.trim() !== '') {
        tasks[index].text = newText.trim();
        renderTasks();
    }
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

renderTasks();



