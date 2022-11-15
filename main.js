/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "project": () => (/* binding */ project)
/* harmony export */ });
const project = function(title) {
    let todos = [];

    return {
        title,
        todos
    };
};

/***/ }),

/***/ "./src/projectCreation.js":
/*!********************************!*\
  !*** ./src/projectCreation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectToDisplay": () => (/* binding */ addProjectToDisplay),
/* harmony export */   "createProjectAddButton": () => (/* binding */ createProjectAddButton),
/* harmony export */   "loadProjectsFromStorage": () => (/* binding */ loadProjectsFromStorage),
/* harmony export */   "makeProjectCreationForm": () => (/* binding */ makeProjectCreationForm),
/* harmony export */   "setUpDefaultProjects": () => (/* binding */ setUpDefaultProjects)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _todoCreation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoCreation.js */ "./src/todoCreation.js");
/* harmony import */ var _icons_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/trash-can-outline.svg */ "./src/icons/trash-can-outline.svg");





function makeProjectCreationForm() {
    const popUp = document.createElement("div");
    popUp.classList.add("pop-up", "project"); 

    const titleInput = document.createElement("input");
    titleInput.placeholder = "Enter title here";

    const createButton = document.createElement("button");
    createButton.classList.add("create");
    createButton.textContent = "Create";
    createButton.addEventListener("click", () => {
        if ((0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.projectExists)(titleInput.value)) {
            alert("Project Already Exists");
            return ;
        }
        popUp.classList.toggle("show");
        const newProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.project)(titleInput.value);
        (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.insertProjectInStorage)(newProject);
        resetPopUp(popUp);
        addProjectToDisplay(newProject);
    });

    const cancelButton = document.createElement("button");
    cancelButton.classList.add("cancel");
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", () => {
        popUp.classList.toggle("show");
        resetPopUp(popUp);
    });
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttons");
    buttonContainer.append(createButton, cancelButton);

    popUp.append(titleInput, buttonContainer);
    return popUp;
}

function addProjectToDisplay(projectToDisplay) {
    const projectItem = document.createElement("li");
    const list = document.querySelector(".sidebar .projects .list");

    const projectTitle = document.createElement("span");
    projectTitle.textContent = projectToDisplay.title;

    projectItem.addEventListener('click', () => {
        if (!(0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.projectExists)(projectToDisplay.title)) {
            switchToToday();
            return ;
        }
        displayTodosFromProject(projectToDisplay);
        setProjectAsActive(projectItem);
    });
    const deleteButton = document.createElement("img");
    deleteButton.src = _icons_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_3__;
    deleteButton.classList.add("icon");
    deleteButton.addEventListener("click", () => {
        (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.deleteProjectFromStorage)(projectToDisplay);
        list.removeChild(projectItem);
    });
    projectItem.append(projectTitle, deleteButton);
    
    list.appendChild(projectItem);
}

function displayTodosFromProject(project) {
    const list = document.querySelector(".main .list");
    list.textContent = "";
    const heading = document.createElement("h2");
    heading.textContent = project.title;
    list.appendChild(heading);
    project.todos.forEach(todo => {
        (0,_todoCreation_js__WEBPACK_IMPORTED_MODULE_2__.addTodoToDisplay)(todo);
    });
    const buttonContainer = document.querySelector(".buttonContainer");
    buttonContainer.textContent = "";
    buttonContainer.appendChild(createTodoAddButton());

}

function resetPopUp(popUp) {
    const inputFields = popUp.querySelectorAll("input");
    inputFields.forEach(element => {
        element.value = "";
    });
}

function setProjectAsActive(project) {
    const projects = document.querySelectorAll(".sidebar .list li");
    projects.forEach(element => {
        element.classList.remove("active");
    });
    project.classList.toggle("active");
}

function setUpDefaultProjects() {
    const defaultProjects = document.querySelectorAll(".home li");
    defaultProjects.forEach(element => {
        const defaultProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.project)(element.textContent);
        _storage_js__WEBPACK_IMPORTED_MODULE_1__.defaultProjectsStorage.push(defaultProject);
        element.addEventListener("click", () => {
            setProjectAsActive(element);
            if (element.textContent == "Important")
                showTodosForDefaultProject((0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.findImportantTodos)());
            else if (element.textContent == "Today")
                showTodosForDefaultProject((0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.findTodosForToday)());
            else if (element.textContent == "This Week")
                showTodosForDefaultProject((0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.findTodoForThisWeek)());
            else if (element.textContent == "All Tasks")
                showTodosForDefaultProject((0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.findAllTodos)());
        });
    });
}

function showTodosForDefaultProject(todosToShow) {
    const list = document.querySelector(".main .list");
    const buttonContainer = document.querySelector(".main .buttonContainer");
    list.textContent = "";
    buttonContainer.textContent = "";
    todosToShow.forEach(element => {
        (0,_todoCreation_js__WEBPACK_IMPORTED_MODULE_2__.addTodoToDisplay)(element);
    })
}

function createProjectAddButton() {
    const addButton = document.createElement("button");
    addButton.textContent = "Create Project";
    addButton.classList.add("add");
    addButton.addEventListener("click", () => {
        togglePopUp(true);
    });
    return addButton;
}

function createTodoAddButton() {
    const addButton = document.createElement("button");
    addButton.textContent = "Create ToDo";
    addButton.classList.add("add");
    addButton.addEventListener("click", () => {
        togglePopUp(false);
    });
    return addButton;
}

function togglePopUp(isProjectButton) {
    const selector = isProjectButton ? ".pop-up.project" : ".pop-up.todo";
    const form = document.querySelector(selector);
    form.classList.toggle("show");
}

