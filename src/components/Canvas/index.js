import React from 'react';
import getRandomNumber from '../../utils/random-number';
import './style.scss';

class Canvas extends React.Component {
  constructor(props) {
    super(props);
  }

  addAnimation() {}

  render() {
    return <canvas id='canvas' />;
  }

  componentDidMount() {
    const colors = [
      ...Array(6).fill('rgba(252, 209, 83, 1)'),
      ...Array(6).fill('rgba(255, 143, 78, 1)'),
      ...Array(6).fill('rgba(60, 188, 255, 1)'),
      ...Array(6).fill('rgba(141, 112, 217, 1)'),
      ...Array(6).fill('rgba(255, 76, 76, 1)'),
    ];

    let isBallDrawn = false;
    const ball = [];
    const ballCount = 30;
    [...new Array(ballCount)].forEach((_, i) => {
      ball[i] = {
        x: 0,
        y: 0,
        dx: 2,
        dy: -2,
        color: colors[i],
      };
    });

    const ballRadius = 15;

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    ctx.canvas.width = 200;
    ctx.canvas.height = 200;

    const degrees = [0, 0, 0, 0, 0];

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      [...new Array(ballCount)].forEach((_, i) => {
        const currentDegreeIdx = i % 5;
        const currentDegree = degrees[currentDegreeIdx];

        if (!isBallDrawn) {
          ball[i].x = Math.random() * canvas.width - ballRadius;
          ball[i].y = Math.random() * canvas.height - ballRadius;
        }

        ctx.beginPath();

        ctx.save();
        ctx.translate(ball[i].x, ball[i].y);
        ctx.rotate(currentDegree);
        ctx.translate(-ball[i].x, -ball[i].y);

        ctx.arc(ball[i].x, ball[i].y, ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = ball[i].color;
        ctx.fill();
        ctx.strokeStyle = '#000000';
        ctx.stroke();

        ctx.font = '.7em Noto Sans KR';
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.fillText(i, ball[i].x, ball[i].y);

        ctx.restore();

        ctx.closePath();
        degrees.forEach((degree, idx) => {
          if (idx % 2 === 0) {
            degrees[idx] = degree + 0.001 * (idx + 1);
          } else {
            degrees[idx] = degree - 0.001 * (idx + 1);
          }
        });
      });

      move();
      rebound();
      requestAnimationFrame(draw);
    }

    function move() {
      [...new Array(ballCount)].forEach((_, i) => {
        ball[i].x = ball[i].x + ball[i].dx;
        ball[i].y = ball[i].y + ball[i].dy;
        isBallDrawn = true;
      });
    }

    function rebound() {
      [...new Array(ballCount)].forEach((_, i) => {
        if (
          ball[i].x + ball[i].dx > canvas.width - ballRadius ||
          ball[i].x + ball[i].dx < ballRadius
        ) {
          ball[i].dx = -ball[i].dx + Math.random();
        }
        if (
          ball[i].y + ball[i].dy > canvas.height - ballRadius ||
          ball[i].y + ball[i].dy < ballRadius
        ) {
          ball[i].dy = -ball[i].dy + Math.random() + 0.2;
        }
      });
    }

    draw();
  }
}

export default Canvas;
