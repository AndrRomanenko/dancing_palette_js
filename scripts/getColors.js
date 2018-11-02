const checkColor = require('./paletteUtils').checkColor;
const { URL, TABLE_WIDTH } = require('../constants');


module.exports = function(arr = []) {
    return new Promise((resolve, reject) => {
        fetch(URL)
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
            if(res.length < TABLE_WIDTH){
                console.log('not enought colors! only:' + res.length);
                resolve(getColors(res));
            } else {
                res.splice(TABLE_WIDTH);
                console.log('Enougth! ' + res)
                resolve(res);
            }
        })
        .catch((err) => reject(new Error(err)));
    })
}