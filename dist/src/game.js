var global = window;

import { __extends } from '../node_modules/tslib/tslib.es6.js';
import '../node_modules/phaser/src/phaser.js';
import { Config } from './Config.class2.js';

var Demo = /** @class */ (function (_super) {
    __extends(Demo, _super);
    function Demo() {
        return _super.call(this, "demo") || this;
    }
    Demo.prototype.preload = function () {
        this.load.image("logo", "assets/phaser3-logo.png");
        this.load.image("libs", "assets/libs.png");
        this.load.glsl("bundle", "assets/plasma-bundle.glsl.js");
        this.load.glsl("stars", "assets/starfields.glsl.js");
    };
    Demo.prototype.create = function () {
        this.add.shader("RGB Shift Field", 0, 0, 800, 600).setOrigin(0);
        this.add.shader("Plasma", 0, 412, 800, 172).setOrigin(0);
        this.add.image(400, 300, "libs");
        var logo = this.add.image(400, 70, "logo");
        this.tweens.add({
            targets: logo,
            y: 350,
            duration: 1500,
            ease: "Sine.inOut",
            yoyo: true,
            repeat: -1,
        });
    };
    return Demo;
}(Phaser.Scene));
var config = new Config(Demo).config;
var game = new Phaser.Game(config);
window.addEventListener("resize", function () {
    game.scale.resize(window.innerWidth, window.innerHeight);
});

export default Demo;
