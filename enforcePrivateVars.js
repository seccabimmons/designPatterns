function createPerson(name){
    var privateProperties = {};
    var person = {
        setName: function(name){
            if(!name) throw new Error("A person must have a name");
            privateProperties.name = name;
        },
        getName: function(){
            return privateProperties.name;
        }
    };
    person.setName(name);
    return person;
}


console.log(createPerson("fluffy"));

// var dog = {
//     name: "fluffy",
//     size: "large",
//     lbs: 800,
//     breed: "Poodle"
// };