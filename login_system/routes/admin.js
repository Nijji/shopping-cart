var express=require('express')
var router=express.Router()

//pages index
router.get('/',(req,res)=>{
    res.send('Admin Dashboard')
 })

 //add page
 router.get('/add_page',(req,res)=>{
    var title=''
    var slug=''
    var content=''

    res.render('admin/add_page',{
        title:title,
        slug:slug,
        content:content
    })
 })

 

 module.exports=router