'use strict';

(function () { // Уместно ли выводить из метода .setup массивы с данными, как в предыдущем задании?
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

  window.setup = (function () {
    var template = document.querySelector('#similar-wizard-template');
    var listOfSimilarPlayers = document.querySelector('.setup-similar-list');

    // Запись случайных значений в массив с характеристиками других игроков
    function recordRandomPersons(array) {
      var randomValue = window.tools.getRandomValueOfArray;
      for (var i = 0; i < array.length; i++) {
        var currentObj = array[i];
        currentObj.name = randomValue(PLAYERS_FIRST_NAMES) + ' ' + randomValue(PLAYERS_SECOND_NAMES);
        currentObj.coatColor = randomValue(COLOR_COAT);
        currentObj.eyesColor = randomValue(COLOR_EYES);
      }
    }
    // Создание единичной карточки похожего игрока
    function createSingleSimilarPlayer(obj) {
      var cloneNode = template.content.cloneNode('true');
      var playerData = obj;
      cloneNode.querySelector('.setup-similar-label').textContent = playerData.name;
      cloneNode.querySelector('.wizard-coat').style = 'fill: ' + playerData.coatColor;
      cloneNode.querySelector('.wizard-eyes').style = 'fill: ' + playerData.eyesColor;
      return cloneNode;
    }
    // Создание списка похожих персонажей
    function createListOfSimilarPlayers(array) {
      var fragment = document.createDocumentFragment();
      for (var i = 0; i < array.length; i++) {
        fragment.appendChild(createSingleSimilarPlayer(array[i]));
      }
      return fragment;
    }

    document.querySelector('.setup').classList.remove('hidden');
    document.querySelector('.setup-similar').classList.remove('hidden');
    recordRandomPersons(otherPlayers);
    listOfSimilarPlayers.appendChild(createListOfSimilarPlayers(otherPlayers));
  })();
})();
