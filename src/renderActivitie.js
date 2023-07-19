import activities from "./activities.js";

const activCtn = document.querySelector('#activitiesContainer');

export default (JsonObjectsArray) => {
  activCtn.innerHTML = '';
  JsonObjectsArray.forEach((act) => {
    const actElmnt = document.createElement('div');
    actElmnt.classList.add('px-3');
    actElmnt.classList.add('element');
    actElmnt.classList.add('d-flex');
    actElmnt.classList.add('border');
    actElmnt.classList.add('align-items-center');
    actElmnt.classList.add('justify-content-between');

    const chkBx = document.createElement('input');
    chkBx.type = 'checkbox';
    chkBx.id = act.index;
    chkBx.checked = act.completed;
    actElmnt.appendChild(chkBx);

    const chkLabel = document.createElement('label');
    chkLabel.classList.add('w-100');
    chkLabel.classList.add('px-2');
    chkLabel.id = 'lb' + act.index;
    chkLabel.textContent = act.description;
    chkLabel.htmlFor = act.index;
    actElmnt.appendChild(chkLabel);

    const myImg = document.createElement('img');
    myImg.classList.add('verticalDots');
    actElmnt.appendChild(myImg);

    activCtn.appendChild(actElmnt);

    chkBx.addEventListener('change',(e) => {
      const myLabel = document.querySelector('#'+'lb'+e.target.id);
      console.log("estado" + e.target.id + ": " + e.target.checked);
      activities.updateActivitie(myLabel.textContent, e.target.checked, e.target.id);
    });
  });
};