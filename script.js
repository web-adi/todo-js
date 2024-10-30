const taskList = document.getElementById("taskList");

const addTask = () => {

    const task = document.getElementById("task").value;

    if(task === ""){
        alert("Enter anything");
        return;
    }

    const listItem = document.createElement("li");

    listItem.innerHTML = `${task} <i class="fa-solid fa-trash-can deleteIcon"></i>`

    const deleteBtn =    listItem.querySelector(".deleteIcon");

    deleteBtn.style.cursor = "pointer"

    deleteBtn.addEventListener("click",function(){
        listItem.remove();
    })

    taskList.appendChild(listItem);



    console.log(taskList);

    document.getElementById("task").value = ""

}