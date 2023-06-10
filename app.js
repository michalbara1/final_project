var express= require('express')
app = express()
const port= 3300

const path= require('path')
app.get('/', (req,res)=> {
 res.sendFile(path.join(__dirname, 'app.html'))

})

app.listen(port, function(){
console.log('you connect to port 3300')

app.get('/cart', (req,res)=> {
    res.sendFile(path.join(__dirname, 'app.html'))
   
   })
})
//logo for the site
const c = document.getElementById('myCanvas');
const ctx = c.getContext('2d');
var img = document.getElementById("logoImage");
ctx.drawImage(img, 10, 10);
ctx.font = "bold 40px Arial";
ctx.textAllign='center';
ctx.fillStyle= "#964B00";
ctx.textBaeline='middle';
const text='COCO Jewlery';
ctx.fillText(text, c.width/2, c.height/2);

