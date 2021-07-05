import mongoose, { Schema } from 'mongoose'


export let ObjectId = mongoose.Schema.Types.ObjectId;

const user = new Schema({
    "_id" : {
        type : ObjectId,
    },
    "user_id" : {
        type : Number,
        autoIndex : true,
    },
    "user_pw" : {
        type: String,
    },
    "user_name" : {
        type: String,
    },
    "user_phone" : {
        type: String,
    },
    "user_email" : {
        type: String,
    },
})

export default mongoose.model('user', user)