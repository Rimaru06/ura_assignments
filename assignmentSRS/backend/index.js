const express  = require('express')
const projectCategories = require('./projectCategory.js');
const cors = require('cors')


const app = express();
app.use(cors())



app.get('/projectData' , (req ,res) => {
    res.json(projectCategories);
})

app.listen(3000 , () => {
    console.log("server is listening on port 3000")
})