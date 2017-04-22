'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchingState = function (_Phaser$State) {
    _inherits(SearchingState, _Phaser$State);

    function SearchingState() {
        _classCallCheck(this, SearchingState);

        return _possibleConstructorReturn(this, (SearchingState.__proto__ || Object.getPrototypeOf(SearchingState)).apply(this, arguments));
    }

    _createClass(SearchingState, [{
        key: 'init',
        value: function init(_ref) {
            var music = _ref.music;

            this.music = music;
        }
    }, {
        key: 'create',
        value: function create() {
            var _this2 = this;

            console.log('[searching] searching for opponent');

            var bg = this.game.add.sprite(0, 0, 'background');
            bg.scale.set(10, 10);
            bg.tint = 0x3f3f3f;

            this.scoreText = game.add.text(game.world.centerX, 4, 'Searching for opponent...\n(DEBUG: choose a side)', { fill: "#ffffff", align: "center" });
            this.scoreText.fontSize = 64;
            this.scoreText.anchor.set(0.5, 0);

            // this.game.time.events.add(5000, () => this.next(PlayerRoles.Humanity), this);

            var btnHum = game.add.button(game.world.centerX - 160, game.world.height - 80, 'btn-humanity', function () {
                return _this2.next(PlayerRoles.Humanity);
            }, this);
            btnHum.anchor.set(0.5, 1);
            btnHum.scale.set(4, 4);

            var btnUni = game.add.button(game.world.centerX + 160, game.world.height - 80, 'btn-universe', function () {
                return _this2.next(PlayerRoles.Universe);
            }, this);
            btnUni.anchor.set(0.5, 1);
            btnUni.scale.set(4, 4);
        }
    }, {
        key: 'next',
        value: function next(playerRole) {
            this.game.stateTransition.to('PlayState', true, false, { playerRole: playerRole });
        }
    }, {
        key: 'shutdown',
        value: function shutdown() {
            this.music.stop();
        }
    }]);

    return SearchingState;
}(Phaser.State);