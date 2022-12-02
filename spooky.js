const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');


c.fillStyle = 'white';
c.fillRect(0, 0, canvas.width = 1248, canvas.height = 900);

const map = new Image();
map.src = './res/maps/basicMap.png';

const playerSprite = new Image();
playerSprite.src = './res/sprites/mainChar/down.png';

let mapx = -3000;
let mapy = -2000;

function draw(){
    window.requestAnimationFrame(draw);
    c.drawImage(map, mapx, mapy);
    c.drawImage(
        playerSprite,
        0,
        0,
        playerSprite.width / 4,
        playerSprite.height,
        canvas.width / 2 - playerSprite.width / 4 / 2,
        canvas.height / 2 - playerSprite.height / 2,
        playerSprite.width / 4,
        playerSprite. height
        );
}
draw();

function movePlayer(e){
    console.log(e.key);
    switch (e.key){
        case 'w':
            playerSprite.src = './res/sprites/mainChar/up.png';
            mapy += 20;
            break;
        case 'a':
            playerSprite.src = './res/sprites/mainChar/left.png';
            mapx += 20;
            break;
        case 's':
            playerSprite.src = './res/sprites/mainChar/down.png';
            mapy -= 20;
            break;
        case 'd':
            playerSprite.src = './res/sprites/mainChar/right.png';
            mapx -= 20;
            break;

    }
}

window.addEventListener('keydown', movePlayer);