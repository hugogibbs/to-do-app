export function todayLoad() {
    
    const contentDiv = document.querySelector('#content');
    contentDiv.replaceChildren();

    const todayPanel = document.createElement('div');
    todayPanel.textContent = 'Today';
    todayPanel.classList = 'todayMessage';
    content.appendChild(todayPanel);

}