'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuState = function (_Phaser$State) {
    _inherits(MenuState, _Phaser$State);

    function MenuState() {
        _classCallCheck(this, MenuState);

        return _possibleConstructorReturn(this, (MenuState.__proto__ || Object.getPrototypeOf(MenuState)).apply(this, arguments));
    }

    _createClass(MenuState, [{
        key: 'create',
        value: function create() {
            console.log('[menu] showing main menu');

            if (config.SKIP_MENU) {
                this.next();
            }

            this.music = this.game.add.audio('MenuMusic');
            this.music.play();

            var bg = this.game.add.sprite(0, 0, 'background');
            bg.tint = 0x3f3f3f;

            this.scoreText = game.add.text(game.world.centerX, 4, "MAIN MENU", { fill: "#ffffff", align: "center" });
            this.scoreText.fontSize = 124;
            this.scoreText.anchor.set(0.5, 0);

            var btnHum = game.add.button(game.world.centerX - 160, game.world.height - 80, 'btn-play', this.next, this);
            btnHum.anchor.set(0.5, 1);
        }
    }, {
        key: 'next',
        value: function next() {
            this.game.stateTransition.to('PlayState');
        }
    }, {
        key: 'shutdown',
        value: function shutdown() {
            this.music.stop();
        }
    }, {
        key: 'story',
        value: function story() {
            return 'There is nowhere else, at least in the near future, to which our species could migrate... Like it or not, for the moment the Earth is where we make our stand.';
        }
    }]);

    return MenuState;
}(Phaser.State);