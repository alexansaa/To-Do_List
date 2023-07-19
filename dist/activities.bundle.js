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
  }
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/activities.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdGllcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvX2xpc3QvLi9zcmMvYWN0aXZpdGllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBhY3Rpdml0aWVzIHtcclxuICBzdGF0aWMgYWN0aXZpdGllcyA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbixjb21wbGV0ZWQpIHtcclxuICAgIGNvbnN0IG5ld0luZGV4ID0gYWN0aXZpdGllcy5hY3Rpdml0aWVzW2FjdGl2aXRpZXMuYWN0aXZpdGllcy5sZW5ndGggLSAxXS5pbmRleDtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xyXG4gICAgdGhpcy5pbmRleCA9IG5ld0luZGV4O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNvbWVBY3Rpdml0aWVzID0gW1xyXG4gICAge1xyXG4gICAgICBkZXNjcmlwdGlvbjogXCJzb21lIGRlc2NyaXB0aW9uXCIsXHJcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgIGluZGV4OiAxLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZGVzY3JpcHRpb246IFwic29tZSBvdGhlciBkZXNjcmlwdGlvblwiLFxyXG4gICAgICBjb21wbGV0ZWQ6IHRydWUsXHJcbiAgICAgIGluZGV4OiAyLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZGVzY3JpcHRpb246IFwiYSBuZXcgZGVzY3JpcHRpb25cIixcclxuICAgICAgY29tcGxldGVkOiB0cnVlLFxyXG4gICAgICBpbmRleDogMyxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgc3RhdGljIGFkZE5ld0FjdGl2aXRpZShkZXNjcmlwdGlvbixjb21wbGV0ZWQpIHtcclxuICAgIGNvbnN0IE5ld0FjdGl2aXRpZSA9IG5ldyBhY3Rpdml0aWVzKGRlc2NyaXB0aW9uLGNvbXBsZXRlZCk7XHJcbiAgICBhY3Rpdml0aWVzLmFjdGl2aXRpZXMucHVzaChOZXdBY3Rpdml0aWUpO1xyXG4gICAgYWN0aXZpdGllcy51cGRhdGVEYXRhKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVtb3ZlQWN0aXZpdGUoaW5kZXgpIHtcclxuICAgIGFjdGl2aXRpZXMuYWN0aXZpdGllcyA9IGFjdGl2aXRpZXMuYWN0aXZpdGllcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaW5kZXggIT09IGluZGV4KTtcclxuICAgIGFjdGl2aXRpZXMudXBkYXRlRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHVwZGF0ZURhdGEoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWN0aXZpdGllcycsIEpTT04uc3RyaW5naWZ5KGFjdGl2aXRpZXMuYWN0aXZpdGllcykpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGxvYWREYXRhKCkge1xyXG4gICAgYWN0aXZpdGllcy5hY3Rpdml0aWVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWN0aXZpdGllcycpKTtcclxuICAgIGlmKGFjdGl2aXRpZXMuYWN0aXZpdGllcyA9PT0gbnVsbCB8fCBhY3Rpdml0aWVzLmFjdGl2aXRpZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGFjdGl2aXRpZXMuYWN0aXZpdGllcyAgPSBhY3Rpdml0aWVzLnNvbWVBY3Rpdml0aWVzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9