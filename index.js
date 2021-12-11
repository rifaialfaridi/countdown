var countdown = new Date('1 januari 2022 00:00:00').getTime();

function newyear() {
  var now = new Date().getTime();
  gap = countdown - now;

  var second = 1000;
  var minute = second * 60;
  var hours = minute * 60;
  var days = hours * 24;

  var d = Math.floor(gap / days);
  var h = Math.floor((gap % days) / hours);
  var m = Math.floor((gap % hours) / minute);
  var s = Math.floor((gap % minute) / second);

  document.getElementById('days').innerText = d;
  document.getElementById('hours').innerText = h;
  document.getElementById('minute').innerText = m;
  document.getElementById('second').innerText = s;
}
setInterval(function () {
  newyear();
}, 1000);

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
  nav.classList.toggle('slide');
});

// color

const b1 = document.getElementById('b1');
// ! cara 1

//b1.addEventListener('click', function () {
//   document.body.style.backgroundColor = 'blue';
// });
// b1.addEventListener('dblclick', function () {
//   document.body.style.backgroundColor = 'white';
// });

// ? alternative (recomend)/(untuk menambah dan menghilangkan class)
b1.onclick = function () {
  document.body.classList.toggle('blue');
};

const b2 = document.getElementById('b2');

b2.addEventListener('click', function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
});

// ! slider

const sr = document.querySelector('input[name=sr]');
const sg = document.querySelector('input[name=sg]');

sr.addEventListener('input', function () {
  const r = sr.value;
  const g = sg.value;
  const b = sb.value;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  document.getElementById('1').innerText = r;
});

sg.addEventListener('input', function () {
  const r = sr.value;
  const g = sg.value;
  const b = sb.value;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  document.getElementById('2').innerText = g;
});
const sb = document.querySelector('input[name=sb]');
sb.addEventListener('input', function () {
  const r = sr.value;
  const g = sg.value;
  const b = sb.value;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  document.getElementById('3').innerText = b;
});
