const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        trim: true
    },
    lastName:{
        type:String,
        required:true,
        trim: true
    },
    email:{
        type:String,
        unique:true,
        lowercase:true,
        trim: true
    },
    password:{
        type:String,
        required:true,
        minlength:[3,'Password must be at least 3 digits']
    }
})

const User = new mongoose.model("User", UserSchema);

module.exports = User;

// {
//     "firstName":"Pratham",
//     "lastName":"Kundu",
//     "email":"pk@mail.com",
//     "password":"abc123"
// }