'use strict';

window.renderStatistics = function (ctx, names, times) {
  var histoParameters = {
    histoStartX: 130,
    histoStartY: 240,
    histoHeight: 150,
    columnWidth: 40,
    spaceBetweenColumns: 50,
    userColumnColor: 'rgba(255, 0, 0, 1)',
    otherPlayersColor: 'blue'
  };
  var windowGeometry = {
    startX: 100,
    startY: 10,
    width: 420,
    height: 270,
    chamfer: 20,
    borderWidth: 3,
    backgroundColor: '#e08d35',
    borderColor: '#3d444f',
    shadowColor: 'rgba(0, 0, 0, 0.7)',
    shadowOffsetX: 10,
    shadowOffsetY: 10,
    titleFont: '16px "PT Mono"',
    titleFontAlign: 'center',
    titleFontColor: '#000'
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
    // Тень окна статистики
    ctx.shadowColor = windowGeometry.shadowColor;
    ctx.shadowOffsetY = windowGeometry.shadowOffsetY;
    ctx.shadowOffsetX = windowGeometry.shadowOffsetX;

    // Фон окна статистики
    ctx.fillStyle = windowGeometry.backgroundColor;
    drawStatisticsRectangle(windowGeometry);
    ctx.fill();

    // Возвращение значений по-умолчанию для тени
    ctx.shadowOffsetY = 0;
    ctx.shadowOffsetX = 0;
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
    ctx.fillText('Ура вы победили!', 310, 40);
    ctx.fillText('Список результатов:', 310, 60);
  }

  // Гистограмма
  function drawHistogram() {
    var columnStep = histoParameters.histoHeight / Math.round(window.tools.getMaxValue(times));

    function drawHistoColumns() {
      var h = histoParameters;
      for (var i = 0; i < times.length; i++) {
        var currTime = Math.round(times[i]);
        ctx.fillStyle = 'blue';
        ctx.globalAlpha = window.tools.getRandomNumber(0.2, 1).toFixed(2);
        ctx.fillRect(h.histoStartX + i * (h.columnWidth + h.spaceBetweenColumns), h.histoStartY, h.columnWidth, -(currTime * columnStep.toFixed(3)));
        ctx.globalAlpha = 1;
      }
    }
    function drawPlayersNames() {

    }

    drawHistoColumns();
    drawPlayersNames();
  }

  drawStatisticsWindow();
  drawStatisticsBorder();
  drawStatisticsTitle();
  drawHistogram();
};
