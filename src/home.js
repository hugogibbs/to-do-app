export function homeLoad() {
    
    const taskTable = document.createElement('table');
    taskTable.className = 'table';
    taskTable.id = 'table';
    content.appendChild(taskTable);

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
        let Priority = document.getElementById("task_prioriy").value;


        addTasktoArray(Title, Details, Date, Priority);
        
        document.getElementById("addTask").reset();

    }
    
    function addTaskToArray(Title, Details, Date, Priority) {
        console.log(Title);
        console.log(Details);
        console.log(Date);
        console.log(Priority);
        let task = new Task(Title, Details, Date, Priority);
        myArray.push(task);
        displayTasksOnPage();
    }

    function displayTasksOnPage() {
        const removeTable = document.querySelectorAll(".tr");
        console.log("show me the node count of current tr...", removeTable);
        for (let i = 0; i < removeTable.length; i++) {
        removeTable[i].remove();
    }

        
        myArray.forEach(myArrays => {
            const row = document.createElement("tr");
            row.className = "tr";
            row.id = "tr";
            table.appendChild(row);

            for (let key in myArrays) {
                
                if (`${key}` == 'Details') {
                    console.log("saved details")
                }
                else {
                console.log(`${key}: ${myArrays[key]}`);
                const item = document.createElement('td');
                item.textContent = (`${myArrays[key]}`);
                row.appendChild(item);
                }
            }
        }
    )}

    addTaskToArray("Business Meeting", "Review strategy", "01/01/2023", "High");
    addTaskToArray("Go for a Walk", "to South Beach", "01/02/2023", "Medium");
    addTaskToArray("Read a Book", "Unlimited Power", "01/03/2023", "Medium");
    addTaskToArray("Go to the Gym", "Smart Fit Los Militares", "01/04/2023", "Medium");
    addTaskToArray("Job Interview", "Software Engineer role", "01/05/2023", "Medium");
    addTaskToArray("Travel to Miami", "American Airlines Flight", "01/06/2023", "High"); 

}