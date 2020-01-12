const express = require("express");

const server = express();

server.get("/weather", (request, response) => {
    response.send("Cool Weather!");
})
server.get("/", (request, response) => {
    response.send("Wellcome to our Meterology Website");
})
server.get("/weather-by-city/:city", (request, response) => {
    const city = request.params.city;
    response.send("It is cool weather in " + city + " Tonight");
})
server.listen(3000, () => console.log("Listening on http://localhost:3000"));
