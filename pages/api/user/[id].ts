import dbConnect from "@utils/mongodb"
import User from "@models/user"

export default async function handler(req, res) {
    const {
        query: {id},
        method,
    } = req

    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const user = await User.findById(id)
                res.status(200).json({ success : true, data: user})

            } catch (error) {
                res.status(400).json({ success : false})

            }
            break
        case 'PUT': // update
            try {
                const user = await User.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators : true,
                })

                if(!user) return res.status(400).json({success:false})
                res.status(200).json({success:true, data : user})

            } catch (error) {

                res.status(400).json({success:false})
            }
        case 'DELETE':
            try {
                const deleteUser = await User.deleteOne({ _id : id})
                if(!deleteUser) return res.status(400).json({success:false})

                res.status(200).json({success:true, data: {} })
            } catch (error) {

                res.status(400).json({success:false})
            }
            break
        default:
            res.status(400).json({success:false})
            break
    }
}