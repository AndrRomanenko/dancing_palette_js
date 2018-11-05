const { shaderColor } = require('./paletteUtils');
const Brick = require('./Brick');
const { TABLE_HEIGHT } = require('../constants');


// Creating a column by parent color
function createColumn(color) {
  const column = document.createElement('div');
  const fragment = document.createDocumentFragment();
  const currentColor = palette(color);
  column.className = 'column';
  
  for (let i = 0; i < TABLE_HEIGHT; i++) {
    const color = currentColor();
    const brick = new Brick(color);
    fragment.appendChild(brick.element);
  }

  column.appendChild(fragment);
  return column;
}

// Palette generation during iterations
function palette(color){
  let currentColor = color;
  return function() {
      const tempColor = currentColor;
      currentColor = shaderColor(currentColor);
      return tempColor;
  }
};


module.exports = createColumn;