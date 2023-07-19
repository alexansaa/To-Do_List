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

    const chkBxCtn = document.createElement('div');
    const chkBx = document.createElement('input');
    chkBx.type = 'checkbox';
    chkBx.checked = act.completed;
    chkBxCtn.appendChild(chkBx);
    actElmnt.appendChild(chkBxCtn);

    const txtCtn = document.createElement('div');
    txtCtn.classList.add('px-2');
    txtCtn.classList.add('w-100');
    txtCtn.textContent = act.description;
    if(act.completed) {
      txtCtn.classList.add('text-decoration-line-through');;
    }
    actElmnt.appendChild(txtCtn);

    const imgCtn = document.createElement('div');
    const myImg = document.createElement('img');
    myImg.classList.add('verticalDots');
    imgCtn.appendChild(myImg);
    actElmnt.appendChild(imgCtn);

    activCtn.appendChild(actElmnt);
  });
};