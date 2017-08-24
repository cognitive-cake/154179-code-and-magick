'use strict';

(function () {
  var template = document.querySelector('#similar-wizard-template');
  var listOfSimilarPlayers = document.querySelector('.setup-similar-list');

  var taskParameters = {
    amountOfPersons: 4
  };

  var PLAYERS_FIRST_NAMES = [
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
  var COLORS_COAT = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var COLORS_EYES = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  // Создание характеристик персонажей и запись их в массив
  function createArrayOfSimilarPersons() {
    var array = [];
    for (var i = 0; i < taskParameters.amountOfPersons; i++) {
      array.push(createDataForSinglePerson());
    }
    return array;
  }
  function createDataForSinglePerson() {
    var randomValue = window.tools.getRandomValueOfArray;
    var newPerson = {
      name: randomValue(PLAYERS_FIRST_NAMES) + ' ' + randomValue(PLAYERS_SECOND_NAMES),
      coatColor: randomValue(COLORS_COAT),
      eyesColor: randomValue(COLORS_EYES)
    };
    return newPerson;
  }
  // Создание единичной карточки похожего игрока
  function createSingleSimilarPlayer(playerData) {
    var cloneNode = template.content.cloneNode('true');
    cloneNode.querySelector('.setup-similar-label').textContent = playerData.name;
    cloneNode.querySelector('.wizard-coat').style = 'fill: ' + playerData.coatColor;
    cloneNode.querySelector('.wizard-eyes').style = 'fill: ' + playerData.eyesColor;
    return cloneNode;
  }
  // Создание списка похожих персонажей
  function createListOfSimilarPlayers(array) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < array.length; i++) {
      var object = array[i];
      var player = createSingleSimilarPlayer(object);
      fragment.appendChild(player);
    }
    return fragment;
  }

  var otherPlayers = createArrayOfSimilarPersons();
  var documentFragment = createListOfSimilarPlayers(otherPlayers);
  document.querySelector('.setup').classList.remove('hidden');
  document.querySelector('.setup-similar').classList.remove('hidden');
  listOfSimilarPlayers.appendChild(documentFragment);
})();
