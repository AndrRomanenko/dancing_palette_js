const { checkColors } = require('./paletteUtils');
const { URL, TABLE_WIDTH } = require('../constants');


const getColors = async (arr = []) => {
  const data = await getData(URL);
  const colors = [...arr,...checkColors(data)];

  if (colors.length < TABLE_WIDTH) {
    console.log('not enought colors! only:' + colors.length);

    return await getColors(colors);
  } else {
    colors.splice(TABLE_WIDTH);
    console.log('Enougth! ' + colors)

    return(colors);
  }
};

const getData = async (url) => {
  const data = await fetch(url);
  const jsonData = await data.json();
  const result = formatData(jsonData);

  return result;
};

function formatData (data) {
  const resArr = [];

  data.colors.forEach(element => {
    resArr.push(element.hex)
  })

  return resArr;
};


module.exports = getColors;