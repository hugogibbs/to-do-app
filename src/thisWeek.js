export function thisWeekLoad() {
    
    const contentDiv = document.querySelector('#content');
    contentDiv.replaceChildren();

    const thisWeekPanel = document.createElement('div');
    thisWeekPanel.textContent = 'This Week';
    thisWeekPanel.className = 'weekMessage';
    content.appendChild(thisWeekPanel);

}