'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
            console.log('[preload] preloading assets');

            // images

            this.game.load.image('asteroid', 'images/asteroid.png');
            this.game.load.image('background', 'images/background.png');
            this.game.load.image('comet', 'images/comet.png');
            this.game.load.image('earth', 'images/earth.png');
            this.game.load.image('barrier', 'images/barrier.png');
            this.game.load.image('barrier-full', 'images/barrier-full.png');

            this.game.load.image('btn-humanity', 'images/button-humanity.png');
            this.game.load.image('btn-universe', 'images/button-universe.png');
            this.game.load.image('btn-play', 'images/button-play.png');

            // Sprite sheets

            // this.game.load.spritesheet('sheet', 'images/sheet.png', 44, 44, 30);

            // audio

            this.game.load.audio('AsteroidHit1', 'sounds/Effects/Effect_AsteroidHit1.ogg');
            this.game.load.audio('AsteroidHit2', 'sounds/Effects/Effect_AsteroidHit2.ogg');
            this.game.load.audio('ButtonTap', 'sounds/Effects/Effect_ButtonTap.ogg');
            this.game.load.audio('Random', 'sounds/Effects/Effect_Random.ogg');
            this.game.load.audio('Siren', 'sounds/Effects/Effect_Siren.ogg');
            this.game.load.audio('MenuMusic', 'sounds/Songs/MainMenu_Track.ogg');
            this.game.load.audio('PlayMusic', 'sounds/Songs/Playing_Track.ogg');

            // shaders

            // this.game.load.text('portal-frag' , 'shaders/portal.frag');
        }
    }, {
        key: 'create',
        value: function create() {
            this.state.start('MenuState');
        }
    }]);

    return PreloadState;
}(Phaser.State);