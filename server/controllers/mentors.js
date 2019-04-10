const fs = require('fs');
const path = require('path');
const { promisify } = require('util');


const pathToData = path.join(__dirname, '../data/mock-data.json');
const pathToResultData = path.join(__dirname, '../../data.json');

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);

async function getMockDataFromFile() {
  const data = await readFile(pathToData, {encoding: 'utf8'}).then(data => JSON.parse(data));
  return data;
}

async function saveDate() {
  const data = await getMockDataFromFile();
  return writeFile(pathToResultData, JSON.stringify(data), err => {
    if (err) {
      console.log('Error: ', err);
      return;
    }
  });
}

module.exports = {
  getMockDataFromFile,
  saveDate
};
