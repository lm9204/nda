import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import dbConnect from '@utils/mongodb'
import User from '@models/user'

import { GetServerSideProps } from 'next'

const UserPage = ({ user }) => {
    const router = useRouter()
    const [message, setMessage] = useState('')
    const handleDelete = async () => {
        const userID = 1

        try {
            await fetch(`/api/user/${userID}`, {
                method: 'DELETE',
            })
            router.push('/')
        } catch (err) {
            setMessage('유저 삭제 실패함')
        }
    }

    return (
        <>
            <div>
                <h1></h1>
                    {/* user.email, phone,  */}


                <div className="">
                    <Link 
                        href="/[id]/edit" 
                        as="">
                        <button>Edit</button>
                    </Link>
                    <button 
                        onClick={handleDelete}>
                        Delete
                        </button>1
                </div>
            </div>
        </>
    )
 // as= {`/${user._id}/edit`}
}


export const getServerSideProps : GetServerSideProps = async ({ params } ) => {

    await dbConnect()

    const result = await User.find().lean() // findById(1).lean()
    // result._id = result._id.toString()

    console.log(result)

    return { 
        props: { 
           
        } 
    }
}

export default UserPage