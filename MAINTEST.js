const URL = 'http://www.colr.org/json/colors/random/50';

const COLORS = [];

// Контейнер для PopUp сообщений
const popUpContainer = document.createElement('div');
popUpContainer.className = 'popUpContainer';
document.body.appendChild(popUpContainer);

//Контейнер для таблицы градиента
const container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

//Получили массив цветов, создаём и монтируем блоки
getColors().then(res => {
    let fragment = document.createDocumentFragment();
    res.forEach((item) => {
      const column = createColumn("#" + item);
      fragment.appendChild(column);
    })
    console.log('таблица готова, render()...');
    container.appendChild(fragment);
    partyStart();
})















/////////////////////  SCRIPTS  ////////////////////////

//Получение цветов
function getColors() {
  return new Promise ((resolve,reject) => {
      fetch(URL)
      .then(res => res.json())
      .then(res => {
        res.colors.forEach(element => {
          if(checkColor(element.hex) && (element.hex) !== '') {
            COLORS.push(element.hex)
          }
        })
      })
      .then(() => {
        if(COLORS.length < 8){
          console.log('not enought colors! only:' + COLORS.length);
          getColors().then(resolve);
        }else{
          COLORS.splice(8);
          console.log('Enougth! ' + COLORS)
          resolve(COLORS);
        }
      })
      
      .catch(err => reject(new Error(err)));
    })
}


// Проверка цвета на валидность
checkColor = (color) => {
  if(isNaN(color)){
      return false;
  }else{

      return true;
  }
};


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


// Генерация палтиры при итерациях
palette = (color) => {
  let currentColor = color;
  return function() {
    const tempColor = currentColor;
    currentColor = shaderColor(currentColor);
    return tempColor;
  }
};


// Осветление цвета
function shaderColor (color) {
  var num = parseInt(color.slice(1), 16);
  var amt = Math.round(2.55 * 9);
  var R = (num >> 16) + amt;
  var G = (num >> 8 & 0x00FF) + amt;
  var B = (num & 0x0000FF) + amt;
  var new_color = ("#" + (0x1000000 +
     (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
     (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
     (B < 255 ? B < 1 ? 0 : B : 255)).toString (16).slice (1))
  return new_color;
};


// Еденица проекта - блок цвета
class Brick {
  constructor(color) {
    this.color = color;
    this.element = document.createElement('div');
    this.element.className = 'brick';
    this.element.style.backgroundColor = color;
    this.element.innerHTML = color.toString();
    this.element.addEventListener('click', () => {
      this.element.innerHTML = 'Copied!';
      const container = document.getElementsByClassName('popUpContainer')[0];
      let msg = new PopUpMessage(color);
      container.appendChild(msg.element);
      this.element.classList.add('copied');
      navigator.clipboard.writeText(color);
      setTimeout(() => {
        this.element.innerHTML = color;
        this.element.classList.remove('copied');
      }, 1000);
      setTimeout(() => {
        container.removeChild(msg.element);        
      }, 2300)
    })
  }
}

// Уведомление о копировании
class PopUpMessage {
  constructor(msg) {
    this.element = document.createElement('div');
    this.element.className = 'message';
    this.element.innerHTML = 'Color '+ msg + ' is copied to clipboard!';
  }
}

// Добавление класса для анимации
function addAnimClass(element) {
    const key = Math.floor(Math.random() * 3);
    switch(key){
        case 1:
            element.classList.add('anim1');
            break;
        case 2:
            element.classList.add('anim2');
            break;
        default:        
    }
}

// Добавление анимации всем блокам
function goDance() {
  const elements = document.getElementsByClassName('brick');
  [].forEach.call(elements, elem => addAnimClass(elem))
}

// Михайло, запускай дискотеку!
function partyStart() {
  const audio = new Audio('./music.mp3');
  audio.play();
  setTimeout(() => goDance(), 24300);
}


