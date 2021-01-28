import { findById } from '../utils.js';
import questData from '../data.js';

const h1 = document.querySelector('h1');
const img = document.querySelector('section img');
const p = document.querySelector('p');
const form = document.querySelector('form');

const params = new URLSearchParams(window.location.search);

const questId = params.get('id');

const quest = findById(questData, questId);

h1.textContent = quest.title;
p.textContent = quest.description;
img.src = `../assets/${quest.image}`;

for (let choice of quest.choices) {
    const radio = document.createElement('input');
    const label = document.createElement('label');
    const span = document.createElement('span');

    span.textContent = choice.description;


    radio.type = 'radio';
    radio.value = choice.id;
    radio.name = 'choices';
    label.append(span, radio);

    form.append(label);
}

const button = document.createElement('button');

button.textContent = 'Submit';

form.appendChild(button);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    
    const selectionId = formData.get('choices');
    const choice = findById(quest.choices, selectionId);
    const user = JSON.parse(localStorage.getItem('USER'));

   

    user.house = choice.house;
    user.pet = choice.pet;
    user.wand = choice.wand;
    // use the selectionId to set the property dynamically //
    user.completed[questId] = true;

    localStorage.setItem('USER', JSON.stringify(user));

    window.location = '../map';

    
});


