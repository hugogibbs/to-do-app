export function todayLoad() {
    
    const contentDiv = document.querySelector('#content');
    contentDiv.replaceChildren();

    const todayPanel = document.createElement('div');
    todayPanel.textContent = 'HELLO TODAY';
    content.appendChild(todayPanel);

}