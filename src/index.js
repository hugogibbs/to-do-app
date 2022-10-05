// import all the modules of the website

import {homeLoad} from './website.js';

//import the CSS file

import './style.css';   


homeLoad();


// module to swith tabs between home, menu and contact

let switchModule = (function () {

    const homeTab = document.getElementById('home');
    homeTab.addEventListener("click", homeLoad);

    const menuTab = document.getElementById('menu');
    menuTab.addEventListener("click", menuLoad);

    const contactTab = document.getElementById('contact');
    contactTab.addEventListener("click", contactLoad);

})();
