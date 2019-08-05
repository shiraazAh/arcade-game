const GameController = (function () {
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

    update() {
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
             alert("hit")
             restart();
            };
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

    handleInput() {
        let z = allowedKeys;

        if(z === 'up'){
            this.y -= 85;  
        }
        if(z === 'left'){
            this.x -= 85;  
        }
        if(z === 'right'){
            this.x += 85;  
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

// // Update the enemy's position, required method for game
// // Parameter: dt, a time delta between ticks
// Enemy.prototype.update = function(dt) {
//     this.x = this.x + this.speed * dt;

//     if(this.x > 500) { 
//         this.x = 0;
//     }

//     const enemy1yDist = Math.abs(player.y - enemy1.y);
//     const enemy1xDist = Math.abs(player.x - enemy1.x);
//     const enemy2yDist = Math.abs(player.y - enemy2.y);
//     const enemy2xDist = Math.abs(player.x - enemy2.x);
//     const enemy3yDist = Math.abs(player.y - enemy3.y);
//     const enemy3xDist = Math.abs(player.x - enemy3.x);


//     if((enemy1xDist < 30 && enemy1yDist < 40) || (enemy2xDist < 30 && enemy2yDist < 40) || (enemy3xDist < 30 && enemy3yDist < 40)){
//          alert("hit")
//          player.restart();
//         };
//     // You should multiply any movement by the dt parameter
//     // which will ensure the game runs at the same speed for
//     // all computers.
// };

// Draw the enemy on the screen, required method for game
// Enemy.prototype.render = function() {
//     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
// };

// Now write your own player class
// var Player = function() {
//     // Variables applied to each of our instances go here,
//     // we've provided one for you to get started
//     // The image/sprite for our enemies, this uses
//     // a helper we've provided to easily load images
//     this.sprite = 'images/char-boy.png';
//     this.x = 200;
//     this.y = 400;
// };

// Player.prototype.render = function() {
//     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
// };

Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Player.prototype.handleInput = function(allowedKeys){
//     let z = allowedKeys;

//     if(z === 'up'){
//         this.y -= 85;  
//     }
//     if(z === 'left'){
//         this.x -= 85;  
//     }
//     if(z === 'right'){
//         this.x += 85;  
//     }
//     if(z === 'down'){
//         this.y += 85;  
//     }
// }

// Player.prototype.restart = function() {
//     this.x = 200;
//     this.y = 400;
// }

let player = new Player();
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var enemy1 = new Enemy(10, 50, 150);
var enemy2 = new Enemy(100, 200, 300);
var enemy3 = new Enemy(300, 150, 200);

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

})();