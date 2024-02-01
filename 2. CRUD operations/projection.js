// projecting only the names of all passengers
db.passengers.find({},
{
    name: 1,
    _id: 0
}).pretty();

// projecting the hobbies of one specific passenger
db.passengers.findOne({name:'Albert Twostone'}).hobbies;

// finding all passengers with the specified hobby
db.passengers.find({hobbies:"cooking"}).pretty()


