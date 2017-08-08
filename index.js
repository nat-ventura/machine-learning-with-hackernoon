const ml = require('ml-regression');
const csv = require('csvtojson');
const SLR = ml.SLR; // simple linear regression

const csvFilePath = 'advertising.csv'; // advertising data
let csvData = [], // parsed data
    X = [], // input
    y = []; // output

let regressionModel;

csv()
    .fromFile(csvFilePath)
    .on('json', (jsonObj) => {
        csvData.push(jsonObj);
    })
    .on('done', () => {
        dressData(); // to get data points from json objects
        performRegression();
    })

function dressData() {
    csvData.forEach((row) => {
        X.push(f(row.Radio));
        y.push(f(row.Sales));
    });
}

function f(s) {
    return parseFloat(s);
}

function performRegression() {
    regressionModel = new SLR(X, y); // train the model on training data
    console.log(regressionModel.toString(3));
    predictOutput();
}

function predictOutput() {
    rl.question('Enter input X for prediction (Press CTRL+C to exit) : ', (answer) => {
        console.log('At X = ${answer}, y = ${regressionModel.predict(parseFloat(answer))}');
        predictOutput();
    });
}

const readline = require('readline'); // for user prompt to allow predictions

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})