const numberInput = document.getElementById('number');
const txtInput = document.getElementById('msg');
const button = document.getElementById('button');
const response = document.querySelector('.response');

button.addEventListener('click',sendMsg);

function sendMsg(){
    const number = numberInput.value.replace(/\D/g,'');
    const text = txtInput.value;
    
    //make post request to server
    fetch('/',{
        method : 'post',
        headers:{
            'Content-type' : 'application/json',
            },
        body : JSON.stringify({number:number,text:text})
    })
    .then(function(res){
        console.log('response is : ' , res);
    })
    .catch(function(err){
        console.log('error is : ' , err);
    })
}