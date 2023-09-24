
const express = require('express')

const router=require('./routes/routes')
const app = express();

require('./models/db')



// routing cl pana
app.use('/api',router)



app.listen(4000);