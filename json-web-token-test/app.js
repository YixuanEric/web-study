const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.get('/api',(req,res) =>{
    res.json({
        message:'Welcome to API'
    });
})

app.post('/api/posts',verifyToken,(req,res)=>{
    jwt.verify(req.token,'secretkey',(err,authData)=>{
        if(err){
            res.sendStatus(403);
        }else{
            res.json({
                message:'Post created',
                authData,
            })
        }
    })
});

app.post('/api/login',(req,res)=>{
    //Dummy user
    const user = {
        id:1,
        username:'wyx',
        email:'ericxuanwang@gmail.com'
    }

    jwt.sign(
        {user}, 'secretkey',{expiresIn:'30s'}, (err,token) =>{
            res.json({
                token
            })
        }
    );
})

//FORMAT OF TOKEN
//Autorization: Bearer <access_token>


//verifyToken

function verifyToken(req,res,next){
    const bearerHeader = req.headers['authorization'];
    //Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined'){
        //Split at the space
        const bearerToken = bearerHeader.split(' ')[1];
        req.token = bearerToken;
        //Next middleware
        next();
    }else{
        //Forbidden
        res.sendStatus(403);
    }

}
app.listen(5000,()=>console.log('Server started on port 5000'));