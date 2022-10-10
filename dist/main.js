/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeLoad\": () => (/* binding */ homeLoad)\n/* harmony export */ });\n// eslint-disable-next-line import/prefer-default-export\nfunction homeLoad() {\n  const contentDiv = document.querySelector('#content');\n  contentDiv.replaceChildren();\n\n  const homePanel = document.createElement('div');\n  homePanel.textContent = 'Home';\n  homePanel.className = 'homeMessage';\n  content.appendChild(homePanel);\n\n  const taskTable = document.createElement('table');\n  taskTable.className = 'table';\n  taskTable.id = 'table';\n  content.appendChild(taskTable);\n\n  const addButton = document.getElementById('addTask');\n  addButton.addEventListener('click', () => {\n    popup.style.display = 'flex';\n  });\n\n  const closeButton = document.getElementById('close');\n  closeButton.addEventListener('click', () => {\n    popup.style.display = 'none';\n  });\n\n  const closeButton2 = document.getElementById('submit_task');\n  closeButton2.addEventListener('click', () => {\n    popup.style.display = 'none';\n  });\n\n  // Declare empty array for the Library\n\n  const myArray = [];\n\n  // object constructor for the task\n\n  function Task(Title, Details, Date, Priority) {\n    this.Title = Title;\n    this.Details = Details;\n    this.Date = Date;\n    this.Priority = Priority;\n  }\n\n  // submit the form input to the task array\n  document.getElementById('submit_task').addEventListener('click', intakeFormData);\n\n  function intakeFormData() {\n    const Title = document.getElementById('task_title').value;\n    const Details = document.getElementById('task_details').value;\n    const Date = document.getElementById('task_date').value;\n    const Priority = document.getElementById('task_priority').value;\n\n    addTaskToArray(Title, Details, Date, Priority);\n\n    document.getElementById('addBook').reset();\n  }\n\n  function addTaskToArray(Title, Details, Date, Priority) {\n    console.log(Title);\n    console.log(Details);\n    console.log(Date);\n    console.log(Priority);\n    const task = new Task(Title, Details, Date, Priority);\n    myArray.push(task);\n    displayTasksOnPage();\n  }\n\n  function displayTasksOnPage() {\n    const removeTable = document.querySelectorAll('.tr');\n    console.log('show me the node count of current tr...', removeTable);\n    for (let i = 0; i < removeTable.length; i++) {\n      removeTable[i].remove();\n    }\n\n    myArray.forEach((myArrays) => {\n      const row = document.createElement('tr');\n      row.className = 'tr';\n      row.id = 'tr';\n      table.appendChild(row);\n\n      const checktd = document.createElement('td');\n      checktd.id = 'checktd';\n      checktd.className = 'checktd';\n      row.appendChild(checktd);\n\n      const check = document.createElement('input');\n      check.type = 'checkbox';\n      check.className = 'check';\n      check.id = 'check';\n      checktd.appendChild(check);\n\n      for (const key in myArrays) {\n        if (`${key}` == 'Details') {\n          console.log('saved details');\n        } else {\n          console.log(`${key}: ${myArrays[key]}`);\n          const item = document.createElement('td');\n          item.textContent = (`${myArrays[key]}`);\n          row.appendChild(item);\n        }\n      }\n    });\n  }\n\n  addTaskToArray('Business Meeting', 'Review strategy', '2023-01-01', 'High');\n  addTaskToArray('Go to the Gym', 'Smart Fit Los Militares', '2023-04-01', 'Medium');\n  addTaskToArray('Travel to Miami', 'American Airlines Flight', '2023-06-01', 'High');\n}\n\n\n//# sourceURL=webpack://to-do-app/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _today_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today.js */ \"./src/today.js\");\n/* harmony import */ var _thisWeek_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thisWeek.js */ \"./src/thisWeek.js\");\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n// import all the modules of the website\n\n\n\n\n\n\n//import the CSS file\n\n   \n\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.homeLoad)();\n\n// module to swith tabs between home, menu and contact\n\nlet switchModule = (function () {\n\n    const homeTab = document.getElementById('home');\n    homeTab.addEventListener(\"click\", _home_js__WEBPACK_IMPORTED_MODULE_0__.homeLoad);\n\n    const todayTab = document.getElementById('today');\n    todayTab.addEventListener(\"click\", _today_js__WEBPACK_IMPORTED_MODULE_1__.todayLoad);\n\n    const thisWeekTab = document.getElementById('thisWeek');\n    thisWeekTab.addEventListener(\"click\", _thisWeek_js__WEBPACK_IMPORTED_MODULE_2__.thisWeekLoad);\n\n    const projectsTab = document.getElementById('projects');\n    projectsTab.addEventListener(\"click\", _projects_js__WEBPACK_IMPORTED_MODULE_3__.projectsLoad);\n\n\n})();\n\n\n//# sourceURL=webpack://to-do-app/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectsLoad\": () => (/* binding */ projectsLoad)\n/* harmony export */ });\n/* eslint-disable import/prefer-default-export */\nfunction projectsLoad() {\n  const contentDiv = document.querySelector('#content');\n  contentDiv.replaceChildren();\n\n  const projectsPanel = document.createElement('div');\n  projectsPanel.textContent = 'Projects';\n  projectsPanel.className = 'projectsMessage';\n  content.appendChild(projectsPanel);\n}\n\n\n//# sourceURL=webpack://to-do-app/./src/projects.js?");

/***/ }),

/***/ "./src/thisWeek.js":
/*!*************************!*\
  !*** ./src/thisWeek.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"thisWeekLoad\": () => (/* binding */ thisWeekLoad)\n/* harmony export */ });\nfunction thisWeekLoad() {\n    \n    const contentDiv = document.querySelector('#content');\n    contentDiv.replaceChildren();\n\n    const thisWeekPanel = document.createElement('div');\n    thisWeekPanel.textContent = 'This Week';\n    thisWeekPanel.className = 'weekMessage';\n    content.appendChild(thisWeekPanel);\n\n}\n\n//# sourceURL=webpack://to-do-app/./src/thisWeek.js?");

/***/ }),

/***/ "./src/today.js":
/*!**********************!*\
  !*** ./src/today.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todayLoad\": () => (/* binding */ todayLoad)\n/* harmony export */ });\nfunction todayLoad() {\n    \n    const contentDiv = document.querySelector('#content');\n    contentDiv.replaceChildren();\n\n    const todayPanel = document.createElement('div');\n    todayPanel.textContent = 'Today';\n    todayPanel.classList = 'todayMessage';\n    content.appendChild(todayPanel);\n\n}\n\n//# sourceURL=webpack://to-do-app/./src/today.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;