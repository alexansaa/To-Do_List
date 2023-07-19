"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["activities"],{

/***/ "./src/activities.js":
/*!***************************!*\
  !*** ./src/activities.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ activities)
/* harmony export */ });
class activities {
  static activities = [];

  constructor(description,completed) {
    const newIndex = activities.activities[activities.activities.length - 1].index;
    this.description = description;
    this.completed = completed;
    this.index = newIndex;
  }

  static someActivities = [
    {
      description: "some description",
      completed: false,
      index: 1,
    },
    {
      description: "some other description",
      completed: true,
      index: 2,
    },
    {
      description: "a new description",
      completed: true,
      index: 3,
    },
  ];

  static addNewActivitie(description,completed) {
    const NewActivitie = new activities(description,completed);
    activities.activities.push(NewActivitie);
    activities.updateData();
  }

  static updateActivitie(description, completed, index) {
    console.log(description + " " + completed + " " + index);
    const targetObj = activities.activities.find((obj) => {
      console.log(obj);
      if(obj.index === parseInt(index)) {
        return obj;
      }
    });
    targetObj.description = description;
    targetObj.completed = completed;
    activities.updateData();
  }

  static removeActivite(index) {
    activities.activities = activities.activities.filter((item) => item.index !== index);
    activities.updateData();
  }

  static updateData() {
    localStorage.setItem('activities', JSON.stringify(activities.activities));
  }

  static loadData() {
    activities.activities = JSON.parse(localStorage.getItem('activities'));
    if(activities.activities === null || activities.activities.length === 0) {
      activities.activities  = activities.someActivities;
    }
    activities.updateData();
  }
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/activities.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdGllcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvX2xpc3QvLi9zcmMvYWN0aXZpdGllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBhY3Rpdml0aWVzIHtcclxuICBzdGF0aWMgYWN0aXZpdGllcyA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbixjb21wbGV0ZWQpIHtcclxuICAgIGNvbnN0IG5ld0luZGV4ID0gYWN0aXZpdGllcy5hY3Rpdml0aWVzW2FjdGl2aXRpZXMuYWN0aXZpdGllcy5sZW5ndGggLSAxXS5pbmRleDtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xyXG4gICAgdGhpcy5pbmRleCA9IG5ld0luZGV4O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNvbWVBY3Rpdml0aWVzID0gW1xyXG4gICAge1xyXG4gICAgICBkZXNjcmlwdGlvbjogXCJzb21lIGRlc2NyaXB0aW9uXCIsXHJcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgIGluZGV4OiAxLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZGVzY3JpcHRpb246IFwic29tZSBvdGhlciBkZXNjcmlwdGlvblwiLFxyXG4gICAgICBjb21wbGV0ZWQ6IHRydWUsXHJcbiAgICAgIGluZGV4OiAyLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZGVzY3JpcHRpb246IFwiYSBuZXcgZGVzY3JpcHRpb25cIixcclxuICAgICAgY29tcGxldGVkOiB0cnVlLFxyXG4gICAgICBpbmRleDogMyxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgc3RhdGljIGFkZE5ld0FjdGl2aXRpZShkZXNjcmlwdGlvbixjb21wbGV0ZWQpIHtcclxuICAgIGNvbnN0IE5ld0FjdGl2aXRpZSA9IG5ldyBhY3Rpdml0aWVzKGRlc2NyaXB0aW9uLGNvbXBsZXRlZCk7XHJcbiAgICBhY3Rpdml0aWVzLmFjdGl2aXRpZXMucHVzaChOZXdBY3Rpdml0aWUpO1xyXG4gICAgYWN0aXZpdGllcy51cGRhdGVEYXRhKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdXBkYXRlQWN0aXZpdGllKGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQsIGluZGV4KSB7XHJcbiAgICBjb25zb2xlLmxvZyhkZXNjcmlwdGlvbiArIFwiIFwiICsgY29tcGxldGVkICsgXCIgXCIgKyBpbmRleCk7XHJcbiAgICBjb25zdCB0YXJnZXRPYmogPSBhY3Rpdml0aWVzLmFjdGl2aXRpZXMuZmluZCgob2JqKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKG9iaik7XHJcbiAgICAgIGlmKG9iai5pbmRleCA9PT0gcGFyc2VJbnQoaW5kZXgpKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0YXJnZXRPYmouZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRhcmdldE9iai5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XHJcbiAgICBhY3Rpdml0aWVzLnVwZGF0ZURhdGEoKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZW1vdmVBY3Rpdml0ZShpbmRleCkge1xyXG4gICAgYWN0aXZpdGllcy5hY3Rpdml0aWVzID0gYWN0aXZpdGllcy5hY3Rpdml0aWVzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pbmRleCAhPT0gaW5kZXgpO1xyXG4gICAgYWN0aXZpdGllcy51cGRhdGVEYXRhKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgdXBkYXRlRGF0YSgpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3Rpdml0aWVzJywgSlNPTi5zdHJpbmdpZnkoYWN0aXZpdGllcy5hY3Rpdml0aWVzKSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgbG9hZERhdGEoKSB7XHJcbiAgICBhY3Rpdml0aWVzLmFjdGl2aXRpZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY3Rpdml0aWVzJykpO1xyXG4gICAgaWYoYWN0aXZpdGllcy5hY3Rpdml0aWVzID09PSBudWxsIHx8IGFjdGl2aXRpZXMuYWN0aXZpdGllcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgYWN0aXZpdGllcy5hY3Rpdml0aWVzICA9IGFjdGl2aXRpZXMuc29tZUFjdGl2aXRpZXM7XHJcbiAgICB9XHJcbiAgICBhY3Rpdml0aWVzLnVwZGF0ZURhdGEoKTtcclxuICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==