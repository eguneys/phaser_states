'use strict';

define(['phaser'], function(Phaser) {
    function MainIntroState() {}

    MainIntroState.prototype = {
        create: function() {
            this.tweenFadeState();
        },
        
        tweenFadeState: function() {
            this.game.add.tween({})
                .to({alpha: 1}, 2000)
                .onComplete.add(function() {
                    this.game.state.start('main-menu');
                }, this);
        }
    };

    return MainIntroState;
});
