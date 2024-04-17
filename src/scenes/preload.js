class preloadScene extends Phaser.Scene {
  constructor() {
    super("preload");
  }

  preload() {
    this.load.atlas("man", "assets/man.png", "assets/man.json");

    this.load.image("floor", "assets/floor.png");
    this.load.image("wall", "assets/wall.png");
    this.load.image("coin", "assets/coin.png");
    
  }

  create() {
    this.anims.create({
      repeat: -1,
      frameRate: 15,
      frames: this.anims.generateFrameNames("man", {
        prefix: "__civilian_man_05_idle_",
        start: 0,
        end: 19,
        zeroPad: 3,
      }),
      key: "man_idle",
    });

    this.anims.create({
      repeat: -1,
      frameRate: 15,
      frames: this.anims.generateFrameNames("man", {
        prefix: "__civilian_man_05_die_",
        start: 0,
        end: 4,
        zeroPad: 3,
      }),

      key: "man_die",
    });

    this.anims.create({
      repeat: -1,
      frameRate: 15,
      frames: this.anims.generateFrameNames("man", {
        prefix: "__civilian_man_05_run_",
        start: 0,
        end: 7,
        zeroPad: 3,
      }),

      key: "man_run",
    });


    

    this.scene.start("Game");
  }
}
