import React from 'react'
import { BeakerIcon } from '@heroicons/react/24/solid'


const Panama = () => {
    return (
        <div>
            <h1>Panama</h1>
            <div className='border w-72 h-36 flex'>
                <div className='bg-blue-700 w-1/2'>
                <div className='bg-white h-1/2'>
                <BeakerIcon className="size-12 text-blue-500 " />
                </div>
                </div>
                <div className='bg-red-500 w-1/2 h-1/2'></div>
            </div>
        </div>

            
    )
}

export default Panama
