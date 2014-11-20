var main = {
    preload: function () {
        // start or space at top of page
        // assets
        //load paddle image
        game.load.image('paddle','assets/paddle.png');
    },
    create: function () {
        //start part 2 start area for code
        // display/ sprites
        //
        //create a vriable to handle the arrow keys
        this.cursor = game.input.keboard.createCurserKeys();
    },
    update: function () {
        //update 60fps
        //main loop
    },
};

//initialize phaser, and start our main state
var game = new Phaser.Game(400,450, Phaser.AUTO, 'gameDiv');
game.state.add('main',main);
game.state.start('main');