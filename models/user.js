import mongoose, { Schema } from 'mongoose'


export const ObjectId = mongoose.Schema.Types.ObjectId;

const user = new Schema({
    "_id": {
      "type": ObjectId
    },
    "user_Id": {
      "type": Number
    },
    "user_pw": {
      "type": String
    },
    "user_name": {
      "type": String
    },
    "user_email": {
      "type": String
    },
    "user_phone": {
      "type": String
    }
  })

export default mongoose.models.user ||mongoose.model('user', user)