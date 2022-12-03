const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');


c.fillStyle = 'white';
c.fillRect(0, 0, canvas.width = 1248, canvas.height = 900);

const map = new Image();
map.src = './res/maps/basicMap.png';

const playerSprite = new Image();
playerSprite.src = './res/sprites/ghostie/down.png';

let mapx = -3000;
let mapy = -2000;

let lastMove;
let annimationFrame = 0;

function draw(){
    window.requestAnimationFrame(draw);
    c.drawImage(map, mapx, mapy);
    c.drawImage(
        playerSprite,
        playerSprite.width / 4 * annimationFrame,
        0,
        playerSprite.width / 4,
        playerSprite.height,
        canvas.width / 2 - playerSprite.width / 4 / 2,
        canvas.height / 2 - playerSprite.height / 2,
        playerSprite.width / 4,
        playerSprite. height
        );
}

function movePlayer(e){
    console.log(e.key);
    if (annimationFrame == 3){
        annimationFrame = 0;
    }
    switch (e.key){
        case 'w':
            playerSprite.src = './res/sprites/ghostie/up.png';
            lastMove = 'w';
            mapy += 20;
            annimationFrame += 1;
            break;
        case 'a':
            lastMove = 'a';
            playerSprite.src = './res/sprites/ghostie/left.png';
            mapx += 20;
            annimationFrame += 1;
            break;
        case 's':
            lastMove = 's';
            playerSprite.src = './res/sprites/ghostie/down.png';
            mapy -= 20;
            annimationFrame += 1;
            break;
        case 'd':
            lastMove = 'd';
            playerSprite.src = './res/sprites/ghostie/right.png';
            mapx -= 20;
            annimationFrame += 1;
            break;
    }
    draw();
}

function stopPlayer(){
    annimationFrame = 0;
    draw();
}

window.addEventListener('keydown', movePlayer);
window.addEventListener('keyup', stopPlayer);

onload(draw());