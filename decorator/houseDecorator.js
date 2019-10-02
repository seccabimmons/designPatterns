function decorate(myHouse){

    myHouse.addColor = function(color){
        myHouse.color = color;
        console.log(myHouse.color);
    };
    myHouse.chooseStyle = function(houseType){
        myHouse.layout = houseType;
        console.log(myHouse.layout);
    };
    myHouse.chooseSize = function(squareFeet){
        myHouse.size = squareFeet;
        console.log(myHouse.size);
    };
    myHouse.extraAmmenities =function(bonusFeatures){
        myHouse.extraAmm = bonusFeatures;
        console.log(myHouse.extraAmm);
    };
    myHouse.appliancesIncluded = function(){
        myHouse.hookedUp = true;
        console.log(myHouse.hookedUp);
    };
    myHouse.noAppliances = function(){
        myHouse.hookedUp = false;
        console.log(myHouse.hookedUp);
    return myHouse;
}
}

var beccaHouse = {};

decorate(beccaHouse);

beccaHouse.addColor("Gray");
//console.log(beccaHouse.color);
beccaHouse.chooseStyle("Ranch");
//console.log(beccaHouse.layout);
beccaHouse.chooseSize(850);
//console.log(beccaHouse.size);
beccaHouse.extraAmmenities("Finished attic");
//console.log(beccaHouse.extraAmm);
beccaHouse.appliancesIncluded();
//console.log(beccaHouse.hookedUp);