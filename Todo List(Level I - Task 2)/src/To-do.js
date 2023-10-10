document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");
  const taskDetailsContainer = document.getElementById("taskDetailsContainer"); // Add a container for task details

  // Load tasks from local storage
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function addTask(taskText) {
    tasks.push(taskText);
    saveTasks();
  }

  function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach(function (taskText, index) {
      const listItem = document.createElement("li");
      listItem.className =
        "list-group-item d-flex justify-content-between align-items-center";

      const taskTextElement = document.createElement("span");
      taskTextElement.className = "task-text";
      taskTextElement.textContent = taskText;

      const buttonContainer = document.createElement("div");

      const deleteButton = document.createElement("button");
      deleteButton.className = "btn btn-danger btn-sm";
      deleteButton.id="btn-delete"
      deleteButton.textContent = "Delete";

      const editButton = document.createElement("button");
      editButton.className = "btn btn-primary btn-sm ml-2";
      editButton.id="btn-edit"
      editButton.textContent = "Edit";

      const viewButton = document.createElement("button");
      viewButton.className = "btn btn-success btn-sm ml-2";
      viewButton.id="btn-view"
      viewButton.textContent = "View";

    

      editButton.addEventListener("click", function () {
        const updatedText = prompt("Edit task:", taskText);
        if (updatedText !== null) {
          tasks[index] = updatedText;
          saveTasks();
          displayTasks();
        }
      });

      deleteButton.addEventListener("click", function () {
        tasks.splice(index, 1);
        saveTasks();
        displayTasks();
      });

      viewButton.addEventListener("click", function () {
        // Display the task details in the separate container
        alert("Task:" + taskText);
      });


     
    

      buttonContainer.appendChild(editButton);
      buttonContainer.appendChild(viewButton);
      buttonContainer.appendChild(deleteButton);
      

      listItem.appendChild(taskTextElement);
      listItem.appendChild(buttonContainer);

      taskList.appendChild(listItem);
    });
  }

  displayTasks();

  addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      addTask(taskText);
      taskInput.value = "";
      displayTasks();
    }
  });
});










// document.addEventListener("DOMContentLoaded", function () {
//   const taskInput = document.getElementById("taskInput");
//   const addTaskButton = document.getElementById("addTask");
//   const taskList = document.getElementById("taskList");
//   const taskDetailsContainer = document.getElementById("taskDetailsContainer");

//   // Load tasks from local storage
//   const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//   function saveTasks() {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }

//   function addTask(taskText) {
//     tasks.push(taskText);
//     saveTasks();
//   }

//   function displayTasks() {
//     taskList.innerHTML = "";
//     tasks.forEach(function (taskText, index) {
//       const listItem = document.createElement("li");
//       listItem.className =
//         "list-group-item d-flex justify-content-between align-items-center";

//       const taskTextElement = document.createElement("span");
//       taskTextElement.className = "task-text";
//       taskTextElement.textContent = taskText;

//       const buttonContainer = document.createElement("div");

//       const deleteButton = document.createElement("button");
//       deleteButton.className = "btn btn-danger btn-sm";
//       deleteButton.textContent = "Delete";

//       const editButton = document.createElement("button");
//       editButton.className = "btn btn-primary btn-sm ml-2";
//       editButton.textContent = "Edit";

//       const viewButton = document.createElement("button");
//       viewButton.className = "btn btn-success btn-sm ml-2";
//       viewButton.textContent = "View";

//       viewButton.addEventListener("click", function () {
//         // Display the task details in the separate container
//         taskDetailsContainer.innerHTML = taskText;
//         taskDetailsContainer.style.display = "block";
//       });

//       editButton.addEventListener("click", function () {
//         // Create an input field for editing
//         const editInput = document.createElement("input");
//         editInput.type = "text";
//         editInput.value = taskText;

//         const saveEditButton = document.createElement("button");
//         saveEditButton.className = "btn btn-primary btn-sm ml-2";
//         saveEditButton.textContent = "Save";

//         saveEditButton.addEventListener("click", function () {
//           tasks[index] = editInput.value;
//           saveTasks();
//           displayTasks();
//         });

//         buttonContainer.innerHTML = "";
//         buttonContainer.appendChild(editInput);
//         buttonContainer.appendChild(saveEditButton);
//       });

//       deleteButton.addEventListener("click", function () {
//         tasks.splice(index, 1);
//         saveTasks();
//         displayTasks();
//       });

//       buttonContainer.appendChild(editButton);
//       buttonContainer.appendChild(viewButton);
//       buttonContainer.appendChild(deleteButton);

