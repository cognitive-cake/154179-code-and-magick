'use strict';

window.tools = (function () {
  function getRandomNumber(min, max) {
    return (Math.random() * (max - min) + min);
  }

  var obj = {
    getRandomNumber: getRandomNumber
  };

  return obj;
})();
