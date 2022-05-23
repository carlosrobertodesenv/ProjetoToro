//import { initializeApp } from 'firebase/app'; 

const express = require('express')
const app=express();
// const firebaseConfig = {
//     //...
//   };
  
// app = initializeApp(firebaseConfig);

const server = app.listen(8989,function(){
    console.log('Port 8989')
});

app.get('/', function(req, res){
    res.send('Entrei')
})