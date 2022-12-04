const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const playerSelectButt = document.querySelectorAll('.playerSelect');


c.fillStyle = 'white';
c.fillRect(0, 0, canvas.width = 1248, canvas.height = 900);

const map = new Image();
map.src = './res/maps/basicMap.png';

const playerSprite = new Image();
let playas = "ghostie";
playerSprite.src = './res/sprites/' + playas + '/down.png';

let mapx = -3000;
let mapy = -2000;

class Sprite {
  constructor(position, image) {
    this.position = position;
    this.image = image;
  }

  draw() {
    c.drawImage(this.image, mapx, mapy);
  }
}

const background = new Sprite(position = { x: -3000, y: -2000 }, map);

let speed = 1;
let lastMove;
let moving = false;
let animationFrame = 0;

function draw() {
  if (moving){
    switch (lastMove){
      case 'w':
        mapy += speed;
        break;
      case 'a':
        mapx += speed;
        break;
      case 's':
        mapy -= speed;
        break;
      case 'd':
        mapx -= speed;
        break;
    }
  }
  window.requestAnimationFrame(draw);
  background.draw();
  c.drawImage(
    playerSprite,
    playerSprite.width / 4 * animationFrame,
    0,
    playerSprite.width / 4,
    playerSprite.height,
    canvas.width / 2 - playerSprite.width / 4 / 2,
    canvas.height / 2 - playerSprite.height / 2,
    playerSprite.width / 4,
    playerSprite.height
  );
}

function movePlayer(e) {
  console.log(e.key);
  if (animationFrame == 3) {
    animationFrame = 0;
  }
  switch (e.key) {
    case 'w':
      playerSprite.src = './res/sprites/' + playas + '/up.png';
      lastMove = 'w';
      moving = true;
      animationFrame += 1;
      break;
    case 'a':
      lastMove = 'a';
      playerSprite.src = './res/sprites/' + playas + '/left.png';
      moving = true;
      animationFrame += 1;
      break;
    case 's':
      lastMove = 's';
      playerSprite.src = './res/sprites/' + playas + '/down.png';
      moving = true;
      break;
    case 'd':
      lastMove = 'd';
      playerSprite.src = './res/sprites/' + playas + '/right.png';
      moving = true;
      animationFrame += 1;
      break;
  }
  draw();
}

function stopPlayer() {
  moving = false;
  draw();
}

function setPlayer() {
  console.log(this.id);
  if (this.id == "ghostie") {
    playas = "ghostie";
  } else if (this.id == "skellyman") {
    playas = "mainChar";
  }
  draw();
  document.getElementById("startMenu").classList.toggle("hidden");
}

window.addEventListener('keydown', movePlayer);
window.addEventListener('keyup', stopPlayer);

playerSelectButt.forEach(selectButt => selectButt.addEventListener('click', setPlayer));

// ALEXS DANGER ZONE!!! Revert back to last working code: e9f007f4c

//=========DANGER END=========