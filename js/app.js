var positionArray = [68,151,234]; //position of bugs
var speedArray = [200,350,500]; //speed values of bugs
var updateX; //new position of player in x coordinates
var updateY; //new position of player in x coordinates

var Enemy = function() {
    
    this.sprite = 'images/enemy-bug.png';
    this.x = -100;
    this.y=positionArray[Math.floor(Math.random() * positionArray.length)]; //selects position randomly 
    this.speed = speedArray[Math.floor(Math.random() * speedArray.length)]; //selects speed randomly 
    
}

//Updates bugs' position
Enemy.prototype.update = function (dt) {
    
    if (this.x > 450) {

       this.x = -40;
       this.y=positionArray[Math.floor(Math.random() * positionArray.length)];
       this.speed = speedArray[Math.floor(Math.random() * speedArray.length)]; 
    }

    else {
       this.x += this.speed * dt;   //multiply any movement by the dt parameter
                                    // which will ensure the game runs at the same speed for
                                    // all computers.
    }
}
   


//Draws bugs on screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}


var allEnemies = [];
for(var i =0; i <=4; i++) {
    var enemy = new Enemy();
    allEnemies.push(enemy);
    
}


var Player = function(){
    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 400;
    
}

//Updates position of player
Player.prototype.update = function(dt){

    if(updateX >=0  && updateX <= 404) { 
        this.x = updateX;
    }
    else{
        this.x = this.x;
    }
    if (updateY > -20 && updateY <= 415){
        this.y = updateY;
    }
    else {
        this.y = this.y;
    }

}

//Draws player on the screen
Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(button){

    if (button === "left") {
    updateX = this.x - 100;
    }
    else if (button === "right") {
    updateX = this.x + 100;
    }
    else if (button === "up") {
    updateY = this.y - 83;
    }
    else if (button === "down") {
    updateY= this.y + 83;
    }

}


var player = new Player();
var player = player;


// This listens for key presses and sends the keys to your
// Player.handleInput() method. 
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]); //Calls handle input funtion
});
