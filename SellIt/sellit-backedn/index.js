const express=require('express')
const bodyParser =require('body-parser');
const cors=require('cors')
const app=express()
const mysql=require('mysql')
const dotenv = require("dotenv");
dotenv.config();

//import product_page routes
const product = require("./src/routes/product.route");

const db=require("./config/db.config"); 

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api/product',product);


app.get('/',(req,res)=>{

    // const sqlInsert="insert into customer (cust_id,name,telephone) values (1,'Ashok',762786479);"
    // db.query(sqlInsert,(err,result)=>{
    //    res.send(err);
    // })
    res.send("result");
})

app.listen(3001,()=>{
    console.log('running on port 3001');
})