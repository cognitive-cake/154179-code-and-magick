'use strict';

window.tools = (function () {
  function getRandomNumber(min, max) {
    return (Math.random() * (max - min) + min);
  }
  function getMaxValue(array) {
    var maxValue = -1;
    for (var i = 0; i < array.length; i++) {
      var currValue = array[i];
      if (currValue > maxValue) {
        maxValue = currValue;
      }
    }
    return maxValue;
  }

  var obj = {
    getRandomNumber: getRandomNumber,
    getMaxValue: getMaxValue
  };

  return obj;
})();
