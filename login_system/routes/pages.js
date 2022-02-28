
var express=require('express')
var router=express.Router()

//database
// const credential={
//     email:'alwinsenior@outlook.com',
//     password:'Belindaniji6'
// }

//home route
router.get('/',(req,res)=>{
     res.render('index',{
        title:'myshop.com'
     })
  })

// // //login user
// router.post('/login',(req,res)=>{
//     if (req.body.email==credential.email && req.body.password==credential.password){
//         req.session.user=req.body.email
//         //res.end('welcome back to your cart!')
//           res.redirect('/route/dashboard')
// } else {
//          // res.redirect('/route/verify')
//         res.end('The Username and Password do not match!')
//     }
// })

// //dashboard route
 //router.get('/dashboard',(req,res)=>{
// //if (req.session.user) {
    // res.render('dashboard',{user:req.session.user})
 //})// else {
//     //res.send('unauthorized user')
// //}
// //})

//logout route
// router.get('/logout',(req,res)=>{
//     req.session.destroy(function(err){
// if (err) {
//     res.send('error')
// } else {
//     res.render('base',{logout:'Sign In'})
// }
//     })
// })

module.exports=router
