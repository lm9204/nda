import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
    throw new Error(
      'Mongodb url 설정 안되있음. ".env.local" '
    )
  }

let cached = global.mongoose

if(!cached) {
    cached = global.mongoose = { conn : null, promise: null }
}

export default async function dbConnect(){
    if(cached.conn){
        return cached.conn
    }

    if(!cached.promise){
        const opts = {
            useNewUrlParser:true,
            useUnifiedTopology: true,
            bufferCommands: false,
            bufferMaxEntries: 0,
            useFindAndModify: false,
            useCreateIndex: true,
        }

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose
        })
    }
    cached.conn = await cached.promise
    return cached.conn
}