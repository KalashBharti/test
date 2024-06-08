import express from 'express'
import mongoose from 'mongoose'
import routes from './routes/users.routes.js'
const conn = async()=>{
    try
    {
        const con =await mongoose.connect('mongodb://127.0.0.1:27017/apiTesting');
        console.log("successfully connected ",con.connection.host);
    }
    catch(error){
        console.log("error dbConnection");
        process.exit(1);
    }
}
conn();

const app = express()
const port = 3000
app.use(express.json())
app.get('/', (req, res) =>
{
res.send('Hello World! test')
})

app.use('/user',routes)
app.listen(port, () =>{
console.log(`Example app listening on port ${port}`)})
