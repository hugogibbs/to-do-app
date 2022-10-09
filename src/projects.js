/* eslint-disable import/prefer-default-export */
export function projectsLoad() {
  const contentDiv = document.querySelector('#content');
  contentDiv.replaceChildren();

  const projectsPanel = document.createElement('div');
  projectsPanel.textContent = 'Projects';
  projectsPanel.className = 'projectsMessage';
  content.appendChild(projectsPanel);
}
