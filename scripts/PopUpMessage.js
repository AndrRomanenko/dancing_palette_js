// Copy Notification
class PopUpMessage {
  constructor(msg) {
    this.element = document.createElement('div');
    this.element.className = 'message';
    this.element.innerHTML = 'Color '+ msg + ' is copied to clipboard!';
  }
}

module.exports = {
   PopUpMessage
}