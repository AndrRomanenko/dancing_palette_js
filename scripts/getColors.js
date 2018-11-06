const { getCheckedColors } = require('./paletteUtils');
const { URL, TABLE_WIDTH } = require('../constants');


const getColors = async (arr = []) => {
  const data = await getData(URL);
  const colors = [...arr, ...getCheckedColors(data)];

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

  return formatData(jsonData);
};

const formatData = data => data.colors.map(elem => elem.hex);


module.exports = getColors;