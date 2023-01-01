import "phaser";

export class Config {
  _config: Phaser.Types.Core.GameConfig;
  constructor(scene: any) {
    this._config.type = Phaser.AUTO;
    this._config.backgroundColor = "#125555";
    this._config.width = window.innerWidth;
    this._config.height = window.innerHeight;
    this._config.scene = scene;
  }
  get config(): Phaser.Types.Core.GameConfig {
    return this._config;
  }
}
