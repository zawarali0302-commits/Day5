import React from 'react'

const LoginForm = () => {
    return (
        <div className='min-h-screen grid place-content-center'>
            <div className="h-72 w-52 border-6 rounded-md border-emerald-200">
                <div className="bg-emerald-500 h-1/5 grid place-content-center text-2xl shadow-2xl font-bold">Login Form</div>
                <div className="h-1/5 grid place-content-center">
                    <label for="username" className='grid grid-cols-6 gap-1'>
                        <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        </div>
                        <div className='place-content-center col-span-5 col-start-2'>
                            <input type="text" id="username" name="username" required placeholder="Enter your username" className="w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                    </label>
                </div>
                <div className="h-1/5 grid place-content-center">
                    <label for="password" className='grid grid-cols-6 gap-1'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>

                        </div>
                        <div className='place-content-center col-span-5 col-start-2'>
                            <input type="password" id="password" name="password" required placeholder="Enter Password" className="w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                    </label>
                </div>
                <div className=' h-1/5 grid grid-cols-5'>
                    <button type='submit' className="bg-emerald-500 grid col-span-3 col-start-2 place-content-center hover:bg-emerald-900 shadow-2xl rounded-4xl">Login</button>
                </div>
                <div className='text-sm'>
                    <p>Forget Password?</p>
                    <a href="" className='text-blue-500 hover:text-blue-800'>Try another way</a>
                </div>
            </div>
        </div>


    )
}

export default LoginForm
