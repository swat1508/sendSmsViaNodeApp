const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const Nexmo = require('nexmo');
const socketio = require('socket.io');

//Init App
const app = express();

//Template Engine Setup
app.set('view engine' , 'html');
app.engine('html',ejs.renderFile);


//Public Folder Setup
app.use(express.static(__dirname + '/public'));


//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

//Define Port
const port = 3000;

//Start Server
const servere = app.listen(port,() => console.log(`Server is running on poer ${port}`));

//Index route 
app.get('/',(req,res) => {
res.render('index');
});

//Form Submit from fetch api code in main.js
app.post('/',(req,res) => {
    // res.send(req.body);
    // console.log('req.bodyie ==> ', req.body);
const number = req.body.number;
const text=req.body.text;

nexmo.message.sendSms(
    '919036935186',number,text,{type:'unicode'},
    (err,responseData) =>{
        if(err){
            console.log('err in backend : ' , err);
        }else{
            console.dir(responseData);
        }
    }
);

});


//init nexmo 
const nexmo = new Nexmo({    
    apiKey : '4ad29cc3',            //from ==> https://dashboard.nexmo.com/getting-started-guide
    apiSecret : 'IHxm6stnswsraOrq'  //from ==> https://dashboard.nexmo.com/getting-started-guide
},  {debug:true} );