//       listItem.appendChild(taskTextElement);
//       listItem.appendChild(buttonContainer);

//       taskList.appendChild(listItem);
//     });
//   }

//   displayTasks();

//   addTaskButton.addEventListener("click", function () {
//     const taskText = taskInput.value.trim();
//     if (taskText !== "") {
//       addTask(taskText);
//       taskInput.value = "";
//       displayTasks();
//     }
//   });

//   const closeButton = document.createElement("button");
//   closeButton.className = "btn btn-secondary mt-2";
//   closeButton.textContent = "Close";
//   closeButton.addEventListener("click", function () {
//     taskDetailsContainer.style.display = "none";
//   });

//   taskDetailsContainer.appendChild(closeButton);
//   taskDetailsContainer.style.display = "none";
// });









// document.addEventListener("DOMContentLoaded", function () {
//   const taskInput = document.getElementById("taskInput");
//   const addTaskButton = document.getElementById("addTask");
//   const taskList = document.getElementById("taskList");
//   const taskDetailsContainer = document.getElementById("taskDetailsContainer");

//   // Load tasks from local storage
//   const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//   function saveTasks() {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }

//   function addTask(taskText) {
//     tasks.push(taskText);
//     saveTasks();
//   }

//   function displayTasks() {
//     taskList.innerHTML = "";
//     tasks.forEach(function (taskText, index) {
//       const listItem = document.createElement("li");
//       listItem.className =
//         "list-group-item d-flex justify-content-between align-items-center";

//       const taskTextElement = document.createElement("span");
//       taskTextElement.className = "task-text";
//       taskTextElement.textContent = taskText;

//       const buttonContainer = document.createElement("div");

//       const deleteButton = document.createElement("button");
//       deleteButton.className = "btn btn-danger btn-sm";
//       deleteButton.textContent = "Delete";

//       const editButton = document.createElement("button");
//       editButton.className = "btn btn-primary btn-sm ml-2";
//       editButton.textContent = "Edit";

//       const viewButton = document.createElement("button");
//       viewButton.className = "btn btn-success btn-sm ml-2";
//       viewButton.textContent = "View";

//       viewButton.addEventListener("click", function () {
//         taskDetailsContainer.innerHTML = "";
//         const taskDetailsText = document.createElement("span");
//         taskDetailsText.textContent = taskText;
//         taskDetailsContainer.appendChild(taskDetailsText);
//         const closeButton = document.createElement("button");
//         closeButton.className = "btn btn-secondary mt-2";
//         closeButton.textContent = "Close";
//         closeButton.addEventListener("click", function () {
//           taskDetailsContainer.style.display = "none";
//         });
//         taskDetailsContainer.appendChild(closeButton);
//         taskDetailsContainer.style.display = "block";
//       });

//       editButton.addEventListener("click", function () {
//         taskDetailsContainer.innerHTML = "";
//         const editInput = document.createElement("input");
//         editInput.type = "text";
//         editInput.value = taskText;
//         taskDetailsContainer.appendChild(editInput);
//         const saveEditButton = document.createElement("button");
//         saveEditButton.className = "btn btn-primary btn-sm ml-2";
//         saveEditButton.textContent = "Save";
//         saveEditButton.addEventListener("click", function () {
//           tasks[index] = editInput.value;
//           saveTasks();
//           displayTasks();
//           taskDetailsContainer.style.display = "none";
//         });
//         taskDetailsContainer.appendChild(saveEditButton);
//         const closeButton = document.createElement("button");
//         closeButton.className = "btn btn-secondary mt-2";
//         closeButton.textContent = "Close";
//         closeButton.addEventListener("click", function () {
//           taskDetailsContainer.style.display = "none";
//         });
//         taskDetailsContainer.appendChild(closeButton);
//         taskDetailsContainer.style.display = "block";
//       });

//       deleteButton.addEventListener("click", function () {
//         tasks.splice(index, 1);
//         saveTasks();
//         displayTasks();
//       });

//       buttonContainer.appendChild(editButton);
//       buttonContainer.appendChild(viewButton);
//       buttonContainer.appendChild(deleteButton);

//       listItem.appendChild(taskTextElement);
//       listItem.appendChild(buttonContainer);

//       taskList.appendChild(listItem);
//     });
//   }

//   displayTasks();

//   addTaskButton.addEventListener("click", function () {
//     const taskText = taskInput.value.trim();
//     if (taskText !== "") {
//       addTask(taskText);
//       taskInput.value = "";
//       displayTasks();
//     }
//   });
// });



