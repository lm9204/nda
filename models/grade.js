import mongoose from 'mongoose'

const sample = new mongoose.Schema({
    "_id": {
    
        type: mongoose.Schema.Types.ObjectId,
      },
    "student_id" : {
    
        type: Number,
      },
    "scores" : {
    
        type: Array,
      },
    "class_id" : {
    
        type: Number,
      },
})

//                                                       modelName, Model, CollectionName
export default mongoose.models.Grade || mongoose.model('grade', sample)