
document.querySelector('.addBtn').disabled = true;
const inputLable = document.querySelector('.addNewEvent');
const addBtn = document.querySelector('.addBtn');
const ulList = document.querySelector('.listBox');
const newPageBtn = document.querySelector('.addNewPage');
const hideBlock = document.querySelector('.hideBlock');
const cancelBtn = document.querySelector('.cancelBtn');
const startBlock = document.querySelector('.startBlock');
let liTxt;

inputLable.onkeyup = function () {
  if (!inputLable.value.trim()) {
    document.querySelector('.addBtn').disabled = true;
  } else {
    document.querySelector('.addBtn').disabled = false;
  }
};
addBtn.onclick = () => {
  addList(inputLable.value.trim());
  startBlock.style.display = 'block';
  hideBlock.style.display = 'none';
};
newPageBtn.onclick = () => {
  hideBlock.style.display = 'block';
  startBlock.style.display = 'none';// put into variable
};
cancelBtn.onclick = () => {
  hideBlock.style.display = 'none';
  startBlock.style.display = 'block';
};
function addList () {
  const li = document.createElement('li');
  li.className = 'listBox-item';
  liTxt = document.createTextNode(inputLable.value);
  liTxt.className = 'txtStyle';

  const todoImg = document.createElement('img');
  todoImg.setAttribute('src', './assets/img/todo-s.png');

  const checkBtn = document.createElement('button');
  checkBtn.className = 'checkIconBtn';

  const deleteIcon = document.createElement('img');
  deleteIcon.setAttribute('src', './assets/img/remove-s.jpg');

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'deleteIconBtn';

  checkBtn.appendChild(todoImg);
  deleteBtn.appendChild(deleteIcon);
  li.appendChild(checkBtn);
  li.appendChild(liTxt);
  li.appendChild(deleteBtn);
  ulList.appendChild(li);

  checkBtn.onclick = () => {
    todoImg.src = './assets/img/done-s.png';
    li.style.backgroundColor = 'grey';
    swapLi(li, ulList);
  };
  deleteBtn.onclick = () => {
    li.remove();
    inputLable.disabled = false;
    document.querySelector('.addBtn').disabled = false;
  };

  document.querySelector('.addNewEvent').value = '';
  document.querySelector('.addBtn').disabled = true;
}
const swapLi = (item, list) => {
  item.remove();
  list.appendChild(item);
}
