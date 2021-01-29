


const resultsDisplay = document.getElementById('story-display');

const user = JSON.parse(localStorage.getItem('USER'));

const story = `Wonderful job! ${user.name}. With your ${user.wand} you can defeat any creature that come your way.Remember to feed your ${user.pet} so that they don't pick at your History of Magic book. Now off you go, and make ${user.house} house proud!`;

resultsDisplay.textContent = story;

