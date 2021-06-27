import { LOTTO_BALL_CANVAS } from '../../constants/number';

const reboundBall = (ctx, ball) => {
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

export { reboundBall };
