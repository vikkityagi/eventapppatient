// const express = require("express")
// const mongoose = require("mongoose")
// const app = express()
// const cors = require('cors')
// const authRoute = require('./routes/auth')

// const  dbURI = "mongodb://localhost/eventiradpatientform"
// app.use(express.json())
// app.use(cors())
// app.use('/api/auth', authRoute)


// mongoose.connect(dbURI , {useNewUrlParser: true, useUnifiedTopology: true})
// const db = mongoose.connection

// db.on("error", (err)=>{console.error(err)})
// db.once("open", () => {console.log("DB started successfully")})

// app.listen(3200, () => {console.log("Server started: 3200")})





const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors = require('cors')
const tokenSecret = 'my-token-secret'
const jwt = require('jsonwebtoken')
// const rounds = 10

// const router = express.Router()
const User = require('./models/user')

const PORT = process.env.PORT || 3200;



app.use(express.json())
app.use(cors())


mongoose.connect('mongodb+srv://user2:12345@cluster0.ztx5i.mongodb.net/?retryWrites=true&w=majority', {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false

})
.then(() => console.log('MongoDB connection established.'))
.catch((error) => console.error("MongoDB connection failed:", error.message))


app.get('/', async(req, res) => {
     
    User.find((err, docs) => {
        if (!err) {
            res.json(docs);
        } else {
            console.log('Failed to retrieve the Course List: ' + err);
        }
    });
  
  });


app.post('/signup', async(req, res) => {
    const newUser = User({patient_id: req.body.patient_id,arrival_date_time: req.body.arrival_date_time,mode_of_arrival: req.body.mode_of_arrival, gender: req.body.gender, patient_situation: req.body.patient_situation, patient_name: req.body.patient_name
        , age: req.body.age, mobile_number: req.body.mobile_number, address: req.body.address})
        try{
            const a1 =  await newUser.save() 
            res.json({success: true})
        }catch(err){
            res.send({success: false})
        }

});



app.get('/:id', async (req, res) => {
    const userResult = await User.find({patient_id: req.params.id }).exec();
    res.json({
    //  errno: 0,
     data: userResult
    })
    console.log(userResult)
})




app.listen(PORT, () =>
  console.log(`Application is listening on port ${PORT}!`)
);