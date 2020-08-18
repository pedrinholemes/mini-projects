const getAngleOfTime = (time, max) => map(time, 0, max, 0, 360)
const months = [
  ano => 31,
  ano => {
    if ((ano % 4 === 0) && (ano % 100 !== 0) || (ano % 400 === 0)) return 29
    else return 28
  },
  ano => 31,
  ano => 30,
  ano => 31,
  ano => 30,
  ano => 31,
  ano => 31,
  ano => 30,
  ano => 31,
  ano => 30,
  ano => 31,
]
const yearToDecade = (n) => {
  if (n === undefined || n === null) return 0;
  const string = String(n)
  return (Number(string[string.length - 2] + string[string.length - 1])) % 10
}
const yearToCentury = (n) => {
  if (n === undefined || n === null) return 0;
  const string = String(n)
  return (Number(string[string.length - 3] + string[string.length - 2] + string[string.length - 1])) % 100
}
const yearToMilium = (n) => {
  if (n === undefined || n === null) return 0;
  const string = String(n)
  return (Number(string[string.length - 4] + string[string.length - 3] + string[string.length - 2] + string[string.length - 1])) % 1000
}
const setCircleOrder = (n, max, gap = 30) => {
  const sub = (n - 1) * gap
  if (sub >= max) return 0
  return max - sub
}
const hex2rgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};
const colors = [
  '#b28900',
  '#ffa733',
  '#ff6333',
]
const maxSize = 600

function setup() {
  createCanvas(window.innerWidth - 10, window.innerHeight - 10);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(window.innerWidth / 2, window.innerHeight / 2);
  rotate(-90);

  let ms = millis();
  let sc = second();
  let mn = minute();
  let hr = hour();
  let dy = day();
  let mt = month();
  let ya = year();


  strokeWeight(10);
  noFill();

  stroke(hex2rgba(colors[0], (setCircleOrder(1, 100, 40) / 100)));
  arc(0, 0, setCircleOrder(8, maxSize), setCircleOrder(8, maxSize), 0, getAngleOfTime(sc, 60));

  stroke(hex2rgba(colors[0], (setCircleOrder(2, 100, 40) / 100)));
  arc(0, 0, setCircleOrder(7, maxSize), setCircleOrder(7, maxSize), 0, getAngleOfTime(mn, 60));

  stroke(hex2rgba(colors[0], (setCircleOrder(3, 100, 40) / 100)));
  arc(0, 0, setCircleOrder(6, maxSize), setCircleOrder(6, maxSize), 0, getAngleOfTime(hr, 12));

  stroke(hex2rgba(colors[0], (setCircleOrder(4, 100, 40) / 100)));
  arc(0, 0, setCircleOrder(5, maxSize), setCircleOrder(5, maxSize), 0, getAngleOfTime(dy, months[mt - 1](ya)));

  stroke(hex2rgba(colors[0], (setCircleOrder(5, 100, 40) / 100)));
  arc(0, 0, setCircleOrder(4, maxSize), setCircleOrder(4, maxSize), 0, getAngleOfTime(mt, 12));

  stroke(hex2rgba(colors[0], (setCircleOrder(6, 100, 40) / 100)));
  arc(0, 0, setCircleOrder(3, maxSize), setCircleOrder(3, maxSize), 0, getAngleOfTime(yearToDecade(ya), 10));

  stroke(hex2rgba(colors[0], (setCircleOrder(7, 100, 40) / 100)));
  arc(0, 0, setCircleOrder(2, maxSize), setCircleOrder(2, maxSize), 0, getAngleOfTime(yearToCentury(ya), 100));

  stroke(hex2rgba(colors[0], (setCircleOrder(8, 100, 40) / 100)));
  arc(0, 0, setCircleOrder(1, maxSize), setCircleOrder(1, maxSize), 0, getAngleOfTime(ya, 1000));


  push();
  rotate(getAngleOfTime(sc, 60));
  stroke(hex2rgba(colors[2], 1));
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(getAngleOfTime(mn, 60));
  stroke(hex2rgba(colors[1], 1));
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(getAngleOfTime(hr, 12));
  stroke(hex2rgba(colors[0], 1));
  line(0, 0, 50, 0);
  pop();

  stroke(255);
  point(0, 0);
}
