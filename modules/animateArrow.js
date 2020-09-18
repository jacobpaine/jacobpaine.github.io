function enlargeSquare() {
  if (document.querySelector('#square.down')) return;
  const square = document.getElementById('square');
  const square2 = document.getElementById('square2');

  const triangle = document.getElementById('triangle');
  const myAbout = document.getElementById('myAbout');
  const titlePage = document.getElementById('title-page');

  const origin = square.getBoundingClientRect().bottom;
  const midway = titlePage.getBoundingClientRect().bottom;
  const destination = myAbout.getBoundingClientRect().top;
  const bottomOfS2 = square2.getBoundingClientRect().bottom;

  square.className = 'down';
  triangle.className = 'down';

  const squareDown = document.querySelector('#square.down');
  const triangleDown = document.querySelector('#triangle.down');

  squareDown.style.paddingTop = midway - origin + 'px';
  triangleDown.style.marginTop = destination - origin + 25 + 'px';

  function squareTransition(origin) {
    square2.style.visibility = 'visible';
    square2.className = 'down2';
    square2.style.paddingTop = destination - origin + 'px';
  }

  square.addEventListener('transitionend', function () {
    squareTransition(bottomOfS2);
    triangle.style.position = 'absolute';
    triangle.style.borderTop = '40px solid blue';
  });
}

export { enlargeSquare };
