const wand = {
    id: 'wand',
    title: 'A Trip to Ollivanders Wand Shop',
    color: 'rgba(20,12,94, 0.5)',
    map: {
        top: '17%',
        left: '37%'
    },
    image: 'wand.gif',
    background: 'alley.jpg',
    audio: '',
    description: `
      "Good morning," Mr. Ollivander says, peering down at you. "We have important work to do. Are you ready to select the type of wand that will best suit you? Now tell me my dear, which of these creatures do you most fear?"
  `,
    choices: [{
        id: 'basilisk',
        description: 'The Basilisk',
        render: '1.png',
        result: `
          Curious....very curious...looks like it'll be 10 3/4 inch wand made with the finest holly wood...and ahh yes very fitting....crafted with a phoenix feather core.
      `,
        wand: 'phoenix feather',
    }, {
        id: 'dementor',
        description: 'Dementors',
        render: '2.png',
        result: ` 
        Curious....very curious...looks like it'll be 14 inch wand made with the finest vine wood...and ahh yes very fitting....crafted with a dragon heartstring core.         
      `,
        wand: 'dragon heartstring',
    }, {
        id: 'Inferis',
        description: 'Inferis',
        render: '3.png',
        result: `
        Curious....very curious...looks like it'll be 12 inch wand made with the finest ash wood...and ahh yes very fitting....crafted with a unicorn hair core.  
      `,
        wand: 'unicorn hair',
    }, {
        id: 'acromantula',
        description: 'Acromantula',
        render: '4.png',
        result: `
        Curious....very curious...looks like it'll be 11 inch wand made with the finest hornbeam wood...and ahh yes very fitting....crafted with a horned serpent horn core. 
      `,
        wand: 'horned serpent core',
    }]
};

const pet = {
    id: 'pet',
    color: 'rgba(227,160,60, 0.5)',
    title: 'A Trip to The Magical Menagerie',
    map: {
        top: '31%',
        left: '5%'
    },
    image: 'pet.gif',
    background: 'magical.jpg',
    audio: '',
    description: `
    A pair of enormous purple toads sat gulping wetly and feasting on dead blowflies. It's time to pick a pet, as a matter of fact, it's time to let a pet pick you!
  `,
    choices: [{
        id: 'toad',
        description: 'Peer at the poisonous orange snails.',
        render: 'pet3.png',
        result: 'After looking closely at the snails, you notice that one of them is actually a toad! You decide to keep it and name it Trevor.',
        pet: 'toad',

    }, {
        id: 'owl',
        description: 'Pick up a fat white rabbit.',
        render: 'pet2.png',
        result: 'Before you know it that fat rabbit transforms into a beautiful snowy owl. You decide to keep it to help you send letters while your away.',
        pet: 'owl',
    }, {
        id: 'cat',
        description: 'Open a vast cage of sleek black rats.',
        render: 'pet1.png',
        result: 'At the very back of the cage you notice a fluffy orange cat that looks too full for its own good. You decide to keep it and give it a new home at Hogwarts.',
        pet: 'cat',
    }]
};

const house = {
    id: 'house',
    color: 'rgba(210,105,30, 0.5)',
    title: ' Your Sorting Hat Ceremony',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'hat.gif',
    background: 'sorting.jpg',
    audio: '',
    description: `
    Are you afraid of what you'll hear?

    Afraid I'll speak the name you fear?
    
    Not Slytherin! Not Gryffindor!
    
    Not Hufflepuff! Not Ravenclaw!
    
    Don't worry, child, I know what I ought to do.

    Now tell me.... which of these four is most important to you?
  `,
    choices: [{
        id: 'Ravenclaw',
        description: 'Knowledge',
        render: 'rave.png',
        result: `
        “It'll be....Ravenclaw!!! Where those of wit and learning, will always find their kind"`,
        house: 'Ravenclaw',
    }, {
        id: 'Hufflepuff',
        description: 'Kindess',
        render: 'huff.png',
        result: `
        “It'll be....Hufflepuff!!! Where they are just and loyal. Those patient Hufflepuffs are true & unafraid of toil"`,
        house: 'HufflePuff',
    }, {
        id: 'Gryffindor',
        description: 'Faith',
        render: 'gryf.png',
        result: `
        “It'll be....Gryffindor!!! Where dwell the brave at heart. Their daring nerve and chivalry set Gryffindors apart."`,
        house: 'Gryffindor',
    }, {
        id: 'Slytherin',
        description: 'Ambition',
        render: 'slyth.png',
        result: `
        “It'll be....Slytherin!!! That's where you'll make your real friends. Those cunning folks use any means to acheive their ends"`,
        house: 'Slytherin',
    }]
};

const quests = [
    wand, 
    pet,
    house, 
];

export default quests;