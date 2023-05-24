require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const router=require('./routes/main')
const not_found=require('./middleware/not_found')
const error_handler = require('./middleware/error')

app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1',router)

app.use(not_found)
app.use(error_handler)

const port= process.env.PORT || 3000

const start =async()=>{
    try {
        app.listen(port,
            console.log(`Server is listening to port ${port}...`))
    }
    catch(err){
        console.log(err);
    }
}

start()