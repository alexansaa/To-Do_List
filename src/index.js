import _ from 'lodash';
import activities from './activities.js'
import './style.css';
import render from './renderActivitie.js'

activities.loadData();


render(activities.activities);



const refreshBtn = document.querySelector('#refreshImg');
const enterBtn = document.querySelector('#enterImg');
refreshBtn.classList.add('refreshIcon');
enterBtn.classList.add('enterIcon');

const myContainerChilds = document.querySelector("#mainContainer").children;
for(let i = 0; i < myContainerChilds.length ; i++){
  myContainerChilds[i].classList.add('element');
  if(i == myContainerChilds.length - 1) {
    myContainerChilds[i].classList.add('fullShadow');
  } else {
    myContainerChilds[i].classList.add('rightShadow');
  }
}
