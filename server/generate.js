var faker = require('faker');

var database = { persons: []};

for (var i = 1; i<= 300; i++) {
  database.persons.push({
    id: i,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
     emailAddress: faker.internet.email()
  });
}

console.log(JSON.stringify(database));
