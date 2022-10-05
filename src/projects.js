export function projectsLoad() {
    
    const contentDiv = document.querySelector('#content');
    contentDiv.replaceChildren();

    const projectsPanel = document.createElement('div');
    projectsPanel.textContent = 'HELLO PROJECTS';
    content.appendChild(projectsPanel);

}