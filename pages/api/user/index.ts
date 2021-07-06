import dbConnect from "@utils/mongodb"
import User from "@models/user"
//import session? user-id
//login.ts for validate



export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch(method){
        case 'GET':
            try {
                const user = await User.findOne({ /*  user_id  */})
                res.status(200).json({ success : true, data: user})
            } catch (error) {
                res.status(400).json({ success : false})
            }
            break
        case 'POST':
            try {
                const user = await User.create(
                    req.body
                )
                res.status(201).json({ success: true, data: user })
            } catch (error) {
                res.status(400).json({ success: false})
            }
            break
        default:
            res.status(400).json({success:false})
            break
    }
}