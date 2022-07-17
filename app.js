// npmjs.com => to get your packages
/**
 * npm init => package.json => I can edit it later
 * go to => npmjs.com => write name of packages then follow instructions
 * npm install express => BOTH [ package-lock / node_modules ]   
 * or npm i express --save
 * --save to work on all levels, to work on development --dev
*/

// express => framework => alot of modules
const express = require('express');

// express() => contain all needs on your server
// save it on variable
// now => app === server
const app = express();
// =======================
// call our endpoints == routes
// import it
const myRouter = require('./routes/products');
// =======================
// convert data to json
const bodyParser = require('body-parser');
// ====================
// conncet with db
const mongoose = require('mongoose');
// ====================
const cors = require('cors');

// ====================
// Allow access middle ware
app.use(cors());
// ====================
// Body parser & MiddleWare
// we need change our body to json
// npm i body-parser --save
// we can use route but to change all we write as this
app.use(bodyParser.json());
// Middleware
app.use('/products',myRouter); // according method I use

// from mogodb => db => connect => connect your appllication
// copy url & name&pass


// url= mongodb+srv://btoo:<password>@myapi.5p548.mongodb.net/?retryWrites=true&w=majority
// change <password>
// after mongodb.net/<your db name you eant>?
mongoose.connect('mongodb+srv://btoo:s8PXzNiXZYKbrq9U@myapi.5p548.mongodb.net/myDb?retryWrites=true&w=majority',()=>{
    console.log('connected to mongodb');
    // if I want my server start after connected to database
    // write it here
    // ====================

// =============================
// port number should be dynamic to upload to server host
// if app have same port not run 
// use => process.env.PORT || 8080 => to put default port
// write them instade of 8080
// ==============================
app.listen(process.env.Port || 8080,()=>{
    // Cannot GET / => we not make route till now
    // endpoint === route
    console.log('server is running on port 8080');
});


});



// =======================
// test your Api by postman or thunder

// we need server continous work & update => sudo npm install -g nodemon
// now we run by => nodemon app.js rather than node app.js
// it auto save and upload your server

// go to package.json => add to its scripts start line 
// take our nodemon order => "start":"nodemon app.js"
// now we can run it by => npm start


// ===============
// mongodb  => user == btoo , pass = s8PXzNiXZYKbrq9U
// https://cloud.mongodb.com/v2/62d2d4e3645a5a6c6b086607#security/network
// we can adjust ips & security => add ip access from any where
// install => npm i mongoose --save