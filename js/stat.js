'use strict';

window.renderStatistics = function (ctx, names, times) {
  var histoParameters = {
    histoStartX: 120,
    histoStartY: 200,
    histoHeight: 150,
    columnWidth: 40,
    spaceBetweenColumns: 50,
    userColumnColor: 'rgba(255, 0, 0, 1)',
    otherPlayersColor: 'blue'
  };

  // Геометрия окна статистики
  function drawStatisticsRectangle() {
    ctx.beginPath();
    ctx.moveTo(100, 30);
    ctx.lineTo(100, 260);
    ctx.lineTo(120, 280);
    ctx.lineTo(500, 280);
    ctx.lineTo(520, 260);
    ctx.lineTo(520, 30);
    ctx.lineTo(500, 10);
    ctx.lineTo(120, 10);
    ctx.closePath();
  }

  function drawStatisticsWindow() {
    // Тень окна статистики
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
    ctx.shadowOffsetY = 10;
    ctx.shadowOffsetX = 10;

    // Фон окна статистики
    ctx.fillStyle = '#6d86af';
    drawStatisticsRectangle();
    ctx.fill();

    // Возвращение значений по-умолчанию для тени
    ctx.shadowOffsetY = 0;
    ctx.shadowOffsetX = 0;
  }

  function drawStatisticsBorder() {
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#3d444f';
    drawStatisticsRectangle();
    ctx.stroke();
  }

  function drawStatisticsTitle() {
    ctx.font = '16px "PT Mono"';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#000';
    ctx.fillText('Ура вы победили!', 310, 40);
    ctx.fillText('Список результатов:', 310, 60);
  }

  // Гистограмма
  function drawHistogram() {
    var maxTime = -1;

    for (var i = 0; i < times.length; i++) {
      var currTime = times[i];
      if (currTime > maxTime) {
        maxTime = currTime;
      }
    }

    var columnStep = histoParameters.histoHeight / Math.round(maxTime);

    function drawHistoColumns() {
      var h = histoParameters;

      for (i = 0; i < times.length; i++) {
        currTime = Math.round(times[i]);
        ctx.fillStyle = 'blue';
        ctx.globalAlpha = window.tools.getRandomNumber(0.2, 1).toFixed(2);
        ctx.fillRect(h.histoStartX + i * (h.columnWidth + h.spaceBetweenColumns), h.histoStartY, h.columnWidth, -(currTime * columnStep.toFixed(3)));
        ctx.globalAlpha = 1;
      }
    }
    drawHistoColumns();
  }

  drawStatisticsWindow();
  drawStatisticsBorder();
  drawStatisticsTitle();
  drawHistogram();
};
