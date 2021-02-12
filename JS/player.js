class Player{
    constructor(){

    }

    getCount(){
        var PCref = database.ref('playerCount')
        PCref.on("value", function (data){
            playerCount = data.val()
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount: count
        })
    }

    update(name){
     var PIndex = "player" + playerCount
     database.ref(PIndex).set({
         name: name
     })
    }
}