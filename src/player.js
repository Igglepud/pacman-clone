class Player {
  constructor(x, y) {
    this.sprite = scene.physics.add.sprite(
      x,
      y,
      "man",
      "__civilian_man_05_run_000"
    );
    //.play("man_idle");
    this.sprite.body.setAllowGravity(false);
    this.sprite.body.setCollideWorldBounds(true);

    this.sprite.setScale(
      (100 / this.sprite.width) * 0.5,
      (100 / this.sprite.height) * 0.5
    ).setDepth(2);
    this.controls = scene.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.controls.left.isDown) {
      this.sprite.setVelocityX(-200);
      this.sprite.setFlipX(true);
      this.sprite.play("man_run", true);
      this.sprite.angle = -90;
    } else if (this.controls.right.isDown) {
      this.sprite.setVelocityX(200);
      this.sprite.setFlipX(false);
      this.sprite.play("man_run", true);
      this.sprite.angle = 90;
    } else {
      this.sprite.setVelocityX(0);
    }

    if (this.controls.up.isDown) {
      this.sprite.setVelocityY(-200);
      this.sprite.play("man_run", true);
      this.sprite.angle = 0;
    } else if (this.controls.down.isDown) {
      this.sprite.setVelocityY(200);
      this.sprite.play("man_run", true);
      this.sprite.angle = 180;
    } else {
      this.sprite.setVelocityY(0);
    }
    if (
      !this.controls.left.isDown &&
      !this.controls.right.isDown &&
      !this.controls.up.isDown &&
      !this.controls.down.isDown
    ) {
      this.sprite.play("man_idle", true);
    }
  }
}
