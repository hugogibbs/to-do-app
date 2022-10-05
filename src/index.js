// import all the modules of the website

import {homeLoad} from './home.js';
import {todayLoad} from './today.js';
import {thisWeekLoad} from './thisWeek.js';
import {projectsLoad} from './projects.js';

//import the CSS file

import './style.css';   


homeLoad();


// module to swith tabs between home, menu and contact

let switchModule = (function () {

    const homeTab = document.getElementById('home');
    homeTab.addEventListener("click", homeLoad);

    const todayTab = document.getElementById('today');
    todayTab.addEventListener("click", todayLoad);

    const thisWeekTab = document.getElementById('thisWeek');
    thisWeekTab.addEventListener("click", thisWeekLoad);

    const projectsTab = document.getElementById('projects');
    projectsTab.addEventListener("click", projectsLoad);


})();
