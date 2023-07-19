"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["activities"],{

/***/ "./src/activities.js":
/*!***************************!*\
  !*** ./src/activities.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Activities)
/* harmony export */ });
class Activities {
  static activities = [];

  constructor(description, completed) {
    let newIndex = 0;
    if (Activities.activities.length === 0) {
      newIndex = 1;
    } else {
      newIndex = Activities.activities[Activities.activities.length - 1].index + 1;
    }
    this.description = description;
    this.completed = completed;
    this.index = newIndex;
  }

  static addNewActivitie(description, completed) {
    const NewActivitie = new Activities(description, completed);
    Activities.activities.push(NewActivitie);
    Activities.updateData();
  }

  static updateActivitie(description, completed, index) {
    const targetObj = Activities.activities.find((obj) => obj.index === parseInt(index, 10));
    targetObj.description = description;
    targetObj.completed = completed;
    Activities.updateData();
  }

  static removeActivite(index) {
    Activities.activities = Activities.activities.filter((item) => item.index !== parseInt(index));
    Activities.updateData();
  }

  static removeDone() {
    console.log('done removing');
    Activities.activities = Activities.activities.filter((item) => item.completed === false);
    Activities.updateData();
  }

  static updateData() {
    localStorage.setItem('activities', JSON.stringify(Activities.activities));
  }

  static loadData() {
    Activities.activities = JSON.parse(localStorage.getItem('activities'));
    if (Activities.activities === null || Activities.activities.length === 0) {
      Activities.activities = [];
    }
    Activities.updateData();
  }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/activities.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdGllcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG9fbGlzdC8uL3NyYy9hY3Rpdml0aWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGl2aXRpZXMge1xyXG4gIHN0YXRpYyBhY3Rpdml0aWVzID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQpIHtcclxuICAgIGxldCBuZXdJbmRleCA9IDA7XHJcbiAgICBpZiAoQWN0aXZpdGllcy5hY3Rpdml0aWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBuZXdJbmRleCA9IDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXdJbmRleCA9IEFjdGl2aXRpZXMuYWN0aXZpdGllc1tBY3Rpdml0aWVzLmFjdGl2aXRpZXMubGVuZ3RoIC0gMV0uaW5kZXggKyAxO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XHJcbiAgICB0aGlzLmluZGV4ID0gbmV3SW5kZXg7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYWRkTmV3QWN0aXZpdGllKGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQpIHtcclxuICAgIGNvbnN0IE5ld0FjdGl2aXRpZSA9IG5ldyBBY3Rpdml0aWVzKGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQpO1xyXG4gICAgQWN0aXZpdGllcy5hY3Rpdml0aWVzLnB1c2goTmV3QWN0aXZpdGllKTtcclxuICAgIEFjdGl2aXRpZXMudXBkYXRlRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHVwZGF0ZUFjdGl2aXRpZShkZXNjcmlwdGlvbiwgY29tcGxldGVkLCBpbmRleCkge1xyXG4gICAgY29uc3QgdGFyZ2V0T2JqID0gQWN0aXZpdGllcy5hY3Rpdml0aWVzLmZpbmQoKG9iaikgPT4gb2JqLmluZGV4ID09PSBwYXJzZUludChpbmRleCwgMTApKTtcclxuICAgIHRhcmdldE9iai5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGFyZ2V0T2JqLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcclxuICAgIEFjdGl2aXRpZXMudXBkYXRlRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlbW92ZUFjdGl2aXRlKGluZGV4KSB7XHJcbiAgICBBY3Rpdml0aWVzLmFjdGl2aXRpZXMgPSBBY3Rpdml0aWVzLmFjdGl2aXRpZXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmluZGV4ICE9PSBwYXJzZUludChpbmRleCkpO1xyXG4gICAgQWN0aXZpdGllcy51cGRhdGVEYXRhKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVtb3ZlRG9uZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdkb25lIHJlbW92aW5nJyk7XHJcbiAgICBBY3Rpdml0aWVzLmFjdGl2aXRpZXMgPSBBY3Rpdml0aWVzLmFjdGl2aXRpZXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmNvbXBsZXRlZCA9PT0gZmFsc2UpO1xyXG4gICAgQWN0aXZpdGllcy51cGRhdGVEYXRhKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdXBkYXRlRGF0YSgpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3Rpdml0aWVzJywgSlNPTi5zdHJpbmdpZnkoQWN0aXZpdGllcy5hY3Rpdml0aWVzKSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgbG9hZERhdGEoKSB7XHJcbiAgICBBY3Rpdml0aWVzLmFjdGl2aXRpZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY3Rpdml0aWVzJykpO1xyXG4gICAgaWYgKEFjdGl2aXRpZXMuYWN0aXZpdGllcyA9PT0gbnVsbCB8fCBBY3Rpdml0aWVzLmFjdGl2aXRpZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIEFjdGl2aXRpZXMuYWN0aXZpdGllcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgQWN0aXZpdGllcy51cGRhdGVEYXRhKCk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==