'use strict';

define([], function() {
    function LevelRoundState() {}

    LevelRoundState.prototype = {
        init: function(levelData) {
            this.levelData = levelData;
        },
        
        create: function() {
            this.enterKey = this.game.input.keyboard
                .addKey(Phaser.Keyboard.ENTER);

            this.enterKey.onDown.add(this.roundEnd, this);
        },

        roundEnd: function() {
            this.nextRound();
        },

        nextRound: function() {
            this.game.state.start('level-master', true, false, this.levelData);
        }
    };

    return LevelRoundState;
});