function loadProjectsFromStorage() {
    (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.getStoredData)();
    _storage_js__WEBPACK_IMPORTED_MODULE_1__.projectsStorage.forEach(element => {
        addProjectToDisplay(element);
    });
}

function switchToToday() {
    const event = new Event("click");
    const defaultProjects = document.querySelectorAll(".sidebar .home .list li");
    for (const defaultProject of defaultProjects) {
        if (defaultProject.querySelector("span").textContent == "Today") {
            defaultProject.dispatchEvent(event);
        }
    }
}
// Improve the appearance of the buttons
// Make it so the create todo button shows up after all the todos in that project
// Improve the look of active projects

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultProjectsStorage": () => (/* binding */ defaultProjectsStorage),
/* harmony export */   "deleteProjectFromStorage": () => (/* binding */ deleteProjectFromStorage),
/* harmony export */   "deleteTodoFromStorage": () => (/* binding */ deleteTodoFromStorage),
/* harmony export */   "findAllTodos": () => (/* binding */ findAllTodos),
/* harmony export */   "findImportantTodos": () => (/* binding */ findImportantTodos),
/* harmony export */   "findTodoForThisWeek": () => (/* binding */ findTodoForThisWeek),
/* harmony export */   "findTodosForToday": () => (/* binding */ findTodosForToday),
/* harmony export */   "getStoredData": () => (/* binding */ getStoredData),
/* harmony export */   "insertProjectInStorage": () => (/* binding */ insertProjectInStorage),
/* harmony export */   "insertTodoInStorage": () => (/* binding */ insertTodoInStorage),
/* harmony export */   "projectExists": () => (/* binding */ projectExists),
/* harmony export */   "projectsStorage": () => (/* binding */ projectsStorage)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");


let projectsStorage = [];
let defaultProjectsStorage = [];

function projectExists(name) {
    return projectsStorage.some(project => project.title == name);
}

function insertTodoInStorage(todoToInsert) {
    const projectToInsertInto = document.querySelector(".projects .list .active");
    const projectTitle = projectToInsertInto.querySelector("span").textContent;
    const position = projectsStorage.findIndex(project => project.title == projectTitle);
    
    projectsStorage[position].todos.push(todoToInsert);
    todoToInsert.parentProject = projectsStorage[position].title;
    saveDataInLocalStorage();
}

function insertProjectInStorage(projectToInsert) {
    projectsStorage.push(projectToInsert);
    saveDataInLocalStorage();
}

function deleteTodoFromStorage(todoToDelete) {
    const position = projectsStorage.findIndex(project => project.title == todoToDelete.parentProject);
    projectsStorage[position].todos.splice(projectsStorage[position].todos.findIndex(todo => todo == todoToDelete), 1);
    saveDataInLocalStorage();
}

function deleteProjectFromStorage(projectToDelete) {
    const position = projectsStorage.findIndex(project => project == projectToDelete);
    projectsStorage.splice(position, 1);
    saveDataInLocalStorage();
}

function findImportantTodos() {
    let tasks = [];
    projectsStorage.forEach(project => {
        project.todos.forEach(todo => {
            if (todo.isImportant)
                tasks.push(todo);
        });
    });
    return tasks;
}

function findTodosForToday() {
    let tasks = [];
    projectsStorage.forEach(project => {
        project.todos.forEach(todo => {
            let format = todo.dueDate.split("-");
            format = format.map(x => Number(x));
            if ((0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(format[0], format[1] - 1, format[2])))
                tasks.push(todo);
        })
    })
    return tasks;
}

function findTodoForThisWeek() {
    let tasks = [];
    projectsStorage.forEach(project => {
        project.todos.forEach(todo => {
            let format = todo.dueDate.split("-");
            format = format.map(x => Number(x));
            if ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(format[0], format[1] - 1, format[2])))
                tasks.push(todo);
        })
    })
    return tasks;
}

function findAllTodos() {
    let tasks = [];
    projectsStorage.forEach(project => {
        project.todos.forEach(todo => tasks.push(todo));
    });
    return tasks;
}

function saveDataInLocalStorage() {
    localStorage.setItem("projectsStorage", JSON.stringify(projectsStorage));
}

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            e.code === 22 ||
            e.code === 1014 ||
            e.name === 'QuotaExceededError' ||
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            (storage && storage.length !== 0);
    }
}

function getStoredData() {
    if (!storageAvailable("localStorage"))
        return ;
    projectsStorage = JSON.parse(localStorage.getItem("projectsStorage"));
}

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todo": () => (/* binding */ todo)
/* harmony export */ });
const todo = function (title, description="", dueDate="none", isImportant=false, parentProject=null) {
    return {
        title,
        description,
        dueDate,
        isImportant,
        parentProject,
    };
};


/***/ }),

/***/ "./src/todoCreation.js":
/*!*****************************!*\
  !*** ./src/todoCreation.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodoToDisplay": () => (/* binding */ addTodoToDisplay),
/* harmony export */   "makeTodoCreationForm": () => (/* binding */ makeTodoCreationForm)
/* harmony export */ });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");



function makeTodoCreationForm() {
    const popUp = document.createElement("div");
    popUp.classList.add("pop-up", "todo");

    const titleContainer = createInputField("text", "Title");
    const descriptionContainer = createInputField("text", "Description");
    const datePickerContainer = createInputField("date", "Date");

    const createButton = document.createElement("button");
    const cancelButton = document.createElement("button");

    createButton.textContent = "Create";
    createButton.classList.add("create");
    createButton.addEventListener('click', () => {
        popUp.classList.toggle("show")
        const newToDo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.todo)(titleContainer.querySelector("input").value, 
            descriptionContainer.querySelector("input").value, 
            datePickerContainer.querySelector("input").value);
        console.log(newToDo.dueDate);
        (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.insertTodoInStorage)(newToDo);
        resetPopUp(popUp);
        addTodoToDisplay(newToDo);
    });

    cancelButton.textContent = "Cancel";
    cancelButton.classList.add("cancel");
    cancelButton.addEventListener('click', () => {
        popUp.classList.toggle("show");
        resetPopUp(popUp);
    })

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttons");
    buttonContainer.append(createButton, cancelButton);

    popUp.append(titleContainer, descriptionContainer, datePickerContainer, buttonContainer);
    return popUp;
}

