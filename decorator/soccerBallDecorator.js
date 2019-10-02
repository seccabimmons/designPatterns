function decorate(myBall){
    //Decorating a soccer ball
    myBall.addColor = function(color){
        myBall.color = color;
        console.log(myBall.color);
    };
    myBall.addHat = function(hatType){
        myBall.hat = hatType;
        console.log(myBall.hat);
    };
    myBall.addText =function(ballGraffiti){
        myBall.ballWords = ballGraffiti;
        console.log(myBall.ballWords);
    };
    myBall.deflatedALittleBit = function(){
        myBall.deflateGate = true;
        console.log(myBall.deflateGate);
    };
    myBall.notDeflated = function(){
        myBall.deflateGate = false;
        console.log(myBall.deflateGate);
    return myBall;
}
}

var lucilleBall = {};

decorate(lucilleBall);

lucilleBall.addColor("Gray");
//console.log(lucilleBall.color);
lucilleBall.addHat("Pork Pie");
//console.log(lucilleBall.hat);
lucilleBall.addText("Nyeah, see.");
//console.log(lucilleBall.ballWords);
lucilleBall.deflatedALittleBit();
//console.log(lucilleBall.deflateGate);