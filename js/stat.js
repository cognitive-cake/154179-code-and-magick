'use strict';

window.renderStatistics = function (ctx, names, times) {
  // Параметры гистограммы
  var histoParameters = {
    histoStartX: 150,
    histoStartY: 250,
    histoHeight: 150,
    columnWidth: 40,
    spaceBetweenColumns: 50,
    userColumnColor: 'rgba(255, 0, 0, 1)',
    otherPlayersColor: 'blue',
    playerName: 'Вы',
    histoPrecision: 2,
    opacityMin: 0.2,
    opacityMax: 1,
    opacityDefault: 1,
    namesFont: '15px "PT Mono"',
    namesTextAlign: 'center',
    namesTextColor: '#000',
    namesStartY: 265,
    timesFont: '15px "PT Mono"',
    timesTextAlign: 'center',
    timesTextColor: '#000',
    timesMargin: 10
  };
  // Параметры окна, в котором рисуется гистограмма
  var windowGeometry = {
    startX: 100,
    startY: 10,
    width: 420,
    height: 270,
    centerX: function () {
      return windowGeometry.width / 2 + windowGeometry.startX;
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
    titleTextAlign: 'center',
    titleTextColor: '#000',
    titleFirstLineY: 40,
    titleSecondLineY: 60
  };

  // Геометрия окна статистики
  function drawStatisticsRectangle(obj) {
    ctx.beginPath();
    ctx.moveTo(obj.startX, obj.startY + obj.chamfer);
    ctx.lineTo(obj.startX, obj.startY + obj.height - obj.chamfer);
    ctx.lineTo(obj.startX + obj.chamfer, obj.startY + obj.height);
    ctx.lineTo(obj.startX + obj.width - obj.chamfer, obj.startY + obj.height);
    ctx.lineTo(obj.startX + obj.width, obj.startY + obj.height - obj.chamfer);
    ctx.lineTo(obj.startX + obj.width, obj.startY + obj.chamfer);
    ctx.lineTo(obj.startX + obj.width - obj.chamfer, obj.startY);
    ctx.lineTo(obj.startX + obj.chamfer, obj.startY);
    ctx.closePath();
  }

  // Отрисовка окна для статистики
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

  // Отрисовка рамки окна
  function drawStatisticsBorder() {
    ctx.lineWidth = windowGeometry.borderWidth;
    ctx.strokeStyle = windowGeometry.borderColor;
    drawStatisticsRectangle(windowGeometry);
    ctx.stroke();
  }

  // Отрисовка заголовка
  function drawStatisticsTitle() {
    ctx.font = windowGeometry.titleFont;
    ctx.textAlign = windowGeometry.titleTextAlign;
    ctx.fillStyle = windowGeometry.titleTextColor;
    ctx.fillText('Ура вы победили!', windowGeometry.centerX(), windowGeometry.titleFirstLineY);
    ctx.fillText('Список результатов:', windowGeometry.centerX(), windowGeometry.titleSecondLineY);
  }

  // Гистограмма
  function drawHistogram() {
    var columnStep = histoParameters.histoHeight / Math.round(window.tools.getMaxValue(times));
    var userIndex;

    // Отрисовка имен игроков
    function drawPlayersNames(obj) {
      for (var i = 0; i < names.length; i++) {
        var currentName = names[i];

        if (currentName === obj.playerName) {
          userIndex = i;
        }
        drawSingleName(currentName, i, histoParameters);
      }
    }
    // Отрисовка колонок
    function drawHistoColumns(obj) {
      for (var i = 0; i < times.length; i++) {
        if (userIndex === i) {
          ctx.fillStyle = obj.userColumnColor;
        } else {
          ctx.globalAlpha = window.tools.getRandomNumber(obj.opacityMin, obj.opacityMax).toFixed(obj.histoPrecision);
          ctx.fillStyle = obj.otherPlayersColor;
        }
        drawSingleColumn(i, histoParameters);
        ctx.globalAlpha = obj.opacityDefault;
      }
    }
    // Отрисовка времени каждого игрока
    function drawPlayersTimes() {
      for (var i = 0; i < times.length; i++) {
        var currentTime = Math.round(times[i]);
        drawSingleTime(currentTime, i, histoParameters);
      }
    }

    // Отрисовка единичного имени
    function drawSingleName(name, i, obj) {
      var columnCenterX = obj.histoStartX + i * (obj.columnWidth + obj.spaceBetweenColumns) + obj.columnWidth / 2;

      ctx.font = obj.namesFont;
      ctx.textAlign = obj.namesTextAlign;
      ctx.fillStyle = obj.namesTextColor;
      ctx.fillText(name, columnCenterX, obj.namesStartY);
    }
    // Отрисовка единичной колонки
    function drawSingleColumn(i, obj) {
      var currentTime = Math.round(times[i]);
      var columnX = obj.histoStartX + i * (obj.columnWidth + obj.spaceBetweenColumns);
      var columnHeight = currentTime * columnStep.toFixed(obj.histoPrecision);

      ctx.fillRect(columnX, obj.histoStartY, obj.columnWidth, -columnHeight);
    }
    // Отрисовка единичного времени
    function drawSingleTime(time, i, obj) {
      var columnCenterX = obj.histoStartX + i * (obj.columnWidth + obj.spaceBetweenColumns) + obj.columnWidth / 2;
      var columnHeight = time * columnStep.toFixed(obj.histoPrecision);
      var columnTopY = obj.histoStartY - columnHeight;

      ctx.font = obj.timesFont;
      ctx.textAlign = obj.timesTextAlign;
      ctx.fillStyle = obj.timesTextColor;
      ctx.fillText(time, columnCenterX, columnTopY - obj.timesMargin);
    }

    drawPlayersNames(histoParameters);
    drawHistoColumns(histoParameters);
    drawPlayersTimes();
  }

  drawStatisticsWindow();
  drawStatisticsBorder();
  drawStatisticsTitle();
  drawHistogram();
};
