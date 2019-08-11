const minimist = require('minimist');
/**
 * Currently supported runner parameters
 * @param {string} phaseMinimum - price has hit too low a point
 * @param {string} [lowPoint] - time to buy
 * @param {string} [highPoint] - time to sell
 * @param {string} [phaseMaximum] - price has hit too high a point
 * 
 * @param {string} [cbResponse] - response from CB api for set currency
 * 
 * @example
 * // runs all elixir-components tests on chrome & firefox browsers
 * node coinbaseTrigger --cbResponse=curlToCbAPI --phaseMinimum=8000 --lowPoint=8500 --highPoint=11000 --phaseMaximum=12000
 */

const runArgsMap = {
  string: ['phaseMinimum', 'lowPoint','highPoint', 'phaseMaximum','cbResponse']
};

const runArgs = minimist(process.argv.slice(2), runArgsMap);

const { phaseMinimum, lowPoint,highPoint, phaseMaximum, cbResponse } = runArgs;
const msg = JSON.parse(cbResponse)
const {data} = msg
const {amount} = data;
let message = "false"
if(Number(amount) < Number(phaseMinimum) ){
  message = `price has hit too low a point ${amount}`
}
else if(Number(amount) < Number(lowPoint) ){
  message = `time to buy ${amount}`
}
else if(Number(amount) < Number(highPoint) ){
  message= `time to sell ${amount}`
}
else if(Number(amount) < Number(phaseMaximum) ){
  message= `price has hit too high a point ${amount}`
}
return console.log(message)