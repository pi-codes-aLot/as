class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html("car racing game");
        title.position(200, 0);

        var input = createInput("Name");
        var button = createButton("PLAY");
        var greeting = createElement('h3');

        input.position(200,160);
        button.position(250,200);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();

            playerCount += 1
            player.update(name)
            player.updateCount(playerCount)
            greeting.html("Welcome, " + name)
            greeting.position(200, 160)
        })
    }
}
