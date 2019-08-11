// Life count variable
var lives = 3;

// Adding Event Listeners To all the players for player selection 
const imgs = document.querySelectorAll('.player');

imgs.forEach(function(img) {
    img.addEventListener('click', function() {
      // Adding selected player 
      player.sprite = img.getAttribute('src');
      // Hide modal overlay and player selection modal after selection
      document.querySelector('.overlay').classList.add('hide');
      document.querySelector('.player-modal').classList.add('hide');
    });
  });

// Class for Enemies
class Enemy {
    constructor(x, y, speed) {
    // Enemy Image
    this.sprite = 'images/enemy-bug.png';
    // Enemy Location
    this.x = x;
    this.y = y;
    // Enemy Speed
    this.speed = speed;
    }
    // Update function (updated every second)
    update(dt) {
        //Making enemy move every second
        this.x = this.x + this.speed * dt;
        // When Enemy Finishes one round start again
        if(this.x > 500) { 
            this.x = 0;
        }
        
        // To check if player collides with enemy and what should happen if collided
        collision();
        
        // If all lives are over
        if(lives <= 0) {
            //Make game over modal appear
            gameOver();
        }
    }
    // Render Enemies on canvas
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
    }

};

class Player {
    constructor() {
        // Player Image
        this.sprite = 'images/char-boy.png';
        // Player Location
        this.x = 200;
        this.y = 400;
    }
    // Render Player on canvas
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
    }
    // Update function (updated every second)
    update() {
        // On every win
        win();
        // If player goes outside
        this.outsideCanvas();
    }
    // Player movement 
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
    // Set player to intial location.
    restart() {
        this.x = 200;
        this.y = 380;
    }
    
    // To ensure player doesn't go outside the canvas
    outsideCanvas() {
        if(this.y > 400){
            this.y = 380;
        }
        if(this.x > 400){
            this.x = 400;
        }
        else if(this.x < 0){
            this.x = 0;
        }
    }
}

// Total Score variable
var score = 0;

// Function to called when player wins one level
function win() {
    if(player.y <= 0){
        // Increase Score by 5
        score = score + 5;
        // Display score above canvas
        document.querySelector('.score').textContent = score;
        // Set player to intial location
        player.restart();
        // Increase Enemies speed after each win
        for (enemy of allEnemies){
            enemy.speed += 40;
        }
    };
}

function collision() {
    // Loop through alll the enemies and calculate distance between player and enemy 
    for (enemy of allEnemies){

        // y-axis distance
        var enemyDistanceY = Math.abs(player.y - enemy.y);
        // x-axis distance
        var enemyDistanceX = Math.abs(player.x - enemy.x);

        // if player collides
        if(enemyDistanceX < 55 && enemyDistanceY < 1){
            alert("Hit");
            //Decrease life by 1
            lives -= 1;
            //Remove a life image
            document.querySelector(".lives").getElementsByTagName('li')[0].remove();
            //Set player back to intial position
            player.restart();
           };
    };
}

// Player and Enemy objects created
let player = new Player();
var enemy1 = new Enemy(10, 40, 180);
var enemy2 = new Enemy(100, 210, 300);
var enemy3 = new Enemy(300, 125, 230);

// Array of enemies
const allEnemies = [enemy1, enemy2, enemy3];

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

// Hide Game Over modal at the start of the game
document.querySelector('.game-over').classList.add('hide');

// Function to show game over modal after bieng called
  function gameOver() {
        document.querySelector('.game-over-score').textContent = score;
        document.querySelector('.game-over').classList.remove('hide');
        document.querySelector('.overlay').classList.remove('hide');
  }

// Added Restart Button on Game Over Modal
document.querySelector('.restart').addEventListener('click', function(){
    document.location.reload();
})

