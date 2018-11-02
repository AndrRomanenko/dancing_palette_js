const palette = require('./paletteUtils').palette;
const Brick = require('./Brick');
const TABLE_HEIGHT = require('../constants').TABLE_HEIGHT;



// Creating a column by parent color
module.exports = function(color) {
    const column = document.createElement('div');
    column.className = 'column';
    const fragment = document.createDocumentFragment();
    const currColor = palette(color);
    for(i=0; i<TABLE_HEIGHT; i++) {
      const COLOR = currColor();
      let brick = new Brick(COLOR);
      fragment.appendChild(brick.element);
    }
    column.appendChild(fragment);
    return column;
};