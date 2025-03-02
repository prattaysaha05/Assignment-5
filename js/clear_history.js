document.getElementById('clear-history-button').addEventListener('click', function () {
    const taskButtons = document.querySelectorAll("[id^='task-btn']");
    let historyAdd = document.getElementById('historyAdd');
    const taskAssignedElement = document.getElementById("taskAssigned");
    const completedTaskElement = document.getElementById("completed-task");
    
    historyAdd.innerHTML = '';  
    taskAssignedElement.innerText="6";
    completedTaskElement.innerText="23";

    function updateTask(button) {
        if (button.disabled) {
            button.disabled = false;
            button.style.backgroundColor = "#3752FD";  
            button.style.cursor = "pointer";  
            button.style.color = "#ffffff";  
        }
    }
    taskButtons.forEach((button, index) => {
        updateTask(button, index + 1);
    });

    let disableButtons = document.querySelectorAll('.disable-button');
    disableButtons.forEach(function (button) {
        button.disabled = false;
        button.style.backgroundColor = "#3752FD"; 
    });
});
