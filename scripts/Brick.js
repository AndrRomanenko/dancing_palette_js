const PopUpMessage = require('./PopUpMessage');
const { STYLE_TIMER, NOTIFICATION_TIMER } = require('../constants');


// The project unit is a color block.
class Brick {
  constructor(color) {
    this.color = color;
    this.element = document.createElement('div');
    this.element.className = 'brick';
    this.element.style.backgroundColor = color;
    this.element.innerHTML = color.toString();
    this.element.addEventListener('click', this.onClick.bind(this));
  }

  onClick() {
    const container = document.getElementsByClassName('popUpContainer')[0];
    const msg = new PopUpMessage(this.color);

    this.element.innerHTML = 'Copied!';
    container.appendChild(msg.element);
    this.element.classList.add('copied');
    navigator.clipboard.writeText(this.color);

    setTimeout(() => {
      this.element.innerHTML = this.color;
      this.element.classList.remove('copied');
    }, STYLE_TIMER);

    setTimeout(() => {
      container.removeChild(msg.element);        
    }, NOTIFICATION_TIMER)
  }
}

module.exports = Brick;
