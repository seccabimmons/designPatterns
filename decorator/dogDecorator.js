function dogSearch(myBaby){

    myBaby.chooseBreed = function(breed){
        myBaby.breed = breed;
        console.log(myBaby.breed);
    };
    myBaby.chooseAge = function(age){
        myBaby.age = age;
        console.log(myBaby.age);
    };
    myBaby.chooseSize = function(bigOrSmall){
        myBaby.bigOrSmall = bigOrSmall;
        console.log(myBaby.bigOrSmall);
    };
    myBaby.obedienceSchool = function(){
        myBaby.goodBoy = true;
        console.log(myBaby.goodBoy);
    };
    myBaby.noSchoolin =function(){
        myBaby.goodBoy = false;
        console.log(myBaby.goodBoy);
    };
    myBaby.spayNeuter = function(){
        myBaby.fixed = true;
        console.log(myBaby.fixed);
    };
    myBaby.notFixed = function(){
        myBaby.fixed = false;
        console.log(myBaby.fixed);
    return myBaby;
}
}

var newPuppy = {};

dogSearch(newPuppy);

newPuppy.chooseBreed("King Charles");
newPuppy.chooseAge("12 weeks");
newPuppy.chooseSize("3 lbs");
newPuppy.noSchoolin();
newPuppy.spayNeuter();