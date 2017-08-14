'use strict';

window.renderStatistics = function (ctx, names, times) {
  var histoParameters = {
    histoStartX: 130,
    histoStartY: 240,
    histoHeight: 150,
    columnWidth: 40,
    spaceBetweenColumns: 50,
    userColumnColor: 'rgba(255, 0, 0, 1)',
    otherPlayersColor: 'blue',
    playerName: 'Вы',
    histoPrecision: 2,
    opacityMin: 0.2,
    opacityMax: 1,
    opacityDefault: 1
  };
  var windowGeometry = {
    startX: 100,
    startY: 10,
    width: 420,
    height: 270,
    get centerX() { // Вот про это я ничего не знаю =) Просто нагуглил ))
      return this.width / 2 + this.startX;
    },
    chamfer: 20,
    borderWidth: 3,
    backgroundColor: '#e2e191',
    borderColor: '#3d444f',
    shadowColor: 'rgba(0, 0, 0, 0.7)',
    shadowOffsetX: 10,
    shadowOffsetY: 10,
    shadowOffsetDefault: 0,
    titleFont: '16px "PT Mono"',
    titleFontAlign: 'center',
    titleFontColor: '#000',
    titleFirstLineY: 40,
    titleSecondLineY: 60
  };

  // Геометрия окна статистики
  function drawStatisticsRectangle(arr) {
    ctx.beginPath();
    ctx.moveTo(arr.startX, arr.startY + arr.chamfer);
    ctx.lineTo(arr.startX, arr.startY + arr.height - arr.chamfer);
    ctx.lineTo(arr.startX + arr.chamfer, arr.startY + arr.height);
    ctx.lineTo(arr.startX + arr.width - arr.chamfer, arr.startY + arr.height);
    ctx.lineTo(arr.startX + arr.width, arr.startY + arr.height - arr.chamfer);
    ctx.lineTo(arr.startX + arr.width, arr.startY + arr.chamfer);
    ctx.lineTo(arr.startX + arr.width - arr.chamfer, arr.startY);
    ctx.lineTo(arr.startX + arr.chamfer, arr.startY);
    ctx.closePath();
  }

  function drawStatisticsWindow() {
    ctx.shadowColor = windowGeometry.shadowColor;
    ctx.shadowOffsetY = windowGeometry.shadowOffsetY;
    ctx.shadowOffsetX = windowGeometry.shadowOffsetX;

    ctx.fillStyle = windowGeometry.backgroundColor;
    drawStatisticsRectangle(windowGeometry);
    ctx.fill();

    ctx.shadowOffsetY = windowGeometry.shadowOffsetDefault;
    ctx.shadowOffsetX = windowGeometry.shadowOffsetDefault;
  }

  function drawStatisticsBorder() {
    ctx.lineWidth = windowGeometry.borderWidth;
    ctx.strokeStyle = windowGeometry.borderColor;
    drawStatisticsRectangle(windowGeometry);
    ctx.stroke();
  }

  function drawStatisticsTitle() {
    ctx.font = windowGeometry.titleFont;
    ctx.textAlign = windowGeometry.titleFontAlign;
    ctx.fillStyle = windowGeometry.titleFontColor;
    ctx.fillText('Ура вы победили!', windowGeometry.centerX, windowGeometry.titleFirstLineY);
    ctx.fillText('Список результатов:', windowGeometry.centerX, windowGeometry.titleSecondLineY);
  }

  // Гистограмма
  function drawHistogram() {
    var columnStep = histoParameters.histoHeight / Math.round(window.tools.getMaxValue(times));
    var userIndex;

    // Отрисовка имен игроков
    function drawPlayersNames() {
      for (var i = 0; i < names.length; i++) {
        var currentName = names[i];
        if (currentName === histoParameters.playerName) {
          userIndex = i;
        }
      }
    }
    // Отрисовка колонок
    function drawHistoColumns(arr) {
      for (var i = 0; i < times.length; i++) {
        if (userIndex === i) {
          ctx.fillStyle = arr.userColumnColor;
        } else {
          ctx.globalAlpha = window.tools.getRandomNumber(arr.opacityMin, arr.opacityMax).toFixed(arr.histoPrecision);
          ctx.fillStyle = arr.otherPlayersColor;
        }
        drawSingleColumn(i, histoParameters);
        ctx.globalAlpha = arr.opacityDefault;
      }
    }
    // Отрисовка единичной колонки
    function drawSingleColumn(i, arr) {
      var currentTime = Math.round(times[i]);
      ctx.fillRect(arr.histoStartX + i * (arr.columnWidth + arr.spaceBetweenColumns), arr.histoStartY, arr.columnWidth, -(currentTime * columnStep.toFixed(arr.histoPrecision)));
    }

    drawPlayersNames();
    drawHistoColumns(histoParameters);
  }

  drawStatisticsWindow();
  drawStatisticsBorder();
  drawStatisticsTitle();
  drawHistogram();
};
