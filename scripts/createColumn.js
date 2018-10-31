// Создание колонки по родительскому цвету
function createColumn(color) {
    const column = document.createElement('div');
    column.className = 'column';
    let fragment = document.createDocumentFragment();
    let currColor = palette(color);
    for( i=0; i<7; i++ ) {
      const COLOR = currColor();
      let brick = new Brick(COLOR);
      fragment.appendChild(brick.element);
    }
    column.appendChild(fragment);
    return column;
};