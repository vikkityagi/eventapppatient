// const express = require('express')
// const router = express.Router()
// const User = require('../models/user')
// const bcrypt = require('bcrypt')
// const rounds = 10

// const jwt = require('jsonwebtoken')
// const tokenSecret = 'my-token-secret'

// const middleware = require('../middleware')



// router.post('/signup', async(req, res) => {
//     const newUser = User({patient_id: req.body.patient_id,arrival_date_time: req.body.arrival_date_time,mode_of_arrival: req.body.mode_of_arrival, gender: req.body.gender, patient_situation: req.body.patient_situation, patient_name: req.body.patient_name
//         , age: req.body.age, mobile_number: req.body.mobile_number, address: req.body.address})
//         try{
//             const a1 =  await newUser.save() 
//             res.json({success: true})
//         }catch(err){
//             res.send({success: false})
//         }

// });



// router.get('/:id', async (req, res) => {
//     const userResult = await User.find({patient_id: req.params.id }).exec();
//     res.json({
//     //  errno: 0,
//      data: userResult
//     })
//     console.log(userResult)
// })


// module.exports = router