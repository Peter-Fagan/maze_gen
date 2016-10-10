var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

// var player;
var wall;
var floor;
var map;

function preload() {
    game.load.image('wall', "./assets/wall.png");
    game.load.image('floor', "./assets/floor.png");
    // game.load.image('player', './assets/player.png');
}

function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);
  cursors = game.input.keyboard.createCursorKeys();

  this.map = new Map('floor', 'wall', 3, 6, 10);

  // walls = game.add.group();
  // walls.enableBody = true;
  // wall.body.immovable = true;
  //
  //
  // floors = game.add.group();
  // roomMax = 10;
  // roomMin = 5;
  // roomNum = 10;
  //
  // player = {};
  //
  // player = game.add.sprite(13, player.x, player.y, "player");
  //
  // player.anchor.setTo(0.5);
  // game.physics.arcade.enable(player);
  // this.player.body.setSize(13, 13);
  //
  // createMap();

}

function update() {
  // game.physics.arcade.collide(this.player, this.map.walls);
  //
  // player.body.velocity = 0;
  //
  // if (cursors.left.isDown) {
  //   player.body.velocity.x = -175;
  // } else if (cursors.right.isDown) {
  //   player.body.velocity.x = 175;
  // } else {
  //   player.body.velocity = 0;
  // }

  // if (cursors.up.isDown) {
  //   player.body.velocity.y = -175;
  // } else if (cursors.down.isDown) {
  //   player.body.velocity.y = 175;
  // } else {
  //   player.body.velocity = 0;
  // }
}
