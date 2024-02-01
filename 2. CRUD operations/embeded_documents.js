//updating all documents with the specified fields
db.flights.updateMany({}, {$set: {status: {description: "on-time", lastUpdated: "1 hour ago"}}});

//updating all documents with the specified fields
db.flights.updateMany(
    {},
    {$set:
        {status:
            {description: "on-time", lastUpdated: "1 hour ago", details:
                    {responsible: "Katerina S.", location: "Skopje"}
            }
        }
});

// updating one specific passenger with an array field
db.passengers.updateOne(
    {name:'Albert Twostone'},
    {$set:
        {
            hobbies: ["football", "cooking"]
        }
    });

// drilling into embedded data
db.flights.find({"status.description": "on-time"});

db.flights.find({"status.details.responsible": "Katerina S."});