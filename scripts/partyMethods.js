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