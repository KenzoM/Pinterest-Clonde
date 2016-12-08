// Main starting point of the application
const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const port = process.env.PORT || 1234;
const bodyParser = require('body-parser');
const router = require('./router');
const mongoose = require('mongoose');
const db =  "mongodb://localhost:voteapp/voteapp";

const cors = require('cors')

//DB Setup
mongoose.connect(db);

//App Setup
app.use(morgan('combined'));

app.use(cors()) //CORS middleware on express side
// app.use(bodyParser.json({ type: '*/*' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

router(app);


//Server Setup(Express)
app.listen(port,()=>{
  console.log(`Server is listening on ${port}`)
})
