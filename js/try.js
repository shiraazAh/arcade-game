var collided = 0;
const imgs = document.querySelectorAll('.player');
    // Enemies our player must avoid

class Enemy {
    constructor(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
    }

    update(dt) {
        this.x = this.x + this.speed * dt;

        if(this.x > 500) { 
            this.x = 0;
        }
    
        const enemy1yDist = Math.abs(player.y - enemy1.y);
        const enemy1xDist = Math.abs(player.x - enemy1.x);
        const enemy2yDist = Math.abs(player.y - enemy2.y);
        const enemy2xDist = Math.abs(player.x - enemy2.x);
        const enemy3yDist = Math.abs(player.y - enemy3.y);
        const enemy3xDist = Math.abs(player.x - enemy3.x);
    
    
        if((enemy1xDist < 30 && enemy1yDist < 40) || (enemy2xDist < 30 && enemy2yDist < 40) || (enemy3xDist < 30 && enemy3yDist < 40)){
             alert("Hit");
             collided += 1;
             document.querySelector(".lives").getElementsByTagName('li')[0].remove();
             player.restart();
            };

        if(collided >=3) {
            gameOver();
        }
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
    }

};

class Player {
    constructor() {
        // Variables applied to each of our instances go here,
        // we've provided one for you to get started
        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/char-boy.png';
        this.x = 200;
        this.y = 400;
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
    }

    update() {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers. 
    win();
    }

    handleInput(allowedKeys) {
        let z = allowedKeys;

        if(z === 'up'){
            this.y -= 85;  
        }
        if(z === 'left'){
            this.x -= 100;  
        }
        if(z === 'right'){
            this.x += 100;  
        }
        if(z === 'down'){
            this.y += 85;  
        }
    }

    restart() {
        this.x = 200;
        this.y = 400;
    }

}

var score = 0;

function win() {
    if(player.y <= 0){
        score = score + 5;
        document.querySelector('.score').textContent = score;
        player.restart();
        for (enemy of allEnemies){
            enemy.speed += 40;
        }
    };
}

let player = new Player();
// This class requires an update(), render() and
// a handleInput() method.

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var enemy1 = new Enemy(10, 50, 180);
var enemy2 = new Enemy(100, 200, 300);
var enemy3 = new Enemy(300, 150, 230);

const allEnemies = [enemy1, enemy2, enemy3];
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.



document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

document.querySelector('.restart').addEventListener('click', function(){
    document.location.reload();
})

imgs.forEach(function(img) {
    img.addEventListener('click', function() {
      player.sprite = img.getAttribute('src');
      document.querySelector('.overlay').classList.add('hide');
      document.querySelector('.player-modal').classList.add('hide');
    });
  });

  function gameOver() {
        document.querySelector('.game-over-score').textContent = score;
        document.querySelector('.game-over').classList.remove('hide');
        document.querySelector('.overlay').classList.remove('hide');
  }

  document.querySelector('.game-over').classList.add('hide');

