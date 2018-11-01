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