function addTodoToDisplay(todoToDisplay) {
    const todo = document.createElement("div");
    const list = document.querySelector(".main .list");

    const status = document.createElement("input");
    status.setAttribute("type", "checkbox");
    status.addEventListener("change", () => {
        todo.classList.toggle("completed");
    });
    const title = document.createElement("p");
    title.textContent = todoToDisplay.title;
    const detailsButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    detailsButton.textContent = "Details";
    deleteButton.textContent = "Del";

    deleteButton.addEventListener("click", () => {
        (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.deleteTodoFromStorage)(todoToDisplay);
        list.removeChild(todo);
    });
    todo.classList.add("todo");

    const important = document.createElement("input");
    important.checked = todoToDisplay.isImportant;
    important.setAttribute("type", "checkbox");
    important.addEventListener("change", () => {
        todoToDisplay.isImportant = important.checked;
        console.log(important.checked);
    });

    todo.append(status, title, detailsButton, important, deleteButton);

    list.appendChild(todo);
}

function resetPopUp(popUp) {
    const inputFields = popUp.querySelectorAll("input");
        inputFields.forEach(element => {
            element.value = "";
        });
}

function createInputField(type, name) {
    const inputContainer = document.createElement("div");
    const input = document.createElement("input");
    const label = document.createElement("label");
    label.textContent = name;
    input.id = name;
    input.setAttribute("type", type);
    input.setAttribute("name", name);
    label.setAttribute("for", input.id);
    inputContainer.append(label, input);

    return inputContainer;
}


/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadUI": () => (/* binding */ loadUI)
/* harmony export */ });
/* harmony import */ var _projectCreation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectCreation.js */ "./src/projectCreation.js");
/* harmony import */ var _todoCreation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoCreation.js */ "./src/todoCreation.js");



function loadUI() {
    const main = document.querySelector(".main");
    const projectsSection = document.querySelector(".projects");
    const todoForm = (0,_todoCreation_js__WEBPACK_IMPORTED_MODULE_1__.makeTodoCreationForm)();
    const projectForm = (0,_projectCreation_js__WEBPACK_IMPORTED_MODULE_0__.makeProjectCreationForm)();
    (0,_projectCreation_js__WEBPACK_IMPORTED_MODULE_0__.setUpDefaultProjects)();
    
    (0,_projectCreation_js__WEBPACK_IMPORTED_MODULE_0__.loadProjectsFromStorage)();
    projectsSection.appendChild(projectForm);
    main.appendChild(todoForm);
}

/***/ }),

/***/ "./src/icons/trash-can-outline.svg":
/*!*****************************************!*\
  !*** ./src/icons/trash-can-outline.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bcf8d6ff346603c8a51a.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");
/* harmony import */ var _projectCreation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectCreation.js */ "./src/projectCreation.js");



function loadPage() {
    const header = createHeader();
    const sidebar = createSidebar();
    const main = createMainContent();
    const container = document.createElement("div");

    container.classList.add("container");
    container.append(sidebar, main);
    const content = document.querySelector(".content");
    content.append(header, container);
    (0,_ui_js__WEBPACK_IMPORTED_MODULE_0__.loadUI)();
}

function createHeader() {
    const header = document.createElement("header");
    const heading = document.createElement("h1");
    
    heading.textContent = "ToDo";
    header.appendChild(heading);
    return header;
}

function createSidebar() {
    const sidebar = document.createElement("section");
    sidebar.classList.add("sidebar");

    const home = createHomeSection();
    const projects = createProjectSection();

    sidebar.append(home, projects);
    return sidebar;
}

function createHomeSection() {
    const home = document.createElement("section");
    home.classList.add("home");

    const heading = document.createElement("h2");
    heading.textContent = "Home";
    const list = document.createElement("ul");
    list.classList.add("list");
    const allTasks = createSidebarItem("All Tasks");
    const tasksForToday = createSidebarItem("Today");
    const tasksForWeek = createSidebarItem("This Week");
    const importantTasks = createSidebarItem("Important");

    list.append(allTasks, tasksForToday, tasksForWeek, importantTasks);
    home.append(heading, list);
    return home;
}

function createProjectSection() {
    const projects = document.createElement("section");
    projects.classList.add("projects");

    const heading = document.createElement("h2");
    heading.textContent = "Projects";
    const list = document.createElement("ul");
    list.classList.add("list");
    const projectAddButton = (0,_projectCreation_js__WEBPACK_IMPORTED_MODULE_1__.createProjectAddButton)();
    projects.append(heading, list, projectAddButton);
    return projects;
}

function createSidebarItem(name) {
    const item = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = name;

    item.appendChild(span);
    return item;
}

function createMainContent() {
    const main = document.createElement("section");

    const container = document.createElement("section");
    container.classList.add("list");
    const heading = document.createElement("h2");
    heading.textContent = "Today";
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttonContainer");
    // Also gotta append the list of todos for the day.
    container.appendChild(heading);
    main.append(container, buttonContainer);
    main.classList.add("main");
    return main;
}

