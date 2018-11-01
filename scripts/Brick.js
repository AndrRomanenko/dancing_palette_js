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
