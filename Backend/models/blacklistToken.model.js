const mongoose = require('mongoose');   

const blacklistTokenSchema = new mongoose.Schema({
    token:{
        type: String,
        required:true,
        unique:true
    },
    createdAt:{
        type: Date,
        default:Date.now,
        expirns:86400
    }
})

module.exports = mongoose.model('blacklistToken',blacklistTokenSchema);