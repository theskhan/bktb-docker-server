var express = require("express");
var faker = require("faker");
var cors = require('cors');

var app = express();

app.use(cors());

app.get("/users", function (req, res) {
    var users = [];

    for (i = 0; i < 50; i++) {
        users.push({
            id: i,
            name: faker.name.findName(),
            address: faker.address.streetAddress() + ", " + faker.address.city() + ", " + faker.address.country()
        })
    }

    res.json(users);
})

app.get("/", function (req, res) {
    res.json({
        message: "success"
    })
})

app.listen(8001, function () {
    console.log("Server listening on port 8001");
})