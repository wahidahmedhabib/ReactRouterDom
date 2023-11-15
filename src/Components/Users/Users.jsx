import React from 'react'
import { useParams } from 'react-router-dom'

const Users = () => {
    const { id } = useParams()
    return (
        <div className='h-10 bg-slate-200 
        flex items-center justify-center 
        font-bold '>
            Userss : {id}
        </div>
    )
}

export default Users