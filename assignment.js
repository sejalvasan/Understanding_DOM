const taskEl1 = document.querySelector('li');
const taskEl2 = document.getElementById('task-1');

taskEl2.style.color='white';
taskEl1.style.backgroundColor ='black';

const docTitle1 = document.querySelector('title');
docTitle1.textContent = 'Assignment - Solved!';

const docHead = document.head;
const docTitle2 = document.head.querySelector('title');

docTitle2.textContent='Assignment - Solved!';

const h1 = document.getElememtsByTagName('h1');
h1[0].textContent = 'Assignment - Solved!';