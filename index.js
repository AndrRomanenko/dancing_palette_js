getColors = require('./scripts/getColors');
createColumn = require('./scripts/createColumn');
goDance = require('./scripts/partyMethods').goDance;
addAnimClass = require('./scripts/partyMethods').addAnimClass;
partyStart = require('./scripts/partyMethods').partyStart;
checkColor = require('./scripts/paletteMethods').checkColor;
palette = require('./scripts/paletteMethods').palette;
shaderColor = require('./scripts/paletteMethods').shaderColor;
Brick = require('./scripts/Brick');
PopUpMessage = require('./scripts/PopUpMessage');


// Контейнер для PopUp сообщений
const popUpContainer = document.createElement('div');
popUpContainer.className = 'popUpContainer';
document.body.appendChild(popUpContainer);

//Контейнер для таблицы градиента
const container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

//Получили массив цветов, создаём и монтируем блоки
getColors()
.then(res => {
    let fragment = document.createDocumentFragment();
    res.forEach((item) => {
    const column = createColumn("#" + item);
    fragment.appendChild(column);
  })
  container.appendChild(fragment);
  partyStart();
})