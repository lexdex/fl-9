const MAX_LIST = 10;
let counter = 0;
document.querySelector('.addBtn').disabled = true;
const inputLable = document.querySelector('.addNewEvent');
const addBtn = document.querySelector('.addBtn');
const ulList = document.querySelector('.listBox');
let message = document.querySelector('.maxList');
let dragging = null;
let liTxt, checkBoxTxt, delTxt;

inputLable.onkeyup = function () {
  if (!inputLable.value.trim()) {
    document.querySelector('.addBtn').disabled = true;
  } else {
    document.querySelector('.addBtn').disabled = false;
  }
};
addBtn.onclick = () => {
  addList(inputLable.value.trim());
};
function addList () {
  const li = document.createElement('li');
  li.className = 'listBox-item';
  li.setAttribute('draggable', true);
  liTxt = document.createTextNode(inputLable.value);
  liTxt.className = 'txtStyle';

  const checkIcon = document.createElement('i');
  checkBoxTxt = document.createTextNode('check_box_outline_blank');
  checkIcon.className = 'material-icons';
  checkIcon.appendChild(checkBoxTxt);

  const checkBtn = document.createElement('button');
  checkBtn.className = 'checkIconBtn';

  const deleteIcon = document.createElement('i');
  delTxt = document.createTextNode('delete');
  deleteIcon.className = 'material-icons';
  deleteIcon.appendChild(delTxt);

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'deleteIconBtn';

  checkBtn.appendChild(checkIcon);
  deleteBtn.appendChild(deleteIcon);
  li.appendChild(checkBtn);
  li.appendChild(liTxt);
  li.appendChild(deleteBtn);
  ulList.appendChild(li);

  checkBtn.onclick = () => {
    checkIcon.textContent = 'check_box';
  };
  deleteBtn.onclick = () => {
    li.remove();
    counter--;
    inputLable.disabled = false;
    document.querySelector('.addBtn').disabled = false;
    message.style.display = 'none';
  };
  if (++counter >= MAX_LIST) {
    inputLable.disabled = true;
    document.querySelector('.addBtn').disabled = true;
    message.style.display = 'block';
  }

  document.querySelector('.addNewEvent').value = '';
  document.querySelector('.addBtn').disabled = true;
}

ulList.addEventListener('dragstart', function (event) {
  dragging = event.target;
  event.target.style.cursor = 'move';
}
);

ulList.addEventListener('dragover', function (event) {
  if (event.target.className === 'listBox-item') {
    event.preventDefault();
    event.target.style.border = '1px dashed #000';
    event.target.style.transform = 'translate(5px, 5px)';
  }
});

ulList.addEventListener('dragleave', function (event) {
  event.target.style.transform = '';
  event.target.style.border = '';
});

ulList.addEventListener('drop', function (event) {
  if (event.target.className === 'listBox-item') {
    event.preventDefault();
    event.target.style.transform = '';
    event.target.style.border = '';
    ulList.insertBefore(dragging, event.target);
  }
});
