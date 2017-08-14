'use strict';

window.renderStatistics = function (ctx, names, times) {
  // Тень окна статистики
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  ctx.shadowOffsetY = 10;
  ctx.shadowOffsetX = 10;

  // Фон окна статистики
  ctx.fillStyle = '#6d86af';
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
  ctx.fill();

  // Возвращение значений по-умолчанию для тени
  ctx.shadowOffsetY = 0;
  ctx.shadowOffsetX = 0;

  // Рамка окна статистики
  ctx.lineWidth = 3;
  ctx.strokeStyle = '#3d444f';
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
  ctx.stroke();
};
