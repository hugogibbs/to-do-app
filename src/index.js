// import all the modules of the website

import {homeLoad} from './home.js';

//import the CSS file

import './style.css';   


homeLoad();


// module to swith tabs between home, menu and contact

let switchModule = (function () {

    const homeTab = document.getElementById('home');
    homeTab.addEventListener("click", homeLoad);


})();
