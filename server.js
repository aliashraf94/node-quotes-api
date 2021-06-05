const express = require("express");
const app = express();
app.use(express.json())

const quotes = require("./quotes.json");

app.get('/', function(request, response) {
  response.send('/quotes/17 should return one quote, by id')
});

app.get("/quotes", function(request, response){
  response.status(200).send(quotes);
});

//  Get - Get quote by id

app.get("/quotes/:id", function(request, response){
  const id = parseInt(request.params.id)
  const quoteByID = quotes.filter((each)=>{
    return each.id == id
  })

  response.status(200).send(quoteByID);
});

// Post - Create a new Object with automatic new id generator

app.post("/quotes", function(request, response){
  const lastObject = quotes[quotes.length -1]
  const idGenerator = lastObject.id + 1
  
  const quote = request.body.quote
  const author = request.body.author

  const newQuote = {
    quote: quote,
    author: author,
    id: idGenerator
  }

  quotes.push(newQuote)

  response.status(201).send(newQuote);
});


app.listen(3000, () => console.log("Listening on port 3000"));
