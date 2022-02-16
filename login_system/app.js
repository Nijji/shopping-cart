//modules
const express = require('express')
const app= express()
const port =process.env.PORT||3000
const path=require('path')
const bodyparser=require('body-parser')
const session=require('express-session')
const expressValidator=require('express-validator')
//const {v4:uuidv4} =require('uuid')
const router=require('./routes/pages')
const fs=require('fs')
const mongoose=require('mongoose')
const config=require('./config/database')

//connect to db
//mongoose.connect(config.database)
// const db=mongoose.connection
//  db.on('error',console.error.bind(console,'console error!'))
//  db.once('open',()=>{
//      console.log('connected to mongodb');
//  })

//bodyparser middleware
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

//session middleware
app.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized:true,
    cookie:{secure:true}
}))

//validator middleware
// app.use(expressValidator({
//     errorformatter:function (param,msg,value) {
//        var namespace=param.split('.') ,
//        root=namespace.shift(),
//        formParam=root

//     while (namespace.length) {
//         formParam+='['+ namespace.shift() +']'
//     }
//     return{
//         param:formParam,
//         msg:msg,
//         value:value
//     }
//     }
// }))

//messages middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

//viewtemplate
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

//load public folder
app.use('/static',express.static(path.join(__dirname,'public')))
app.use('/assets',express.static(path.join(__dirname,'public/assets')))

//set routes

var pages=require('./routes/pages.js')
var admin=require('./routes/admin.js')

app.use('/',router)
app.use('/route',router)
app.use('/admin/pages',admin)

//start server
app.listen(port,()=>{
    console.log( `started the server on http://localhost:${port}`)
})