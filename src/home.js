import { Router, text } from "express";

export function homeLoad() {
    
    const contentDiv = document.querySelector('#content');
    contentDiv.replaceChildren();

    const taskBar = document.createElement('div');
    content.appendChild(taskBar);
    taskBar.className = 'taskBar';

    
    const taskCheck = document.createElement('input');
    
    const taskTitle = document.createElement('div');
    taskBar.appendChild(taskTitle);
    taskTitle.textContent = 'Business Meeting';


    const addButton = document.getElementById('addTask');
    addButton.addEventListener("click", function(){
        popup.style.display = "flex";
    })

    const closeButton = document.getElementById('close');
    closeButton.addEventListener("click", function() {
        popup.style.display = "none";
    })

    // Declare empty array for the Library

    let myArray = [];

    //object constructor for the task

    function Task(Title, Details, Date, Priority) {
        this.Title = Title;
        this.Details = Details;
        this.Date = Date;
        this.Priority = Priority;
    }

    // submit the form input to the task array
    document.getElementById('submit_task').addEventListener('click', intakeFormData);

    function intakeFormData() {
        let Title = document.getElementById("task_title").value;
        let Details = document.getElementById("task_details").value;
        let Date = document.getElementById("task_date").value;
        let Priority = document.getElementById("task_prioriy").checked;


        addTasktoArray(Title, Details, Date, Priority);

        document.getElementById("addTask").reset();

    }
    
    function addTaskToLibrary(Title, Details, Date, Priority) {
        console.log(Title);
        let task = new Task(Title, Details, Date, Priority);
        myArray.push(task);
        displayTasksOnPage();
    }


    function displayTasksOnPage (){

        myArray.forEach(myArrays => {
            const row = document.createElement('tr');
            row.className = 'tr';
            row.id = 'tr';
            table.appendChile(row);
        })
    }

    addTaskToLibrary("Business Meeting", "Review strategy", "01/01/2023", "High");
    addTaskToLibrary("Go for a Walk", "to Miami Beach", "01/02/2023", "Medium");

}