// Adding a class for animation
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
};

// Adding animation to all blocks
function goDance() {
    const elements = [...document.getElementsByClassName('brick')]
    elements.forEach(elem => addAnimClass(elem))
}

// Run music and animation
function partyStart() {
    const audio = new Audio('./music.mp3');
    audio.play();
    setTimeout(() => goDance(), 24300);
}

module.exports = {
    partyStart
}