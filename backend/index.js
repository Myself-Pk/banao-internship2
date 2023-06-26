const express = require('express');
require('./db');

const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const User = require('./models/Users')

// Create a User
app.post('/api/v1/signUp', async (req, res) => {
  try {
    const addUser = new User(req.body);
    const addUserProm = await addUser.save();
    res.status(201).send(addUserProm)
  } catch (e) {
    res.status(400).send(e)
  }
});

// Get a User
app.post('/api/v1/signIn', async (req, res) => {
  try {
    const emailRecieved = req.body.email;
    const passwordRecieved = req.body.password;
    // console.log(emailRecieved , passwordRecieved)
    const findUser = await User.find({ email: emailRecieved });
    // console.log(findUser)
    if (findUser[0].password === passwordRecieved) {
      res.send(findUser)
    }else{
      res.send('false')
    }
  } catch (error) {
    res.send('false')
  }
});



// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});