console.log("Start JS")

//Captura por DOM
const inputFormTask = document.querySelector("#form12");
const buttonAddTask = document.querySelector(".btn-primary");
const taskList = document.querySelector('.task-list');

//Funções
function checkTask(taskLi){
    taskLi.classList.add("done");
}
function closeTask(taskLi){
    taskLi.remove("");
}

function generateTask (task){
    //criando o Seletor 
    const li = document.createElement("li");
    const imgClose = document.createElement("img");
    const p = document.createElement("p")
    const imgCheck = document.createElement("img");

    //Criando Atributos 
    li.setAttribute("class","task-item");
    imgClose.setAttribute("src", "./icons/close.png");
    imgCheck.setAttribute("src", "./icons/check.png");
    p.textContent = task;

    //Amarrando os Eventos do botões da imagem.
    imgCheck.addEventListener("click",()=>checkTask(li))
    imgClose.addEventListener("click",()=>closeTask(li))

    //Inserindo as imagens e o p dentro da li
    li.appendChild(imgClose);
    li.appendChild(p);
    li.appendChild(imgCheck);

    //Inserindo dentro da ul a (taskList já está pegando a ul)
    taskList.appendChild(li);
}

//Evento 
buttonAddTask.addEventListener("click",()=>{
    const newTask = inputFormTask.value
    generateTask(newTask)
    inputFormTask.value = ""
});

