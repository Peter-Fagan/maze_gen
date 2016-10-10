var game = new Phaser.Game(640, 480, Phaser.AUTO, "");

// var player;
var walls;
var floors;

// game.state.add("Load", preload);
// game.state.add("Game", dungeonCreater);
//
// game.state.start("Load");

function preload() {
  // var loadingLabel = game.add.text(80, 150, "Loading...", {font: "30px Arial", fill: "#fff"});

  game.load.image("wall", "./assets/wall.png");
  game.load.image("floor", "./assets/floor.png");
  // game.load.image('player', './assets/player.png');

}

function create() {
  // cursors = game.input.keyboard.createCursorKeys();

  game.state.start("Game");
}

function update() {
  // game.physics.arcade.collide(player, walls);
  //
  // if (cursors.left.isDown) {
  //   player.body.velocity.x = -175;
  // } else if (cursors.right.isDown) {
  //   player.body.velocity.x = 175;
  // } else {
  //   player.body.velocity = 0;
  // }
  //
  // if (cursors.up.isDown) {
  //   player.body.velocity.y = -175;
  // } else if (cursors.down.isDown) {
  //   player.body.velocity.y = 175;
  // } else {
  //   player.body.velocity = 0;
  // }
}

var dungeonCreater = function() {
  game.physics.startSystem(Phaser.Physics.ARCADE);

  walls = game.add.group();
  walls.enableBody = true;
  wall.body.immovable = true;


  floors = game.add.group();
  roomMax = 10;
  roomMin = 5;
  roomNum = 10;

  // player = {};
  //
  // player = game.add.sprite(player.x, player.y, "player");
  // player.anchor.setTo(0.5);
  // game.physics.arcade.enable(player);
  // player.body.setSize(13,13);

  createMap();
};

var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var room = function(x, y, w, h) {
  x1 = x;
  y1 = y;
  x2 = x+w;
  y2 = y+h;

  var xCenter = (x1 + x2)/2;
  var yCenter = (y1 + y2)/2;
  center_coordinates = {x: x_center, y: y_center};
};

var createFloor = function(x1, x2, y1, y2) {
  floor = floors.create(x, y, "floor");
  game.physics.arcade.enable(floor);
  game.physics.arcade.overlap(floor, walls, function(floor, wall) {
    wall.destroy();
  });
};

var createRoom = function(x1, x2, y1, y2) {
  for (var x=x1; x<x2; x+=16) {
    createFloor(x, y);
  }
};

var hTunnel = function(x1, x2, y) {
  var min = Math.min(x1, x2);
  var max = Math.max(x1, x2);
  for (var x = min; x<max+8; x+=8) {
    createFloor(x, y);
  }
};

var vTunnel = function(y1, y2, x) {
  var min = Math.min(y1, y2);
  var max = Math.max(y1, y2);
  for (var y = min; y<max+8; y+=8) {
    createFloor(x, y);
  }
};

var createMap = function() {
  for (var y=0; y<game.world.height; y+= 16) {
    for (var x=0; x<game.world.width; x+=16) {
      var wall = walls.create(x, y, "wall");
    }
  }
  for (var r=0; r<roomMax; r+=1) {
    var w = getRandom(roomMin, roomMax) * 16;
    var h = getRandom(roomMin, roomMax) * 16;

    x = getRandom(1, ((game.world.width) / 16) - (w/16 + 1)) * 16;
    y = getRandom(1, ((game.world.height) / 16) - (w/16 + 1)) * 16;

    createRoom(x, x+w, y, y+h);

    if (roomNum === 0) {
      player.x = x + (w/2);
      player.y = y + (h/2);
    } else {
       newX = math.snapToFloor(x + (w/2), 16);
       newY = math.snapToFloor(y + (h/2), 16);

       oldX = math.snapToFloor(lastRoomCoordinates.x, 16);
       oldY = math.snapToFloor(lastRoomCoordinates.y, 16);

       hTunnel(oldX, newX, oldY, newY);
       vTunnel(oldY, newY, newX);
    }
    lastRoomCoordinates = {x: x + (w/2), y: y + (h/2)};
    roomNum +=1;
  }
};
