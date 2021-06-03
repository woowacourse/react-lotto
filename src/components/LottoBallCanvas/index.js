import React from 'react';
import './style.scss';

class LottoBallCanvas extends React.Component {
  constructor(props) {
    super(props);

    this.colors = [
      'rgba(252, 209, 83, 1)',
      'rgba(255, 143, 78, 1)',
      'rgba(60, 188, 255, 1)',
      'rgba(141, 112, 217, 1)',
      'rgba(255, 76, 76, 1)',
    ];
    this.isBallDrawn = false;
    this.ball = [];
    this.ballCount = 30;
    this.ballRadius = 15;
    this.degrees = [0, 0, 0, 0, 0];

    this.canvasRef = React.createRef();

    this.setCanvas = this.setCanvas.bind(this);
    this.addBalls = this.addBalls.bind(this);
    this.move = this.move.bind(this);
    this.rebound = this.rebound.bind(this);
    this.draw = this.draw.bind(this);
  }

  setCanvas() {
    // this.canvas = document.getElementById('lotto_ball_canvas');
    this.canvas = this.canvasRef.current;
    this.ctx = this.canvas.getContext('2d');

    this.ctx.canvas.width = 200;
    this.ctx.canvas.height = 200;
  }

  addBalls() {
    [...new Array(this.ballCount)].forEach((_, i) => {
      this.ball[i] = {
        x: 0,
        y: 0,
        dx: 2,
        dy: -2,
        color: this.colors[i % this.colors.length],
      };
    });
  }

  move() {
    [...new Array(this.ballCount)].forEach((_, i) => {
      this.ball[i].x = this.ball[i].x + this.ball[i].dx;
      this.ball[i].y = this.ball[i].y + this.ball[i].dy;
      this.isBallDrawn = true;
    });
  }

  rebound() {
    [...new Array(this.ballCount)].forEach((_, i) => {
      if (
        this.ball[i].x + this.ball[i].dx > this.canvas.width - this.ballRadius ||
        this.ball[i].x + this.ball[i].dx < this.ballRadius
      ) {
        this.ball[i].dx = -this.ball[i].dx + Math.random();
      }
      if (
        this.ball[i].y + this.ball[i].dy > this.canvas.height - this.ballRadius ||
        this.ball[i].y + this.ball[i].dy < this.ballRadius
      ) {
        this.ball[i].dy = -this.ball[i].dy + Math.random() + 0.2;
      }
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    [...new Array(this.ballCount)].forEach((_, i) => {
      const currentDegreeIdx = i % 5;
      const currentDegree = this.degrees[currentDegreeIdx];

      if (!this.isBallDrawn) {
        this.ball[i].x = Math.random() * this.canvas.width - this.ballRadius;
        this.ball[i].y = Math.random() * this.canvas.height - this.ballRadius;
      }

      this.ctx.beginPath();

      this.ctx.save();
      this.ctx.translate(this.ball[i].x, this.ball[i].y);
      this.ctx.rotate(currentDegree);
      this.ctx.translate(-this.ball[i].x, -this.ball[i].y);

      this.ctx.arc(this.ball[i].x, this.ball[i].y, this.ballRadius, 0, Math.PI * 2);
      this.ctx.fillStyle = this.ball[i].color;
      this.ctx.fill();
      this.ctx.strokeStyle = '#000000';
      this.ctx.stroke();

      this.ctx.font = '.7em Noto Sans KR';
      this.ctx.fillStyle = 'white';
      this.ctx.textAlign = 'center';
      this.ctx.fillText(i, this.ball[i].x, this.ball[i].y);

      this.ctx.restore();

      this.ctx.closePath();
      this.degrees.forEach((degree, idx) => {
        if (idx % 2 === 0) {
          this.degrees[idx] = degree + 0.001 * (idx + 1);
        } else {
          this.degrees[idx] = degree - 0.001 * (idx + 1);
        }
      });
    });

    this.move();
    this.rebound();
    requestAnimationFrame(this.draw);
  }

  componentDidMount() {
    this.setCanvas();
    this.addBalls();
    this.draw();
  }

  render() {
    return <canvas ref={this.canvasRef} id='lotto_ball_canvas' />;
  }
}

export default LottoBallCanvas;
