// --express import --//
const express = require("express");
// --cors import --//
const cors = require("cors");

// --import body parser -//
const bodyParser = require('body-parser')
// --create express application --//
const app = express();

// --use cors --//
app.use(cors())
// use body parser --//
app.use(bodyParser.json())
const users = ['nishat','muktar','hasan','nusrat','ripu']

// --create get api for getting data load from server --//
app.get("/", function (req, res) {
  const fruits = {
    dry: "drycake",
    vitamin: "orange",
    meat: "beef",
    drink: "orange juice",
  };
  res.send(fruits);
});

app.get("/fruits/banana", (req, res) => {
  res.send({ fruit: "banana", quantity: "1000", price: "10000 tk" });
});

app.get('/users/:id',(req,res) => {
    // console.log(req.params);
    const id = req.params.id;  //--read the user id --//
    const name = users[id];    // --find the information from array according to user req id --//
    res.send({id,name});   //--response user req --//
})

// --create post api for sending data to a server to create/update a resourses -- //
app.post('/addUsers',(req, res) =>{
  // console.log('data received',req.body);
  // save to database
  const user = req.body;
  user.id = 55;
  // res.send(req.body);
  res.send(user);
})





// --server run koranu bah server create kora --//
app.listen(3000, () => console.log("listening on port 3000"));
