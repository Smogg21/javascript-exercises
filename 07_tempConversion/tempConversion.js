const ftoc = function(farenheit) {
  let transform = ((farenheit -32)*(5/9));
  roundedVar = Math.round(transform * 10)/10;
  return roundedVar;
};

const ctof = function(celcius) {
  let transform = (celcius*(9/5)) + 32;
  roundedVar = Math.round(transform*10)/10;
  return roundedVar;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
