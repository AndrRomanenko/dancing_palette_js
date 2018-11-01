(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
















// /////////////////////  SCRIPTS  ////////////////////////

// //Получение цветов
// function getColors() {
//   return new Promise ((resolve,reject) => {
//       fetch(URL)
//       .then(res => res.json())
//       .then(res => {
//         res.colors.forEach(element => {
//           if(checkColor(element.hex) && (element.hex) !== '') {
//             COLORS.push(element.hex)
//           }
//         })
//       })
//       .then(() => {
//         if(COLORS.length < 8){
//           console.log('not enought colors! only:' + COLORS.length);
//           getColors().then(resolve);
//         }else{
//           COLORS.splice(8);
//           console.log('Enougth! ' + COLORS)
//           resolve(COLORS);
//         }
//       })
      
//       .catch(err => reject(new Error(err)));
//     })
// }


// // Проверка цвета на валидность
// checkColor = (color) => {
//   if(isNaN(color)){
//       return false;
//   }else{

//       return true;
//   }
// };


// // Создание колонки по родительскому цвету
// function createColumn(color) {
//   const column = document.createElement('div');
//   column.className = 'column';
//   let fragment = document.createDocumentFragment();
//   let currColor = palette(color);
//   for( i=0; i<7; i++ ) {
//     const COLOR = currColor();
//     let brick = new Brick(COLOR);
//     fragment.appendChild(brick.element);
//   }
//   column.appendChild(fragment);
//   return column;
// };


// // Генерация палтиры при итерациях
// palette = (color) => {
//   let currentColor = color;
//   return function() {
//     const tempColor = currentColor;
//     currentColor = shaderColor(currentColor);
//     return tempColor;
//   }
// };


// // Осветление цвета
// function shaderColor (color) {
//   var num = parseInt(color.slice(1), 16);
//   var amt = Math.round(2.55 * 9);
//   var R = (num >> 16) + amt;
//   var G = (num >> 8 & 0x00FF) + amt;
//   var B = (num & 0x0000FF) + amt;
//   var new_color = ("#" + (0x1000000 +
//      (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
//      (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
//      (B < 255 ? B < 1 ? 0 : B : 255)).toString (16).slice (1))
//   return new_color;
// };


// // Еденица проекта - блок цвета
// class Brick {
//   constructor(color) {
//     this.color = color;
//     this.element = document.createElement('div');
//     this.element.className = 'brick';
//     this.element.style.backgroundColor = color;
//     this.element.innerHTML = color.toString();
//     this.element.addEventListener('click', () => {
//       this.element.innerHTML = 'Copied!';
//       const container = document.getElementsByClassName('popUpContainer')[0];
//       let msg = new PopUpMessage(color);
//       container.appendChild(msg.element);
//       this.element.classList.add('copied');
//       navigator.clipboard.writeText(color);
//       setTimeout(() => {
//         this.element.innerHTML = color;
//         this.element.classList.remove('copied');
//       }, 1000);
//       setTimeout(() => {
//         container.removeChild(msg.element);        
//       }, 2000)
//     })
//   }
// }

// // Уведомление о копировании
// class PopUpMessage {
//   constructor(msg) {
//     this.element = document.createElement('div');
//     this.element.className = 'message';
//     this.element.innerHTML = 'Color '+ msg + ' is copied to clipboard!';
//   }
// }

// // Добавление класса для анимации
// function addAnimClass(element) {
//     const key = Math.floor(Math.random() * 3);
//     switch(key){
//         case 1:
//             element.classList.add('anim1');
//             break;
//         case 2:
//             element.classList.add('anim2');
//             break;
//         default:        
//     }
// }

// // Добавление анимации всем блокам
// function goDance() {
//   const elements = document.getElementsByClassName('brick');
//   [].forEach.call(elements, elem => addAnimClass(elem))
// }

// // Михайло, запускай дискотеку!
// function partyStart() {
//   const audio = new Audio('./music.mp3');
//   audio.play();
//   setTimeout(() => goDance(), 24300);
// }



},{"./scripts/Brick":2,"./scripts/PopUpMessage":3,"./scripts/createColumn":4,"./scripts/getColors":5,"./scripts/paletteMethods":6,"./scripts/partyMethods":7}],2:[function(require,module,exports){
// Еденица проекта - блок цвета
module.exports =  class {
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
        }, 2000)
      })
    }
  }

},{}],3:[function(require,module,exports){
// Уведомление о копировании
 module.exports = class {
    constructor(msg) {
      this.element = document.createElement('div');
      this.element.className = 'message';
      this.element.innerHTML = 'Color '+ msg + ' is copied to clipboard!';
    }
}
},{}],4:[function(require,module,exports){
// Создание колонки по родительскому цвету
module.exports = function(color) {
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
},{}],5:[function(require,module,exports){
module.exports = function(arr = []) {
    return new Promise((resolve, reject) => {
        fetch('http://www.colr.org/json/colors/random/50')
        .then(res => res.json())
        .then(res => {
            const colors = [...arr];
            res.colors.forEach(element => {
                if(checkColor(element.hex) && (element.hex) !== '') {
                colors.push(element.hex)
                }
            });
            return colors;
        })
        .then((res) => {
            if(res.length < 8){
                console.log('not enought colors! only:' + res.length);
                resolve(getColors(res));
            } else {
                res.splice(8);
                console.log('Enougth! ' + res)
                resolve(res);
            }
        })
        .catch(err => reject(new Error(err)));
    })
}
},{}],6:[function(require,module,exports){
module.exports = {
// Проверка цвета на валидность
checkColor(color){
    if(isNaN(color)){
        return false;
    }else{

        return true;
    }
},

// Генерация палтиры при итерациях
palette(color){
    let currentColor = color;
    return function() {
        const tempColor = currentColor;
        currentColor = shaderColor(currentColor);
        return tempColor;
    }
},

// Осветление цвета
shaderColor(color) {
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
}
}
},{}],7:[function(require,module,exports){
module.exports = {

// Добавление класса для анимации
addAnimClass(element) {
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
},

// Добавление анимации всем блокам
goDance() {
  const elements = document.getElementsByClassName('brick');
  [].forEach.call(elements, elem => addAnimClass(elem))
},

// Запуск музыки и анимации
partyStart() {
  const audio = new Audio('./music.mp3');
  audio.play();
  setTimeout(() => goDance(), 24300);
}
}
},{}]},{},[1]);
