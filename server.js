const express = require('express');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware')
const colors = require('colors')
const connectDB = require('./config/db')
// const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const cors = require('cors');



connectDB();

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
// mongoose.connect('mongodb://localhost:27017',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }
// );
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//   console.log("Connected successfully");
// });

app.use('/api/goals', require('./routes/goalsRoutes'))

app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`server running at port ${port}`);
})