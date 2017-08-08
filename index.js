const ml = require('ml-regression');
const csv = require('csvtojson');
const SLR = ml.SLR; // simple linear regression

const csvFilePath = 'advertising.csv'; // advertising data
let csvData = [], // parsed data
    x = [], // input
    y = []; // output

let regressionModel;