// set game configuration
var w = 1000;
var h = 1000;

let config = {
  type: Phaser.WEBGL,
  width: w,
  height: h,
  scene: [preloadScene, gameScene],
  pixelArt: false,
  scale: {
    parent: "phaser-app",
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: w,
    height: h,
  },

  backgroundColor: 0x0c23a7,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 1000 },
      //debug: true,
    },
  },
};

//create new game and send configuration

let game = new Phaser.Game(config);
