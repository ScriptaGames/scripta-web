'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlayState = function (_Phaser$State) {
    _inherits(PlayState, _Phaser$State);

    function PlayState() {
        _classCallCheck(this, PlayState);

        return _possibleConstructorReturn(this, (PlayState.__proto__ || Object.getPrototypeOf(PlayState)).apply(this, arguments));
    }

    _createClass(PlayState, [{
        key: 'init',
        value: function init() {
            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref$playerRole = _ref.playerRole,
                playerRole = _ref$playerRole === undefined ? PlayerRoles.Humanity : _ref$playerRole;

            console.log('[play] playing as ' + playerRole);
            this.playerRole = playerRole;
        }
    }, {
        key: 'create',
        value: function create() {
            console.log('[play] starting play state');

            // for easy access to this state for debugging in browser console
            window.play = this;

            this.createBackground();
            this.createSounds();

            this.createActors();

            this.playMusic();
        }
    }, {
        key: 'update',
        value: function update() {
            this.updateCollisions();
        }
    }, {
        key: 'render',
        value: function render() {
            // for (const block of this.capturedBlocks) {
            //     this.game.debug.body(block);
            // }
            // for (const block of this.blockSprites) {
            //     this.game.debug.body(block);
            // }
            // this.game.debug.body(this.portalIn);
        }
    }, {
        key: 'shutdown',
        value: function shutdown() {}

        /* create functions */

    }, {
        key: 'createActors',
        value: function createActors() {
            this.actors = {
                earth: this.createEarth(),
                barrier: this.createBarrier(),
                // comet and asteroid only populated here for testing
                comets: [this.createComet()],
                asteroids: [this.createAsteroid()]
            };
        }
    }, {
        key: 'createSounds',
        value: function createSounds() {
            this.sounds = {
                AsteroidHit2: this.game.add.audio('AsteroidHit2'),
                AsteroidHit1: this.game.add.audio('AsteroidHit1'),
                ButtonTap: this.game.add.audio('ButtonTap'),
                Random: this.game.add.audio('Random'),
                Siren: this.game.add.audio('Siren'),
                PlayMusic: this.game.add.audio('PlayMusic')
            };
        }
    }, {
        key: 'createBackground',
        value: function createBackground() {
            var bg = this.game.add.sprite(0, 0, 'background');
            bg.scale.set(10, 10);
            return bg;
        }
    }, {
        key: 'createEarth',
        value: function createEarth() {
            var _this2 = this;

            console.log('[play] creating earth');
            var earth = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'earth');
            earth.scale.set(10, 10);
            earth.anchor.set(0.5, 0.5);

            // DEBUG
            earth.inputEnabled = true;
            earth.events.onInputDown.add(function () {
                return _this2.sounds.Siren.play();
            }, this);

            return earth;
        }
    }, {
        key: 'createAsteroid',
        value: function createAsteroid() {
            var _this3 = this;

            var ast = this.game.add.sprite(20, 26, 'asteroid');
            ast.scale.set(10, 10);

            // DEBUG
            ast.inputEnabled = true;
            ast.events.onInputDown.add(function () {
                return _this3.sounds.AsteroidHit1.play();
            }, this);

            return ast;
        }
    }, {
        key: 'createComet',
        value: function createComet() {
            var _this4 = this;

            var com = this.game.add.sprite(220, 26, 'comet');
            com.scale.set(10, 10);

            // DEBUG
            com.inputEnabled = true;
            com.events.onInputDown.add(function () {
                return _this4.sounds.AsteroidHit2.play();
            }, this);

            return com;
        }
    }, {
        key: 'createBarrier',
        value: function createBarrier() {
            var barrier = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'barrier');
            barrier.scale.set(10, 10);
            barrier.anchor.set(0.5, 0.5);
            return barrier;
        }

        /* update functions */

    }, {
        key: 'updateCollisions',
        value: function updateCollisions() {}
        // this.game.physics.arcade.collide(this.portalIn, this.blockSprites, null, this.blockOverlap, this);
        // this.game.physics.arcade.collide(this.fallingVuln, [this.leftWall, this.rightWall]);
        // this.game.physics.arcade.collide(this.portalIn, [this.leftWall, this.rightWall]);
        // this.game.physics.arcade.collide(this.well, this.capturedBlocks, null, this.blockSplash, this);


        /* misc functions */

    }, {
        key: 'playMusic',
        value: function playMusic() {
            this.sounds.PlayMusic.play();
        }
    }]);

    return PlayState;
}(Phaser.State);