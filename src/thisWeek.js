export function thisWeekLoad() {
    
    const contentDiv = document.querySelector('#content');
    contentDiv.replaceChildren();

    const thisWeekPanel = document.createElement('div');
    thisWeekPanel.textContent = 'HELLO THIS WEEK';
    content.appendChild(thisWeekPanel);

}