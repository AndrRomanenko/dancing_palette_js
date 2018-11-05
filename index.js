const getColors = require('./scripts/getColors').getColors;
const createColumn = require('./scripts/createColumn');
const partyStart = require('./scripts/partyUtils').partyStart;

// Gradient Table Container
const container = document.getElementsByClassName('container')[0];

// Received an array of colors, create and assemble blocks
getColors()
.then(colorArr => {
    const fragment = document.createDocumentFragment();
    colorArr.forEach((item) => {
    const column = createColumn("#" + item);
    fragment.appendChild(column);
  })
  container.appendChild(fragment);
  partyStart();
})