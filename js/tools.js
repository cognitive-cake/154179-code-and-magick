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
  function findValue(arr, valueToMatch) {
    var result;
    for (var i = 0; i < arr.length; i++) {
      var currentValue = arr[i];

      if (currentValue === valueToMatch) {
        result = i;
        break;
      }
    }
    return result;
  }

  var obj = {
    getRandomNumber: getRandomNumber,
    getMaxValue: getMaxValue,
    findValue: findValue
  };

  return obj;
})();
