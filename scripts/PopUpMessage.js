// Уведомление о копировании
 module.exports = class {
    constructor(msg) {
      this.element = document.createElement('div');
      this.element.className = 'message';
      this.element.innerHTML = 'Color '+ msg + ' is copied to clipboard!';
    }
}