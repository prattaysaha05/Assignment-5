document.addEventListener("DOMContentLoaded", function () {
    const taskButtons = document.querySelectorAll("[id^='task-btn']");
    const taskAssignedElement = document.getElementById("taskAssigned");
    const completedTaskElement = document.getElementById("completed-task");
    const historyAdd = document.getElementById("historyAdd");
  
    function updateTask(button, taskId) {
      alert("Board Updated Successfully");
  
      const title = document.getElementById(`card-title-${taskId}`).innerText;
      const newDate = new Date();
      
      const logEntry = document.createElement("p");
      logEntry.className = "bg-[#F4F7FF] my-3 py-1 px-3 rounded-lg";
      logEntry.textContent = `You have completed the task "${title}" at ${newDate}`;
      
      historyAdd.appendChild(logEntry);
  
      button.disabled = true;
      button.style.backgroundColor = "#A0AEC0";
      button.style.cursor = "not-allowed";
      button.style.color = "#ffffff";
  
      // Task Count Update
      let taskAssigned = parseInt(taskAssignedElement.innerText);
      let completedTask = parseInt(completedTaskElement.innerText);
      
      if (taskAssigned > 0) {
        taskAssignedElement.innerText = taskAssigned - 1;
        completedTaskElement.innerText = completedTask + 1;
      }
  
      if (taskAssigned - 1 === 0) {
        alert("Congratulations! You have completed all the current tasks.");
      }
    }
  
    taskButtons.forEach((button, index) => {
      button.addEventListener("click", function () {
        updateTask(this, index + 1);
      });
    });
  });
  