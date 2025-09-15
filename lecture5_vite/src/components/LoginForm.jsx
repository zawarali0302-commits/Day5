import React from 'react'

const LoginForm = () => {
    return (
        <div className='border-green-200 border-4 w-52 h-72 flex flex-col items-center'>
            <div className='bg-green-600 w-52 text-center'>
            <h1>Login Form</h1>
            </div>
            <form action="">
                <label for="username"></label>
                <input type="text" required placeholder='Email or Phone' />
                <label htmlFor="password"></label>
                <input type="password" placeholder='Password' />
                <p>Forgot Password?</p>
                <div className='bg-green-400 w-52 text-center'>
                <input type="submit" value="Login"  />
                </div>
            </form>
        </div>

        
    )
}

export default LoginForm
