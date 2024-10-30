
const taskList = document.getElementById("taskList");

const addTask = () => {
    const inputValue = document.getElementById("taskInput").value;
  if (inputValue === "") {
    alert("Enter any task");
    return;
  }
  const listItem = document.createElement("li");
  taskList.appendChild(listItem);

  listItem.innerHTML = `${inputValue} <i class="fa-solid fa-trash-can delete-icon"></i>`;
  listItem.querySelector(".delete-icon").style.cursor = "pointer";


  listItem.querySelector(".delete-icon").addEventListener("click",function(){
    listItem.remove();
  })

  console.log(taskList);

  document.getElementById("taskInput").value="";
};
