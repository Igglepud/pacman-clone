class Coin {
  constructor(x, y) {
    this.sprite = scene.add.sprite(x, y, "coin");
    this.sprite.setScale(
      (100 / this.sprite.width) * 0.25,
      (100 / this.sprite.height) * 0.25
    );

    this.sprite.parentObject = this;
    //this.sprite.preFX.addShine(Phaser.Math.FloatBetween(0.5, 1));
  }
  collect() {
    scene.coins.remove(this.sprite);

    this.sprite.destroy();
  }
}
