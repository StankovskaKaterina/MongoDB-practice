// Assignment 1 : The Basics and CRUD Operations

// 1. Insert 3 patient records with at least 1 history entry per patient
db.patient.insertOne({first_name: "Katerina", last_name: "Stankovska", аge:27, history: [{disease: "cold", treatment: "vitamin C", check_up: "in a week" },
        {disease: "Blurred vision", treatment: "Visit an ophthalmologist"}]});

db.patient.insertOne({first_name: "Ada", last_name: "Lovelace", age:36, city:"London", history: [{disease: " uterine cancer", treatment: "opium"}]});

db.patient.insertOne({first_name: "Alan", last_name: "Turing", age:41, city:"London", history: [{disease: "Asperger's syndrome", treatment: "Hormone treatment"}]});

// 2. Update patient data of 1 patient with new age, name and history entry

db.patient.updateOne({first_name:"Katerina"},{$set: {city: "Skopje", first_name:"Kate"}});

// 3. Find all patients who are older than 30
db.patient.find({age: {$gt: 30}});

// Delete all patients who got a cold as a disease
db.patient.deleteMany({"history.disease": "cold"});