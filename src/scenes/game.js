class gameScene extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  init() {}

  preload() {}

  create() {

    //use our global for easy scene access
    scene = this;
    //create physics groups with pre-configured settings for group members
    this.walls = this.physics.add.group({
      immovable: true,
      allowGravity: false,
    });

    this.coins = this.physics.add.group({
      allowGravity: false,
    });


    //create the maze
    this.buildLevel();

    //create the player
    this.physics.add.collider(this.player.sprite, this.walls);
   
    //create overlap to pick up coins
    this.physics.add.overlap(
      this.player.sprite,
      this.coins,
      function (player, coin) {
        coin.parentObject.collect();
      }
    );
  }

  update() {
    //run player's update function inside scene's update()
    this.player.update();
   
   //end level when all coins collected
    if (this.coins.children.entries.length === 0) {
      currentLevel++;
      this.scene.restart();
    }
  }

  buildLevel() {
    let x = 0;
    let y = 0;

    //iterate through each entry in LEVELS
    let level = LEVELS[currentLevel];


    for (let i = 0; i < level.length; i++) {
      if (level[i] === 1) {
        //place flooor and coins on 1
        console.log("building floor", x, y);
        let floor = this.add.sprite(x, y, "floor").setOrigin(0);
        let coin = new Coin(x + floor.width / 2, y + floor.height / 2);
        this.coins.add(coin.sprite);
      } else if (level[i] === 0){

        //create walls on 0
        let wall = this.physics.add.sprite(x, y, "wall").setOrigin(0);
        this.walls.add(wall);
        console.log("building wall", x, y);
      }
      else if (level[i] === 2) {
        //place player on 2
        console.log("building player", x, y);
        let floor = this.add.sprite(x, y, "floor").setOrigin(0);
        this.player = new Player(x+50, y+50);
      }
      //check for end of row/column and reposition
      x += 100;
      if (x === 1000) {
        x = 0;
        y += 100;
      }
    }
  }
}
