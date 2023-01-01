var global = window;

import '../node_modules/phaser/src/phaser.js';

var Config = /** @class */ (function () {
    function Config(scene) {
        this._config.type = Phaser.AUTO;
        this._config.backgroundColor = "#125555";
        this._config.width = window.innerWidth;
        this._config.height = window.innerHeight;
        this._config.scene = scene;
    }
    Object.defineProperty(Config.prototype, "config", {
        get: function () {
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    return Config;
}());

export { Config };
