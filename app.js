var express= require('express')
app = express()
const port= 3300

const path= require('path')
app.get('/', (req,res)=> {
 res.sendFile(path.join(__dirname, 'app.html'))

})

app.listen(port, function(){
console.log('you connect to port 3300')

})