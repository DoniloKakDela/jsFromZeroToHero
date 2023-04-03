const container = document.getElementById('container');
  let taskCount = 1;
  
  const addTaskBtn = document.getElementById('addTask');
  addTaskBtn.addEventListener('click', addTask);
  
  function addTask() { 
    const task = document.createElement('div');
    const span = document.createElement('span');
    const button = document.createElement('button');
    const buttonCopy = document.createElement('button');
    buttonCopy.textContent= 'copy';
    buttonCopy.classList.add('copy');

    const buttonRe = document.createElement('button');
    buttonRe.textContent= 'move';   
    buttonRe.classList.add('move');

    const input = document.createElement('input');
    task.classList.add('task');
    input.setAttribute('type', 'checkbox');
    span.innerText = `Task ${taskCount}`;
    button.innerText = 'Delete';
    
    task.append(span, button, buttonCopy, buttonRe, input);   
    container.append(task);
    taskCount += 1;
    addListenerCopyBtn() ;
  }

let btns = document.querySelectorAll('.copy');
const cont2 = document.getElementById('contaier2');
console.log(getComputedStyle(cont2).getPropertyValue('background-color'));

let countBtn;

function addListenerCopyBtn() {
  btns = document.querySelectorAll('.copy');

  btns.forEach((btn)=> {
    btn.addEventListener('click', ()=> {
      let task =  btn.closest('.task');
      let copyTask =  task.cloneNode(true);
      cont2.append(copyTask);
    })
  })
}
function addListenerMoveBtn() {
  btns = document.querySelectorAll('.move');
  btns.forEach((btn)=> {
    btn.addEventListener('click', ()=> {   
    cont2.append(btn.closest('.task'));
    })
  })
}
// addListenerCopyBtn();
// addListenerMoveBtn();

const task2 = document.getElementById('task2');
task2.addEventListener('click', (e) => {
    e.target.classList.toggle('active');
});

function copyTask (e) {
    if (e.target.className === 'copy') {
      let task = e.target.closest('.task');
      let copyTask = task.cloneNode(true);
      cont2.append(copyTask);
    }
}

container.addEventListener('click', copyTask);


const coCopy = document.getElementById('no-copy');
coCopy.addEventListener('click', () => {
    container.removeEventListener('click', copyTask)
});

const alertBtn = document.getElementById('alert');
alertBtn.onclick = () => {
    alert('Alert from js');
}

alertBtn.onclick = () => {
    alert('Alert from js 2');
}

alertBtn.addEventListener('click', () => {
    alert('Alert from js 3');
})

const myForm = document.forms.myForm;
myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(myForm.firstName.value);
    myForm.reset();
})

const restBtn = document.querySelector('.reset');
restBtnn.addEventListener('click', () => {
    myForm.reset()
})

myForm.firstName.onmousedown = () => false;
myForm.firstName.onfocus = () => console.log('hello1');