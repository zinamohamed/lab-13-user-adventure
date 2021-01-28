// import functions and grab DOM elements

// get user data from our form //
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const formData = new FormData(form);

    const user = { 
        name: formData.get('name'),
        icon: formData.get('icon'),
        house: '',
        wand: '',
        pet: '',
        completed: {},

    };
    
    const stringyUser = JSON.stringify(user);
    localStorage.setItem('USER', stringyUser); // stringifying user and putting into local storage
        
    window.location = './map';
});
// initialize state



// set event listeners to update state and DOM