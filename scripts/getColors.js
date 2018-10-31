function getColors() {
    const URL = 'http://www.colr.org/json/colors/random/50';
    const COLORS = [];
    return function pass() {
        return new Promise ((resolve,reject) => {
            fetch(URL)
            .then(res => res.json())
            .then(res => {
            res.colors.forEach(element => {
                if(checkColor(element.hex) && (element.hex) !== '') {
                COLORS.push(element.hex)
                }
            })
            })
            .then(() => {
            if(COLORS.length < 8){
                console.log('not enought colors! only:' + COLORS.length);
                pass().then(resolve);
            }else{
                COLORS.splice(8);
                console.log('Enougth! ' + COLORS)
                resolve(COLORS);
            }
            })
            .catch(err => reject(new Error(err)));
        })
    }
  }