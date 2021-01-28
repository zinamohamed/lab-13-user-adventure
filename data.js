const house = {
    id: 'house',
    title: 'Sorting Hat Ceremony',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'house.gif',
    audio: '',
    description: `
    Are you afraid of what you'll hear?

    Afraid I'll speak the name you fear?
    
    Not Slytherin! Not Gryffindor!
    
    Not Hufflepuff! Not Ravenclaw!
    
    Don't worry, child, I know my job.

    Now tell me.... what's the best trait you think you've got?
  `,
    choices: [{
        id: 'Ravenclaw',
        description: 'Intelligence',
        result: `
        “It'll be....Ravenclaw!!! Where those of wit and learning, will always find their kind"`,
        house: 'Ravenclaw',
    }, {
        id: 'Hufflepuff',
        description: 'Kindess',
        result: `
        “It'll be....Hufflepuff!!! Where they are just and loyal. Those patient Hufflepuffs are true & unafraid of toil"`,
        house: 'HufflePuff',
    }, {
        id: 'Gryffindor',
        description: 'Bravery',
        result: `
        “It'll be....Gryffindor!!! Where dwell the brave at heart. Their daring nerve and chivalry set Gryffindors apart."`,
        house: 'Gryffindor',
    }, {
        id: 'Slytherin',
        description: 'Ambition',
        result: `
        “It'll be....Slytherin!!! That's where you'll make your real friends. Those cunning folks use any means to acheive their ends"`,
        house: 'Slytherin',
    }]
};

const wand = {
    id: 'wand',
    title: 'A Trip to Ollivanders Wand Shop',
    map: {
        top: '17%',
        left: '37%'
    },
    image: 'wand.gif',
    audio: '',
    description: `
      "Good morning," Mr. Ollivander says, peering down at you. "We have important work to do. Are you ready to select the type of wand that will best suit you? Now tell me my dear, which of these creatures do you most fear?"
  `,
    choices: [{
        id: 'basilisk',
        description: 'The Basilisk',
        result: `
          Curious....very curious...looks like it'll be 10 3/4 inches made with the finest holly wood...and ahh yes very fitting....crafted with a phoenix feather core.
      `,
        wand: 'phoenix feather',
    }, {
        id: 'dementor',
        description: 'Dementors',
        result: ` 
        Curious....very curious...looks like it'll be 14 inches made with the finest vine wood...and ahh yes very fitting....crafted with a dragon heartstring core.         
      `,
        wand: 'dragon heartstring',
    }, {
        id: 'Inferis',
        description: 'Inferis',
        result: `
        Curious....very curious...looks like it'll be 12 inches made with the finest ash wood...and ahh yes very fitting....crafted with a unicorn hair core.  
      `,
        wand: 'unicorn hair',
    }, {
        id: 'acromantula',
        description: 'Acromantula',
        result: `
        Curious....very curious...looks like it'll be 11 inches made with the finest hornbeam wood...and ahh yes very fitting....crafted with a horned serpent horn core. 
      `,
        wand: 'horned serpent core',
    }]
};

const pet = {
    id: 'pet',
    title: 'The Magical Menagerie',
    map: {
        top: '31%',
        left: '5%'
    },
    image: 'pet.gif',
    audio: '',
    description: `
    A pair of enormous purple toads sat gulping wetly and feasting on dead blowflies. A gigantic tortoise with a jewel-encrusted shell was glittering near the window. Poisonous orange snails were oozing slowly up the side of their glass tank, and a fat white rabbit kept changing into a silk top hat and back again with a loud popping noise. 
  `,
    choices: [{
        id: 'owl',
        description: 'Lorem Ipsum',
        result: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        pet: 'owl',

    }, {
        id: 'toad',
        description: 'Lorem Ipsum',
        result: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        pet: 'toad',
    }, {
        id: 'cat',
        description: 'Lorem Ipsum',
        result: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        pet: 'toad',
    }]
};

const quests = [
    house, 
    wand,
    pet, 
];

export default quests;