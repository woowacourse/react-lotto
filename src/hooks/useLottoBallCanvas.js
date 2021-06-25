import React, { useEffect, useRef } from 'react';
import { reboundBall } from '../components/LottoBallCanvas/service';

import { LOTTO_BALL_CANVAS } from '../constants/number';
import PALETTE from '../constants/palette';

const useLottoBallCanvas = (colors) => {
  const canvasRef = useRef();
  const isBallDrawn = useRef(false);

  const moveBall = (ball) => {
    [...new Array(LOTTO_BALL_CANVAS.BALL_COUNT)].forEach((_, i) => {
      ball[i].x = ball[i].x + ball[i].dx;
      ball[i].y = ball[i].y + ball[i].dy;
      isBallDrawn.current = true;
    });
  };

  const drawBall = (ctx, ball, degrees) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    [...new Array(LOTTO_BALL_CANVAS.BALL_COUNT)].forEach((_, i) => {
      const currentDegreeIdx = i % 5;
      const currentDegree = degrees[currentDegreeIdx];

      if (!isBallDrawn.current) {
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

    moveBall(ball);
    reboundBall(ctx, ball);
  };

  useEffect(() => {
    let animationFrame;

    const degrees = [0, 0, 0, 0, 0];
    const ball = [...new Array(LOTTO_BALL_CANVAS.BALL_COUNT)].map((_, i) => ({
      x: 0,
      y: 0,
      dx: LOTTO_BALL_CANVAS.BALL_SPEED,
      dy: -LOTTO_BALL_CANVAS.BALL_SPEED,
      color: colors[i % colors.length],
    }));

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.canvas.width = LOTTO_BALL_CANVAS.WIDTH;
    ctx.canvas.height = LOTTO_BALL_CANVAS.HEIGHT;

    const render = () => {
      drawBall(ctx, ball, degrees);
      animationFrame = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return canvasRef;
};

export default useLottoBallCanvas;
