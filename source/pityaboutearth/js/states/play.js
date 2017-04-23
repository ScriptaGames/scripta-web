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
        key: 'create',
        value: function create() {
            var _this2 = this;

            console.log('[play] starting play state');

            // for easy access to this state for debugging in browser console
            window.play = this;

            this.createBackground();
            this.createSounds();

            this.createActors();

            this.playMusic();

            setInterval(function () {
                return _this2.createAsteroid();
            }, 1000);
            setInterval(function () {
                return _this2.createComet();
            }, 5000);
        }
    }, {
        key: 'update',
        value: function update() {
            this.updateCelestials();
            this.updateCollisions();
            this.updateBarrierRotation();
        }
    }, {
        key: 'render',
        value: function render() {
            // this.game.debug.body(this.actors.earth);
            // this.game.debug.body(this.actors.barrier);
            // this.actors.asteroids.forEach(this.game.debug.body.bind(this.game.debug));
            // this.actors.comets.forEach(this.game.debug.body.bind(this.game.debug));
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
                asteroids: this.game.add.group(),
                comets: this.game.add.group()
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
            return this.game.add.sprite(0, 0, 'background');
        }
    }, {
        key: 'createEarth',
        value: function createEarth() {
            var _this3 = this;

            console.log('[play] creating earth');
            var earth = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'earth');

            this.game.physics.arcade.enableBody(earth);
            earth.body.setCircle(earth.width / 2);
            earth.body.immovable = true;

            earth.anchor.set(0.5, 0.5);
            // DEBUG
            earth.inputEnabled = true;
            earth.events.onInputDown.add(function () {
                return _this3.sounds.Siren.play();
            }, this);

            return earth;
        }
    }, {
        key: 'createAsteroid',
        value: function createAsteroid() {
            return this.createCelestial('asteroid');
        }
    }, {
        key: 'createComet',
        value: function createComet() {
            return this.createCelestial('comet');
        }
    }, {
        key: 'createCelestial',
        value: function createCelestial(type) {
            var frameRange = void 0;
            var group = void 0;
            switch (type.toLowerCase()) {
                case 'asteroid':
                    frameRange = 4;
                    group = this.actors.asteroids;
                    break;
                case 'comet':
                    frameRange = 2;
                    group = this.actors.comets;
                    break;
                default:
                    frameRange = 4;
                    group = this.actors.asteroids;
            }

            var point = this.getRandomOffscreenPoint();
            var celestial = this.game.add.sprite(point.x, point.y, type + '-sheet', Math.floor(Math.random() * frameRange));
            celestial.anchor.set(0.5, 0.5);
            celestial.bringToTop();

            this.game.physics.arcade.enableBody(celestial);
            celestial.body.setCircle(celestial.width / 2);
            celestial.body.velocity.set(Math.random() * 40, Math.random() * 40);
            celestial.body.angularVelocity = 2 * (12 * Math.random() - 6);
            celestial.body.bounce.set(1.0, 1.0);

            group.add(celestial);

            return celestial;
        }
    }, {
        key: 'createBarrier',
        value: function createBarrier() {
            var barrier = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'barrier');
            // barrier.scale.set(10, 10);
            barrier.anchor.set(0.5, 0.5);

            this.game.physics.arcade.enableBody(barrier);
            barrier.body.setCircle(barrier.width / 2);
            barrier.body.immovable = true;

            return barrier;
        }

        /* update functions */

    }, {
        key: 'updateCollisions',
        value: function updateCollisions() {
            this.game.physics.arcade.collide(this.actors.barrier, [this.actors.asteroids, this.actors.comets], this.deflectCelestial, this.barrierOverlap, this);
            this.game.physics.arcade.collide(this.actors.earth, this.actors.asteroids, this.asteroidStrike, null, this);
            this.game.physics.arcade.collide(this.actors.earth, this.actors.comets, this.cometStrike, null, this);
        }
    }, {
        key: 'updateBarrierRotation',
        value: function updateBarrierRotation() {
            var x = this.game.input.mousePointer.x - this.actors.barrier.position.x;
            var y = this.game.input.mousePointer.y - this.actors.barrier.position.y;
            var angle = -1 * Math.atan(x / y) + 2 * Math.PI;
            if (y > 0) {
                angle += Math.PI;
            }
            this.actors.barrier.rotation = angle;
        }
    }, {
        key: 'updateCelestials',
        value: function updateCelestials() {
            var _this4 = this;

            this.actors.asteroids.forEach(function (ast) {
                if (!ast.data.deflected) {
                    _this4.game.physics.arcade.accelerateToObject(ast, _this4.actors.earth);
                }
            });
            this.actors.comets.forEach(function (com) {
                if (!com.data.deflected) {
                    _this4.game.physics.arcade.accelerateToObject(com, _this4.actors.earth);
                }
            });
        }

        /* misc functions */

    }, {
        key: 'asteroidStrike',
        value: function asteroidStrike(earth, asteroid) {
            console.log('[play] asteroid strike');
            this.sounds.AsteroidHit1.play();
            asteroid.destroy();
            this.game.camera.shake(config.ASTEROID_CAM_SHAKE_AMOUNT, config.ASTEROID_CAM_SHAKE_DURATION_MS);
        }
    }, {
        key: 'deflectCelestial',
        value: function deflectCelestial(barrier, cel) {
            console.log('[play] celestial deflect');
            cel.data.deflected = true;
            cel.destroy();
        }
    }, {
        key: 'barrierOverlap',
        value: function barrierOverlap(barrier, celestial) {
            // find the angle between the barrier's center and the point where the
            // asteroid is touching

            var celPoint = celestial.position.clone().subtract(this.game.world.centerX, this.game.world.centerY).normalize();
            var barPoint = this.game.input.mousePointer.position.clone().subtract(this.game.world.centerX, this.game.world.centerY).normalize();

            var distance = barPoint.distance(celPoint);

            return distance < config.BARRIER_WIDTH;
        }
    }, {
        key: 'cometStrike',
        value: function cometStrike(earth, comet) {
            console.log('[play] comet strike');
            this.sounds.AsteroidHit2.play();
            comet.destroy();
            this.game.camera.shake(config.COMET_CAM_SHAKE_AMOUNT, config.COMET_CAM_SHAKE_DURATION_MS);
        }
    }, {
        key: 'playMusic',
        value: function playMusic() {
            this.sounds.PlayMusic.fadeIn(300);
        }
    }, {
        key: 'getRandomOffscreenPoint',
        value: function getRandomOffscreenPoint() {
            var self = this;
            var padding = 200;

            var functions = [function () {
                // LEFT
                var x = -padding;
                var y = self.game.rnd.between(0, self.game.world.height);
                return { x: x, y: y };
            }, function () {
                // RIGHT
                var x = self.game.world.width + padding;
                var y = self.game.rnd.between(0, self.game.world.height);
                return { x: x, y: y };
            }, function () {
                // TOP
                var x = self.game.rnd.between(0, self.game.world.width);
                var y = -padding;
                return { x: x, y: y };
            }, function () {
                // BOTTOM
                var x = self.game.rnd.between(0, self.game.world.width);
                var y = self.game.world.height + padding;
                return { x: x, y: y };
            }];

            var f = functions[self.game.rnd.between(0, functions.length - 1)];

            return f();
        }
    }]);

    return PlayState;
}(Phaser.State);