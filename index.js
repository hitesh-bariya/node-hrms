const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const controller = require('./controller/user-controller')
app.use(bodyParser.json());


app.post('/',controller.userController   )

app.listen(8000, ()=>{
    console.log(`app running with 8000 port`)
})