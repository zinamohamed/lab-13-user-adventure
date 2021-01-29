// import functions and grab DOM elements

// get user data from our form //
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const formData = new FormData(form);

    const user = { 
        name: formData.get('name'),
        house: 'house',
        wand: 'wand',
        pet: 'pet',
        completed: {},

    };
    
    const stringyUser = JSON.stringify(user);
    localStorage.setItem('USER', stringyUser); // stringifying user and putting into local storage
        
    window.location = './map';
});
// initialize state

const audio = document.getElementById('player');

audio.play();



// set event listeners to update state and DOM