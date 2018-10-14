const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//express and bodyParser used in this test

const items = require('./routes/api/items');


const app = express();

//bodyParser Middleware
app.use(bodyParser.json());

//database config
const db = require('./config/keys').mongoURI;//mlab URI

//connect to mongo db
mongoose.connect(db)
    .then(()=>{
        console.log("mongoDB connected")
    })
    .catch(err=>console.log(err));


//use routes
app.use('/api/items', items);//all the routes to /api/items will go to /api/item.js

const port = process.env.PORT || 8080;

app.listen(port,()=>console.log(`Server started on port ${port}`));