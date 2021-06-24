import React, { useEffect, useRef } from 'react';
import { LOTTO_BALL_CANVAS } from '../../constants/number';
import PALETTE from '../../constants/palette';
import './style.scss';

const colors = [PALETTE.YELLOW, PALETTE.ORANGE, PALETTE.BLUE, PALETTE.PURPLE, PALETTE.RED];

const LottoBallCanvas = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const degrees = [0, 0, 0, 0, 0];
    const ball = [...new Array(LOTTO_BALL_CANVAS.BALL_COUNT)].map((_, i) => ({
      x: 0,
      y: 0,
      dx: LOTTO_BALL_CANVAS.BALL_SPEED,
      dy: -LOTTO_BALL_CANVAS.BALL_SPEED,
      color: colors[i % colors.length],
    }));

    let animationFrame;
    let isBallDrawn = false;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.canvas.width = LOTTO_BALL_CANVAS.WIDTH;
    ctx.canvas.height = LOTTO_BALL_CANVAS.HEIGHT;

    const move = () => {
      [...new Array(LOTTO_BALL_CANVAS.BALL_COUNT)].forEach((_, i) => {
        ball[i].x = ball[i].x + ball[i].dx;
        ball[i].y = ball[i].y + ball[i].dy;
        isBallDrawn = true;
      });
    };

    const rebound = () => {
      [...new Array(LOTTO_BALL_CANVAS.BALL_COUNT)].forEach((_, i) => {
        if (
          ball[i].x + ball[i].dx > ctx.canvas.width - LOTTO_BALL_CANVAS.BALL_RADIUS ||
          ball[i].x + ball[i].dx < LOTTO_BALL_CANVAS.BALL_RADIUS
        ) {
          ball[i].dx = -ball[i].dx + Math.random();
        }

        if (
          ball[i].y + ball[i].dy > ctx.canvas.height - LOTTO_BALL_CANVAS.BALL_RADIUS ||
          ball[i].y + ball[i].dy < LOTTO_BALL_CANVAS.BALL_RADIUS
        ) {
          ball[i].dy = -ball[i].dy + Math.random() + 0.2;
        }
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      [...new Array(LOTTO_BALL_CANVAS.BALL_COUNT)].forEach((_, i) => {
        const currentDegreeIdx = i % 5;
        const currentDegree = degrees[currentDegreeIdx];

        if (!isBallDrawn) {
          ball[i].x = Math.random() * ctx.canvas.width - LOTTO_BALL_CANVAS.BALL_RADIUS;
          ball[i].y = Math.random() * ctx.canvas.height - LOTTO_BALL_CANVAS.BALL_RADIUS;
        }

        ctx.beginPath();

        ctx.save();
        ctx.translate(ball[i].x, ball[i].y);
        ctx.rotate(currentDegree);
        ctx.translate(-ball[i].x, -ball[i].y);

        ctx.arc(ball[i].x, ball[i].y, LOTTO_BALL_CANVAS.BALL_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = ball[i].color;
        ctx.fill();
        ctx.strokeStyle = PALETTE.BLACK;
        ctx.stroke();

        ctx.font = '.7em Noto Sans KR';
        ctx.fillStyle = PALETTE.WHITE;
        ctx.textAlign = 'center';
        ctx.fillText(i, ball[i].x, ball[i].y);

        ctx.restore();

        ctx.closePath();
        degrees.forEach((degree, idx) => {
          if (idx % 2 === 0) {
            degrees[idx] = degree + LOTTO_BALL_CANVAS.BALL_SPIN_WEIGHT * (idx + 1);
          } else {
            degrees[idx] = degree - LOTTO_BALL_CANVAS.BALL_SPIN_WEIGHT * (idx + 1);
          }
        });
      });

      move();
      rebound();
    };

    const render = () => {
      draw();
      animationFrame = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} id='lotto_ball_canvas' />;
};

export default LottoBallCanvas;
