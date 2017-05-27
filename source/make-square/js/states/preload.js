'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PreloadState = function (_Phaser$State) {
    _inherits(PreloadState, _Phaser$State);

    function PreloadState() {
        _classCallCheck(this, PreloadState);

        return _possibleConstructorReturn(this, (PreloadState.__proto__ || Object.getPrototypeOf(PreloadState)).apply(this, arguments));
    }

    _createClass(PreloadState, [{
        key: 'preload',
        value: function preload() {
            var _this2 = this;

            console.log('[preload] preloading assets');

            // loading bar

            this.loadingBar = this.game.add.sprite(config.CANVAS_WIDTH / 2 - 300, this.game.world.centerY, 'loading-bar');
            this.load.setPreloadSprite(this.loadingBar);
            this.loadingBar.anchor.set(0, 0.5);

            var assetManifest = {
                image: [['logo', 'images/big/logo.png'], ['intro', 'images/big/intro.png'], ['game-over', 'images/big/game-over.png'], ['playing', 'images/big/playing.png'], ['btn', 'images/big/btn.png']],
                spritesheet: [['btn-play', 'images/big/button-play.png', 64 * 10, 24 * 10]],
                audio: [['music', 'sounds/drumsong.wav.mp3'], ['drum1', 'sounds/drum1.wav.mp3'], ['drum2', 'sounds/drum2.wav.mp3']]
            };

            _.forEach(assetManifest, function (assets, type) {
                _.forEach(assets, function (args) {
                    var _game$load;

                    return (_game$load = _this2.game.load)[type].apply(_game$load, _toConsumableArray(args));
                });
            });
        }
    }, {
        key: 'create',
        value: function create() {
            this.state.start('MenuState');
        }
    }]);

    return PreloadState;
}(Phaser.State);