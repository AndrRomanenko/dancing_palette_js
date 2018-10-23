console.log('init');

function newDiv() {
    let div = document.createElement('div');
    div.className = 'container';
    div.innerHTML = 'container for color table';
    document.body.appendChild(div);
}
