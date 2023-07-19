import Activities from './activities.js';
import render from './renderActivitie.js';

const addBtn = document.querySelector('#addActivity');
const actDesc = document.querySelector('#descActivity');
const deleteDoneBtn = document.querySelector('#deleteDone');

export default () => {
  addBtn.addEventListener('click', () => {
    if (actDesc.value !== '' || actDesc.value.length !== 0){
      Activities.addNewActivitie(actDesc.value, false);
      render(Activities.activities);
      actDesc.value = '';
    }
  });

  deleteDoneBtn.addEventListener('click', () => {
    Activities.removeDone();
    render(Activities.activities);
  });
}