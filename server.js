const express = require("express");
const app = express();

const quotes = require("./quotes.json");

app.get('/', function(request, response) {
  response.send('/quotes/17 should return one quote, by id')
});

app.get("/quotes", function(request, response){
  response.status(200).send(quotes);
});

app.get("/quotes/:id", function(request, response){
  const id = parseInt(request.params.id)
  const quoteByID = quotes.filter((each)=>{
    return each.id == id
  })

  response.status(200).send(quoteByID);
});

app.listen(3000, () => console.log("Listening on port 3000"));
