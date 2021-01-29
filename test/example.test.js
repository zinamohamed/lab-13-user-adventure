// IMPORT MODULES under test here:

// import { example } from '../example.js';

test('formData should take in user data input and store to local storage', (expect) => {
    const form = new FormData();
    form.append('name', 'zina');
    

    const actual = JSON.parse(localStorage.getItem('USER'));

    const expected = {
        name: 'zina',
        house: 'house',
        wand: 'wand',
        pet: 'pet',
        completed: {},
    };

    expect.deepEqual(actual, expected);

});
