import questData from '../data.js';


const ul = document.querySelector('ul');

for (let quest of questData) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    
    a.textContent = quest.title;
    a.href = `../quest/?id=${quest.id}`;
    li.append(a);
    ul.append(li);
}


