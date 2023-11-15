import React, { useEffect, useState } from 'react'
import { useLoaderData } from "react-router-dom"

const Github = () => {
    let data = useLoaderData()
    return (
        <div className='h-[50vh] bg-gray-200'>
            <div className='h-10 bg-black text-white 
            flex justify-center items-center
            font-bold'>
                GITHUB Followers :{data.name}
            </div>
            <div className=' bg-gray-500 text-white 
            flex justify-center items-center
            font-bold'>
                GITHUB Email :{data.email}
            </div>
            <div className=' bg-gray-500 text-white 
            flex justify-center items-center
            font-bold'>
                GITHUB UserName :{data.username}
            </div>
        </div>
    )
}
export default Github
export const gitInfo = async () => {
    const dell = await fetch('https://jsonplaceholder.typicode.com/users/4')
    //  .then(res=> dell.json())
    //  .then(res=> console.log(res))
    // console.log(resp)
    return dell.json()
}