export function homeLoad() {
    
    const contentDiv = document.querySelector('#content');
    contentDiv.replaceChildren();

    const homePanel = document.createElement('div');
    homePanel.textContent = 'Home';
    homePanel.className = 'homeMessage';
    content.appendChild(homePanel);
    
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

    const closeButton2 = document.getElementById('submit_task');
    closeButton2.addEventListener("click", function() {
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
        let Priority = document.getElementById("task_priority").value;

        addTaskToArray(Title, Details, Date, Priority);

        document.getElementById("addBook").reset();
        
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

            const checktd = document.createElement('td');
                checktd.id = 'checktd';
                checktd.className = 'checktd';
                row.appendChild(checktd);
                
                const check = document.createElement('input');
                check.type = 'checkbox';
                check.className = 'check';
                check.id = "check";
                checktd.appendChild(check);

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

    addTaskToArray("Business Meeting", "Review strategy", "2023-01-01", "High");
    addTaskToArray("Go to the Gym", "Smart Fit Los Militares", "2023-04-01", "Medium");
    addTaskToArray("Travel to Miami", "American Airlines Flight", "2023-06-01", "High"); 

}