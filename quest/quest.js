import { findById } from '../utils.js';
import questData from '../data.js';

const h1 = document.querySelector('h1');
const img = document.querySelector('section img');
const p = document.querySelector('p');
const form = document.querySelector('form');
var body = document.getElementsByTagName('body')[0];
const questContainer = document.getElementById('quest-section');
const resultsContainer = document.getElementById('results-section');
const questImage = document.getElementById('results-img');

resultsContainer.style.display = 'none';




const params = new URLSearchParams(window.location.search);

const questId = params.get('id');

const quest = findById(questData, questId);

h1.textContent = quest.title;
p.textContent = quest.description;
img.src = `../assets/${quest.image}`;
body.style.backgroundImage = `url(../assets/${quest.background})`;
questContainer.style.backgroundColor = `${quest.color}`;
resultsContainer.style.backgroundColor = `${quest.color}`;


for (let choice of quest.choices) {
    const radio = document.createElement('input');
    const label = document.createElement('label');
    const span = document.createElement('a');

    span.textContent = choice.description;


    radio.type = 'radio';
    radio.value = choice.id;
    radio.name = 'choices';
    label.append(span, radio);

    form.append(label);
}

const button = document.createElement('button');
const newAdventure = document.getElementById('adventure');
const resultsSpan = document.getElementById('results-span');



button.textContent = 'Submit';

form.appendChild(button, newAdventure);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    
    const selectionId = formData.get('choices');
    const choice = findById(quest.choices, selectionId);
    const user = JSON.parse(localStorage.getItem('USER'));

    questImage.src = `../assets/${choice.render}`;

    user.house = choice.house;
    user.pet = choice.pet;
    user.wand = choice.wand;
    resultsSpan.textContent = choice.result;
    // use the selectionId to set the property dynamically //
    user.completed[questId] = true;
    localStorage.setItem('USER', JSON.stringify(user));

    
    
    resultsContainer.style.display = 'flex';
    questContainer.style.display = 'none';

    
    
});

newAdventure.addEventListener('click', () => {
    window.location = '../map';
});