loadPage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDJFQUFzQjtBQUNuRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVGhpc1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9qZWN0Q3JlYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RvZG9DcmVhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgc3RhcnRPZldlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZVdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheSxcbiAqIC8vIGFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDEgSmFudWFyeSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNSBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCAwLCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZVdlZWsoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlTGVmdCwgb3B0aW9ucyk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZldlZWsuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mV2Vlay5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZVdlZWsgZnJvbSBcIi4uL2lzU2FtZVdlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNUaGlzV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGlzIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCwgaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQgYW5kIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5XG4gKiAvLyBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUaGlzV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVXZWVrKGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSwgb3B0aW9ucyk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImV4cG9ydCBjb25zdCBwcm9qZWN0ID0gZnVuY3Rpb24odGl0bGUpIHtcbiAgICBsZXQgdG9kb3MgPSBbXTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICB0b2Rvc1xuICAgIH07XG59OyIsImltcG9ydCB7cHJvamVjdH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IHtwcm9qZWN0c1N0b3JhZ2UsIGRlZmF1bHRQcm9qZWN0c1N0b3JhZ2UsIHByb2plY3RFeGlzdHMsIGZpbmRJbXBvcnRhbnRUb2RvcywgZmluZFRvZG9zRm9yVG9kYXksIGZpbmRUb2RvRm9yVGhpc1dlZWssIGluc2VydFByb2plY3RJblN0b3JhZ2UsIGdldFN0b3JlZERhdGEsIGRlbGV0ZVByb2plY3RGcm9tU3RvcmFnZSwgZmluZEFsbFRvZG9zfSBmcm9tIFwiLi9zdG9yYWdlLmpzXCI7XG5pbXBvcnQgeyBhZGRUb2RvVG9EaXNwbGF5IH0gZnJvbSBcIi4vdG9kb0NyZWF0aW9uLmpzXCI7XG5pbXBvcnQgdHJhc2hJY29uIGZyb20gXCIuL2ljb25zL3RyYXNoLWNhbi1vdXRsaW5lLnN2Z1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVByb2plY3RDcmVhdGlvbkZvcm0oKSB7XG4gICAgY29uc3QgcG9wVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBvcFVwLmNsYXNzTGlzdC5hZGQoXCJwb3AtdXBcIiwgXCJwcm9qZWN0XCIpOyBcblxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGl0bGVJbnB1dC5wbGFjZWhvbGRlciA9IFwiRW50ZXIgdGl0bGUgaGVyZVwiO1xuXG4gICAgY29uc3QgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjcmVhdGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImNyZWF0ZVwiKTtcbiAgICBjcmVhdGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkNyZWF0ZVwiO1xuICAgIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAocHJvamVjdEV4aXN0cyh0aXRsZUlucHV0LnZhbHVlKSkge1xuICAgICAgICAgICAgYWxlcnQoXCJQcm9qZWN0IEFscmVhZHkgRXhpc3RzXCIpO1xuICAgICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgfVxuICAgICAgICBwb3BVcC5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3QodGl0bGVJbnB1dC52YWx1ZSk7XG4gICAgICAgIGluc2VydFByb2plY3RJblN0b3JhZ2UobmV3UHJvamVjdCk7XG4gICAgICAgIHJlc2V0UG9wVXAocG9wVXApO1xuICAgICAgICBhZGRQcm9qZWN0VG9EaXNwbGF5KG5ld1Byb2plY3QpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZChcImNhbmNlbFwiKTtcbiAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBwb3BVcC5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgICAgICAgcmVzZXRQb3BVcChwb3BVcCk7XG4gICAgfSk7XG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ1dHRvbnNcIik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChjcmVhdGVCdXR0b24sIGNhbmNlbEJ1dHRvbik7XG5cbiAgICBwb3BVcC5hcHBlbmQodGl0bGVJbnB1dCwgYnV0dG9uQ29udGFpbmVyKTtcbiAgICByZXR1cm4gcG9wVXA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0VG9EaXNwbGF5KHByb2plY3RUb0Rpc3BsYXkpIHtcbiAgICBjb25zdCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyIC5wcm9qZWN0cyAubGlzdFwiKTtcblxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RUb0Rpc3BsYXkudGl0bGU7XG5cbiAgICBwcm9qZWN0SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKCFwcm9qZWN0RXhpc3RzKHByb2plY3RUb0Rpc3BsYXkudGl0bGUpKSB7XG4gICAgICAgICAgICBzd2l0Y2hUb1RvZGF5KCk7XG4gICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICB9XG4gICAgICAgIGRpc3BsYXlUb2Rvc0Zyb21Qcm9qZWN0KHByb2plY3RUb0Rpc3BsYXkpO1xuICAgICAgICBzZXRQcm9qZWN0QXNBY3RpdmUocHJvamVjdEl0ZW0pO1xuICAgIH0pO1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZGVsZXRlQnV0dG9uLnNyYyA9IHRyYXNoSWNvbjtcbiAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImljb25cIik7XG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGRlbGV0ZVByb2plY3RGcm9tU3RvcmFnZShwcm9qZWN0VG9EaXNwbGF5KTtcbiAgICAgICAgbGlzdC5yZW1vdmVDaGlsZChwcm9qZWN0SXRlbSk7XG4gICAgfSk7XG4gICAgcHJvamVjdEl0ZW0uYXBwZW5kKHByb2plY3RUaXRsZSwgZGVsZXRlQnV0dG9uKTtcbiAgICBcbiAgICBsaXN0LmFwcGVuZENoaWxkKHByb2plY3RJdGVtKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRvZG9zRnJvbVByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4gLmxpc3RcIik7XG4gICAgbGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIHByb2plY3QudG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgYWRkVG9kb1RvRGlzcGxheSh0b2RvKTtcbiAgICB9KTtcbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbkNvbnRhaW5lclwiKTtcbiAgICBidXR0b25Db250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVUb2RvQWRkQnV0dG9uKCkpO1xuXG59XG5cbmZ1bmN0aW9uIHJlc2V0UG9wVXAocG9wVXApIHtcbiAgICBjb25zdCBpbnB1dEZpZWxkcyA9IHBvcFVwLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKTtcbiAgICBpbnB1dEZpZWxkcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LnZhbHVlID0gXCJcIjtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0UHJvamVjdEFzQWN0aXZlKHByb2plY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkZWJhciAubGlzdCBsaVwiKTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfSk7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VXBEZWZhdWx0UHJvamVjdHMoKSB7XG4gICAgY29uc3QgZGVmYXVsdFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob21lIGxpXCIpO1xuICAgIGRlZmF1bHRQcm9qZWN0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IHByb2plY3QoZWxlbWVudC50ZXh0Q29udGVudCk7XG4gICAgICAgIGRlZmF1bHRQcm9qZWN0c1N0b3JhZ2UucHVzaChkZWZhdWx0UHJvamVjdCk7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHNldFByb2plY3RBc0FjdGl2ZShlbGVtZW50KTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRleHRDb250ZW50ID09IFwiSW1wb3J0YW50XCIpXG4gICAgICAgICAgICAgICAgc2hvd1RvZG9zRm9yRGVmYXVsdFByb2plY3QoZmluZEltcG9ydGFudFRvZG9zKCkpO1xuICAgICAgICAgICAgZWxzZSBpZiAoZWxlbWVudC50ZXh0Q29udGVudCA9PSBcIlRvZGF5XCIpXG4gICAgICAgICAgICAgICAgc2hvd1RvZG9zRm9yRGVmYXVsdFByb2plY3QoZmluZFRvZG9zRm9yVG9kYXkoKSk7XG4gICAgICAgICAgICBlbHNlIGlmIChlbGVtZW50LnRleHRDb250ZW50ID09IFwiVGhpcyBXZWVrXCIpXG4gICAgICAgICAgICAgICAgc2hvd1RvZG9zRm9yRGVmYXVsdFByb2plY3QoZmluZFRvZG9Gb3JUaGlzV2VlaygpKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKGVsZW1lbnQudGV4dENvbnRlbnQgPT0gXCJBbGwgVGFza3NcIilcbiAgICAgICAgICAgICAgICBzaG93VG9kb3NGb3JEZWZhdWx0UHJvamVjdChmaW5kQWxsVG9kb3MoKSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzaG93VG9kb3NGb3JEZWZhdWx0UHJvamVjdCh0b2Rvc1RvU2hvdykge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4gLmxpc3RcIik7XG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluIC5idXR0b25Db250YWluZXJcIik7XG4gICAgbGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgYnV0dG9uQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB0b2Rvc1RvU2hvdy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBhZGRUb2RvVG9EaXNwbGF5KGVsZW1lbnQpO1xuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0QWRkQnV0dG9uKCkge1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmVhdGUgUHJvamVjdFwiO1xuICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkXCIpO1xuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0b2dnbGVQb3BVcCh0cnVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYWRkQnV0dG9uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RvQWRkQnV0dG9uKCkge1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmVhdGUgVG9Eb1wiO1xuICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkXCIpO1xuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0b2dnbGVQb3BVcChmYWxzZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFkZEJ1dHRvbjtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlUG9wVXAoaXNQcm9qZWN0QnV0dG9uKSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBpc1Byb2plY3RCdXR0b24gPyBcIi5wb3AtdXAucHJvamVjdFwiIDogXCIucG9wLXVwLnRvZG9cIjtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRQcm9qZWN0c0Zyb21TdG9yYWdlKCkge1xuICAgIGdldFN0b3JlZERhdGEoKTtcbiAgICBwcm9qZWN0c1N0b3JhZ2UuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgYWRkUHJvamVjdFRvRGlzcGxheShlbGVtZW50KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gc3dpdGNoVG9Ub2RheSgpIHtcbiAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudChcImNsaWNrXCIpO1xuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2lkZWJhciAuaG9tZSAubGlzdCBsaVwiKTtcbiAgICBmb3IgKGNvbnN0IGRlZmF1bHRQcm9qZWN0IG9mIGRlZmF1bHRQcm9qZWN0cykge1xuICAgICAgICBpZiAoZGVmYXVsdFByb2plY3QucXVlcnlTZWxlY3RvcihcInNwYW5cIikudGV4dENvbnRlbnQgPT0gXCJUb2RheVwiKSB7XG4gICAgICAgICAgICBkZWZhdWx0UHJvamVjdC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIEltcHJvdmUgdGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGJ1dHRvbnNcbi8vIE1ha2UgaXQgc28gdGhlIGNyZWF0ZSB0b2RvIGJ1dHRvbiBzaG93cyB1cCBhZnRlciBhbGwgdGhlIHRvZG9zIGluIHRoYXQgcHJvamVjdFxuLy8gSW1wcm92ZSB0aGUgbG9vayBvZiBhY3RpdmUgcHJvamVjdHMiLCJpbXBvcnQgeyBpc1RvZGF5LCBpc1RoaXNXZWVrIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmV4cG9ydCBsZXQgcHJvamVjdHNTdG9yYWdlID0gW107XG5leHBvcnQgbGV0IGRlZmF1bHRQcm9qZWN0c1N0b3JhZ2UgPSBbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RFeGlzdHMobmFtZSkge1xuICAgIHJldHVybiBwcm9qZWN0c1N0b3JhZ2Uuc29tZShwcm9qZWN0ID0+IHByb2plY3QudGl0bGUgPT0gbmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnRUb2RvSW5TdG9yYWdlKHRvZG9Ub0luc2VydCkge1xuICAgIGNvbnN0IHByb2plY3RUb0luc2VydEludG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzIC5saXN0IC5hY3RpdmVcIik7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdFRvSW5zZXJ0SW50by5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS50ZXh0Q29udGVudDtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHByb2plY3RzU3RvcmFnZS5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0LnRpdGxlID09IHByb2plY3RUaXRsZSk7XG4gICAgXG4gICAgcHJvamVjdHNTdG9yYWdlW3Bvc2l0aW9uXS50b2Rvcy5wdXNoKHRvZG9Ub0luc2VydCk7XG4gICAgdG9kb1RvSW5zZXJ0LnBhcmVudFByb2plY3QgPSBwcm9qZWN0c1N0b3JhZ2VbcG9zaXRpb25dLnRpdGxlO1xuICAgIHNhdmVEYXRhSW5Mb2NhbFN0b3JhZ2UoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluc2VydFByb2plY3RJblN0b3JhZ2UocHJvamVjdFRvSW5zZXJ0KSB7XG4gICAgcHJvamVjdHNTdG9yYWdlLnB1c2gocHJvamVjdFRvSW5zZXJ0KTtcbiAgICBzYXZlRGF0YUluTG9jYWxTdG9yYWdlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUb2RvRnJvbVN0b3JhZ2UodG9kb1RvRGVsZXRlKSB7XG4gICAgY29uc3QgcG9zaXRpb24gPSBwcm9qZWN0c1N0b3JhZ2UuZmluZEluZGV4KHByb2plY3QgPT4gcHJvamVjdC50aXRsZSA9PSB0b2RvVG9EZWxldGUucGFyZW50UHJvamVjdCk7XG4gICAgcHJvamVjdHNTdG9yYWdlW3Bvc2l0aW9uXS50b2Rvcy5zcGxpY2UocHJvamVjdHNTdG9yYWdlW3Bvc2l0aW9uXS50b2Rvcy5maW5kSW5kZXgodG9kbyA9PiB0b2RvID09IHRvZG9Ub0RlbGV0ZSksIDEpO1xuICAgIHNhdmVEYXRhSW5Mb2NhbFN0b3JhZ2UoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3RGcm9tU3RvcmFnZShwcm9qZWN0VG9EZWxldGUpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHByb2plY3RzU3RvcmFnZS5maW5kSW5kZXgocHJvamVjdCA9PiBwcm9qZWN0ID09IHByb2plY3RUb0RlbGV0ZSk7XG4gICAgcHJvamVjdHNTdG9yYWdlLnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgc2F2ZURhdGFJbkxvY2FsU3RvcmFnZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEltcG9ydGFudFRvZG9zKCkge1xuICAgIGxldCB0YXNrcyA9IFtdO1xuICAgIHByb2plY3RzU3RvcmFnZS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgICAgICBpZiAodG9kby5pc0ltcG9ydGFudClcbiAgICAgICAgICAgICAgICB0YXNrcy5wdXNoKHRvZG8pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGFza3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kVG9kb3NGb3JUb2RheSgpIHtcbiAgICBsZXQgdGFza3MgPSBbXTtcbiAgICBwcm9qZWN0c1N0b3JhZ2UuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgcHJvamVjdC50b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICAgICAgbGV0IGZvcm1hdCA9IHRvZG8uZHVlRGF0ZS5zcGxpdChcIi1cIik7XG4gICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQubWFwKHggPT4gTnVtYmVyKHgpKTtcbiAgICAgICAgICAgIGlmIChpc1RvZGF5KG5ldyBEYXRlKGZvcm1hdFswXSwgZm9ybWF0WzFdIC0gMSwgZm9ybWF0WzJdKSkpXG4gICAgICAgICAgICAgICAgdGFza3MucHVzaCh0b2RvKTtcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIHJldHVybiB0YXNrcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRUb2RvRm9yVGhpc1dlZWsoKSB7XG4gICAgbGV0IHRhc2tzID0gW107XG4gICAgcHJvamVjdHNTdG9yYWdlLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIHByb2plY3QudG9kb3MuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgICAgIGxldCBmb3JtYXQgPSB0b2RvLmR1ZURhdGUuc3BsaXQoXCItXCIpO1xuICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0Lm1hcCh4ID0+IE51bWJlcih4KSk7XG4gICAgICAgICAgICBpZiAoaXNUaGlzV2VlayhuZXcgRGF0ZShmb3JtYXRbMF0sIGZvcm1hdFsxXSAtIDEsIGZvcm1hdFsyXSkpKVxuICAgICAgICAgICAgICAgIHRhc2tzLnB1c2godG9kbyk7XG4gICAgICAgIH0pXG4gICAgfSlcbiAgICByZXR1cm4gdGFza3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kQWxsVG9kb3MoKSB7XG4gICAgbGV0IHRhc2tzID0gW107XG4gICAgcHJvamVjdHNTdG9yYWdlLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIHByb2plY3QudG9kb3MuZm9yRWFjaCh0b2RvID0+IHRhc2tzLnB1c2godG9kbykpO1xuICAgIH0pO1xuICAgIHJldHVybiB0YXNrcztcbn1cblxuZnVuY3Rpb24gc2F2ZURhdGFJbkxvY2FsU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzU3RvcmFnZVwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c1N0b3JhZ2UpKTtcbn1cblxuZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gICAgbGV0IHN0b3JhZ2U7XG4gICAgdHJ5IHtcbiAgICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgICAgY29uc3QgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJiAoXG4gICAgICAgICAgICBlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcbiAgICAgICAgICAgIGUubmFtZSA9PT0gJ05TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEJykgJiZcbiAgICAgICAgICAgIChzdG9yYWdlICYmIHN0b3JhZ2UubGVuZ3RoICE9PSAwKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdG9yZWREYXRhKCkge1xuICAgIGlmICghc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSlcbiAgICAgICAgcmV0dXJuIDtcbiAgICBwcm9qZWN0c1N0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNTdG9yYWdlXCIpKTtcbn0iLCJleHBvcnQgY29uc3QgdG9kbyA9IGZ1bmN0aW9uICh0aXRsZSwgZGVzY3JpcHRpb249XCJcIiwgZHVlRGF0ZT1cIm5vbmVcIiwgaXNJbXBvcnRhbnQ9ZmFsc2UsIHBhcmVudFByb2plY3Q9bnVsbCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgaXNJbXBvcnRhbnQsXG4gICAgICAgIHBhcmVudFByb2plY3QsXG4gICAgfTtcbn07XG4iLCJpbXBvcnQge2luc2VydFRvZG9JblN0b3JhZ2UsIGRlbGV0ZVRvZG9Gcm9tU3RvcmFnZX0gZnJvbSBcIi4vc3RvcmFnZS5qc1wiO1xuaW1wb3J0IHt0b2RvfSBmcm9tIFwiLi90b2RvLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlVG9kb0NyZWF0aW9uRm9ybSgpIHtcbiAgICBjb25zdCBwb3BVcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcG9wVXAuY2xhc3NMaXN0LmFkZChcInBvcC11cFwiLCBcInRvZG9cIik7XG5cbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGNyZWF0ZUlucHV0RmllbGQoXCJ0ZXh0XCIsIFwiVGl0bGVcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb25Db250YWluZXIgPSBjcmVhdGVJbnB1dEZpZWxkKFwidGV4dFwiLCBcIkRlc2NyaXB0aW9uXCIpO1xuICAgIGNvbnN0IGRhdGVQaWNrZXJDb250YWluZXIgPSBjcmVhdGVJbnB1dEZpZWxkKFwiZGF0ZVwiLCBcIkRhdGVcIik7XG5cbiAgICBjb25zdCBjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBjcmVhdGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkNyZWF0ZVwiO1xuICAgIGNyZWF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY3JlYXRlXCIpO1xuICAgIGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcG9wVXAuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIilcbiAgICAgICAgY29uc3QgbmV3VG9EbyA9IHRvZG8odGl0bGVDb250YWluZXIucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLnZhbHVlLCBcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS52YWx1ZSwgXG4gICAgICAgICAgICBkYXRlUGlja2VyQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS52YWx1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1RvRG8uZHVlRGF0ZSk7XG4gICAgICAgIGluc2VydFRvZG9JblN0b3JhZ2UobmV3VG9Ebyk7XG4gICAgICAgIHJlc2V0UG9wVXAocG9wVXApO1xuICAgICAgICBhZGRUb2RvVG9EaXNwbGF5KG5ld1RvRG8pO1xuICAgIH0pO1xuXG4gICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICBjYW5jZWxCdXR0b24uY2xhc3NMaXN0LmFkZChcImNhbmNlbFwiKTtcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHBvcFVwLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICAgICAgICByZXNldFBvcFVwKHBvcFVwKTtcbiAgICB9KVxuXG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ1dHRvbnNcIik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChjcmVhdGVCdXR0b24sIGNhbmNlbEJ1dHRvbik7XG5cbiAgICBwb3BVcC5hcHBlbmQodGl0bGVDb250YWluZXIsIGRlc2NyaXB0aW9uQ29udGFpbmVyLCBkYXRlUGlja2VyQ29udGFpbmVyLCBidXR0b25Db250YWluZXIpO1xuICAgIHJldHVybiBwb3BVcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvZG9Ub0Rpc3BsYXkodG9kb1RvRGlzcGxheSkge1xuICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4gLmxpc3RcIik7XG5cbiAgICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgc3RhdHVzLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICBzdGF0dXMuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlZFwiKTtcbiAgICB9KTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdG9kb1RvRGlzcGxheS50aXRsZTtcbiAgICBjb25zdCBkZXRhaWxzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgZGV0YWlsc0J1dHRvbi50ZXh0Q29udGVudCA9IFwiRGV0YWlsc1wiO1xuICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsXCI7XG5cbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZGVsZXRlVG9kb0Zyb21TdG9yYWdlKHRvZG9Ub0Rpc3BsYXkpO1xuICAgICAgICBsaXN0LnJlbW92ZUNoaWxkKHRvZG8pO1xuICAgIH0pO1xuICAgIHRvZG8uY2xhc3NMaXN0LmFkZChcInRvZG9cIik7XG5cbiAgICBjb25zdCBpbXBvcnRhbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW1wb3J0YW50LmNoZWNrZWQgPSB0b2RvVG9EaXNwbGF5LmlzSW1wb3J0YW50O1xuICAgIGltcG9ydGFudC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgaW1wb3J0YW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICAgICAgICB0b2RvVG9EaXNwbGF5LmlzSW1wb3J0YW50ID0gaW1wb3J0YW50LmNoZWNrZWQ7XG4gICAgICAgIGNvbnNvbGUubG9nKGltcG9ydGFudC5jaGVja2VkKTtcbiAgICB9KTtcblxuICAgIHRvZG8uYXBwZW5kKHN0YXR1cywgdGl0bGUsIGRldGFpbHNCdXR0b24sIGltcG9ydGFudCwgZGVsZXRlQnV0dG9uKTtcblxuICAgIGxpc3QuYXBwZW5kQ2hpbGQodG9kbyk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0UG9wVXAocG9wVXApIHtcbiAgICBjb25zdCBpbnB1dEZpZWxkcyA9IHBvcFVwLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKTtcbiAgICAgICAgaW5wdXRGaWVsZHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQudmFsdWUgPSBcIlwiO1xuICAgICAgICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5wdXRGaWVsZCh0eXBlLCBuYW1lKSB7XG4gICAgY29uc3QgaW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBpbnB1dC5pZCA9IG5hbWU7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCB0eXBlKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIG5hbWUpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpbnB1dC5pZCk7XG4gICAgaW5wdXRDb250YWluZXIuYXBwZW5kKGxhYmVsLCBpbnB1dCk7XG5cbiAgICByZXR1cm4gaW5wdXRDb250YWluZXI7XG59XG4iLCJpbXBvcnQge21ha2VQcm9qZWN0Q3JlYXRpb25Gb3JtLCBzZXRVcERlZmF1bHRQcm9qZWN0cywgbG9hZFByb2plY3RzRnJvbVN0b3JhZ2V9IGZyb20gXCIuL3Byb2plY3RDcmVhdGlvbi5qc1wiO1xuaW1wb3J0IHttYWtlVG9kb0NyZWF0aW9uRm9ybX0gZnJvbSBcIi4vdG9kb0NyZWF0aW9uLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVUkoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbiAgICBjb25zdCBwcm9qZWN0c1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpO1xuICAgIGNvbnN0IHRvZG9Gb3JtID0gbWFrZVRvZG9DcmVhdGlvbkZvcm0oKTtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IG1ha2VQcm9qZWN0Q3JlYXRpb25Gb3JtKCk7XG4gICAgc2V0VXBEZWZhdWx0UHJvamVjdHMoKTtcbiAgICBcbiAgICBsb2FkUHJvamVjdHNGcm9tU3RvcmFnZSgpO1xuICAgIHByb2plY3RzU2VjdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0b2RvRm9ybSk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHtsb2FkVUl9IGZyb20gXCIuL3VpLmpzXCI7XG5pbXBvcnQge2NyZWF0ZVByb2plY3RBZGRCdXR0b259IGZyb20gXCIuL3Byb2plY3RDcmVhdGlvbi5qc1wiO1xuXG5mdW5jdGlvbiBsb2FkUGFnZSgpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoKTtcbiAgICBjb25zdCBzaWRlYmFyID0gY3JlYXRlU2lkZWJhcigpO1xuICAgIGNvbnN0IG1haW4gPSBjcmVhdGVNYWluQ29udGVudCgpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kKHNpZGViYXIsIG1haW4pO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgY29udGVudC5hcHBlbmQoaGVhZGVyLCBjb250YWluZXIpO1xuICAgIGxvYWRVSSgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIFxuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlRvRG9cIjtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2lkZWJhcigpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwic2lkZWJhclwiKTtcblxuICAgIGNvbnN0IGhvbWUgPSBjcmVhdGVIb21lU2VjdGlvbigpO1xuICAgIGNvbnN0IHByb2plY3RzID0gY3JlYXRlUHJvamVjdFNlY3Rpb24oKTtcblxuICAgIHNpZGViYXIuYXBwZW5kKGhvbWUsIHByb2plY3RzKTtcbiAgICByZXR1cm4gc2lkZWJhcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG9tZVNlY3Rpb24oKSB7XG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIGhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGxpc3QuY2xhc3NMaXN0LmFkZChcImxpc3RcIik7XG4gICAgY29uc3QgYWxsVGFza3MgPSBjcmVhdGVTaWRlYmFySXRlbShcIkFsbCBUYXNrc1wiKTtcbiAgICBjb25zdCB0YXNrc0ZvclRvZGF5ID0gY3JlYXRlU2lkZWJhckl0ZW0oXCJUb2RheVwiKTtcbiAgICBjb25zdCB0YXNrc0ZvcldlZWsgPSBjcmVhdGVTaWRlYmFySXRlbShcIlRoaXMgV2Vla1wiKTtcbiAgICBjb25zdCBpbXBvcnRhbnRUYXNrcyA9IGNyZWF0ZVNpZGViYXJJdGVtKFwiSW1wb3J0YW50XCIpO1xuXG4gICAgbGlzdC5hcHBlbmQoYWxsVGFza3MsIHRhc2tzRm9yVG9kYXksIHRhc2tzRm9yV2VlaywgaW1wb3J0YW50VGFza3MpO1xuICAgIGhvbWUuYXBwZW5kKGhlYWRpbmcsIGxpc3QpO1xuICAgIHJldHVybiBob21lO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0U2VjdGlvbigpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIHByb2plY3RzLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTtcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGxpc3QuY2xhc3NMaXN0LmFkZChcImxpc3RcIik7XG4gICAgY29uc3QgcHJvamVjdEFkZEJ1dHRvbiA9IGNyZWF0ZVByb2plY3RBZGRCdXR0b24oKTtcbiAgICBwcm9qZWN0cy5hcHBlbmQoaGVhZGluZywgbGlzdCwgcHJvamVjdEFkZEJ1dHRvbik7XG4gICAgcmV0dXJuIHByb2plY3RzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaWRlYmFySXRlbShuYW1lKSB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgICBpdGVtLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIHJldHVybiBpdGVtO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluQ29udGVudCgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImxpc3RcIik7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidXR0b25Db250YWluZXJcIik7XG4gICAgLy8gQWxzbyBnb3R0YSBhcHBlbmQgdGhlIGxpc3Qgb2YgdG9kb3MgZm9yIHRoZSBkYXkuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIG1haW4uYXBwZW5kKGNvbnRhaW5lciwgYnV0dG9uQ29udGFpbmVyKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICAgIHJldHVybiBtYWluO1xufVxuXG5sb2FkUGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==