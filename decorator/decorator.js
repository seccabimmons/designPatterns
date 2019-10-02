function decorate(myObject){
    //Decorating an object
    myObject.addColor = function(color){
        myObject.color = color;
        console.log(myObject.color);
    };
    myObject.addSparkles = function(sparkleColor){
        myObject.sparkles = sparkleColor;
        console.log(myObject.sparkles);
    };
    myObject.addBananaSeat =function(){
        myObject.bananaSeat = true;
        console.log(myObject.bananaSeat);
    };
    myObject.removeBananaSeat = function(){
        myObject.bananaSeat = false;
        console.log(myObject.bananaSeat);
    }
    return myObject;
}

var girlBike = {};
var boyBike = {};

decorate(girlBike);
decorate(boyBike);

girlBike.addColor("pink");
console.log(girlBike.color);
girlBike.addSparkles("silver");
console.log(girlBike.sparkles);
girlBike.addBananaSeat();
console.log(girlBike.bananaSeat);