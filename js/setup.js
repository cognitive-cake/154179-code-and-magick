'use strict';

(function () {
  window.setup = (function () {
    document.querySelector('.setup').classList.remove('hidden');


  })();

  var PLAYERS_FIRST_NAMES = [ // Это константа? Или стоило назвать как обычный массив?
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];
  var PLAYERS_SECOND_NAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];
  var COLOR_COAT = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var COLOR_EYES = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var otherPlayers = [
    {
      name: '',
      coatColor: '',
      eyesColor: ''
    },
    {
      name: '',
      coatColor: '',
      eyesColor: ''
    },
    {
      name: '',
      coatColor: '',
      eyesColor: ''
    },
    {
      name: '',
      coatColor: '',
      eyesColor: ''
    }
  ];
})();
