function customize(myCar){

    myCar.addColor = function(color){
        myCar.color = color;
        console.log(myCar.color);
    };
    myCar.chooseMake = function(autoMaker){
        myCar.autoMaker = autoMaker;
        console.log(myCar.autoMaker);
    };
    myCar.chooseModel = function(superModel){
        myCar.superModel = superModel;
        console.log(myCar.superModel);
    };
    myCar.chooseYear = function(whatYear){
        myCar.whatYear = whatYear;
        console.log(myCar.whatYear);
    };
    myCar.extraAmmenities =function(bonusFeatures){
        myCar.bonusFeatures = bonusFeatures;
        console.log(myCar.bonusFeatures);
    };
    myCar.extendedWarranty = function(){
        myCar.esa = true;
        console.log(myCar.esa);
    };
    myCar.noWarranty = function(){
        myCar.esa = false;
        console.log(myCar.esa);
    return myCar;
}
}

var beccaCar = {};

customize(beccaCar);

beccaCar.addColor("Black");
//console.log(beccaCar.color);
beccaCar.chooseMake("Honda");
//console.log(beccaCar.autoMaker);
beccaCar.chooseModel("Element");
//console.log(beccaCar.superModel);
beccaCar.chooseYear(2010);
//console.log(beccaCar.whatYear);
beccaCar.extraAmmenities("XM Radio");
//console.log(beccaCar.bonusFeatures);
beccaCar.noWarranty();
//console.log(beccaCar.esa);