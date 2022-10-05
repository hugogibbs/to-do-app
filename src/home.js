export function homeLoad() {
    
    const contentDiv = document.querySelector('#content');
    contentDiv.replaceChildren();

    const homePanel = document.createElement('div');
    homePanel.textContent = 'HELLO HOME';
    content.appendChild(homePanel);

    const addButton = document.getElementById('addTask');
    addButton.addEventListener("click", function(){
        popup.style.display = "flex";
    })

    const closeButton = document.getElementById('close');
    closeButton.addEventListener("click", function() {
        popup.style.display = "none";
    })

}