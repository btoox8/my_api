// to call routes use express framwork
const express=require('express');

// router => global
const router = express.Router(); // function

// =============================
// connect our model to its route
const Product = require('../models/products');


// =============================

// MiddleWare => use() == we can say its function calling with every request
// work with every req & res & next
// so middleware number == requests
// I need it work with certain route =>
// if write use('/') => not get your response
// app.use('/products',(req,res,next)=>{
//     console.log('middle ware was called');
//     // use next to make it able to go to next job => here === app.get()
//     next(); 
// });

// group of links enables you to deal with db
/**
 * post
 * patch => update
 * get
 */
// =====================
// get [** ordinary]
// =====================

// get :: => take your rote & callback (req,res)
// becareful when using route => copy route from your file to test it 
// & avoid spelling errors

// router.get('/products',(req,res)=>{ // this write on app == /products
//     router.get('/',(req,res)=>{
//         // we can use send instead of write
//     // res.send('<h1>its product page</h1>');

//     // we need use json not html for our dart
//     // json is map
//     // don't use [''] to write json => use [""] 
//     // add status to our res => when it true called json
//     res.status(200).json({
//         "name":"Mohammed elrayeh",
//         "age": 32,
//         "country": "sudan" // last item may end with [,] but better not writ it
//     });
// }); 

// =====================
// get => DB
// =====================
// Product is class from our model
// data => data from our DB
router.get('/',(req,res)=>{
    Product.find().then((data)=>{
        res.json(data);
    });
});
// test our get => /products
// we can use async & await instead of .then()
// =====================
// Post => request [** ordinary]
// =====================

// to test post we write it inside our thunder or postman
// router.post('/',(req,res)=>{ 
//     // router.post('/myProduct',(req,res)=>{  // ==> '/products/myProduct',myRouter
//     // use Reuest
//     // we need change our body to json from our app.js file

//     // we need these variables to assign value of map bellow
//     const name = req.body.name;
//     const price = req.body.price;
//     // now use res
//     res.status(201).json({
//         "message":"product created successful",
//         "data": {
//             "name":name,
//             "price":price 
//         }
//     });
// }); 

//===========================
// Post => request [to DB]
// =====================

router.post('/',(req,res)=>{ 
    const product = new Product({
        title:req.body.title,
        desc:req.body.desc,
        color:req.body.color
    });

    // we need save them
    // save()=> it back Promise js, but I want json
    product.save().then((data)=>{
        res.json({
            "message":"product created successfully",
            // back data also
            "data":data
            // test it by thunder => post
        })
    });  
});
// paste this map to test your post =>
// {
//     "title":"phone",
//     "desc":"old",
//     "color":"black"

// }

//===========================
// delete => element by id
// =====================
//===========================
// thunder can call post from => body :
// [1] json => write map 
// [2] form => fields & its value =. not work here 

// export our module
module.exports = router;