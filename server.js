const dotenv = require("dotenv").config();

const {errorHandler} = require('./middleWare/errorMiddleware')
const express = require("express");
const connectDB = require('./config/db')
const cors=require("cors");
const port = process.env.PORT || 3001;
const app = express();


const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors(corsOptions)) ;


connectDB();

app.use('/api/news', require('./routes/newsRoute'));
app.use(errorHandler);





app.listen(port, ()=> console.log("server started on "+ port));