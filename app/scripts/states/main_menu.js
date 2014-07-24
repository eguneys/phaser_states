'use strict';

define(['phaser'], function(Phaser) {
    function MainMenuState() {}

    MainMenuState.prototype = {
        create: function() {
            this.enterKey = this.game.input.keyboard
                .addKey(Phaser.Keyboard.ENTER);

            this.enterKey.onDown.add(this.tweenPlayState, this);
        },

        tweenPlayState: function() {
            var tweenMenuShrink = this.game.add.tween({})
                    .to({x: 0, y: 0}, 200);

            var tweenFadeIn = this.game.add.tween({})
                    .to({alpha: 1}, 2000);

            tweenFadeIn.onComplete.add(function() {
                this.game.state.start('level-master');
            }, this);
            
            tweenMenuShrink.chain(tweenFadeIn);
            tweenMenuShrink.start();
        }
    };

    return MainMenuState;
});
