import React from 'react'

const Login = () => {
    return (
        <div>


            <div className="bg-gray-50 dark:bg-black-500">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="md:text-4xl sm:text-6xl text-4xl font-bold md:py-4 mt-8 text-center tracking-tight text-[#00df9a]">
                        KVR Bank
                    </a>
                    <div className="w-full bg-white rounded-lg shadow-2xl hover:scale-105 duration-300 dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Login to your account
                            </h1>

                            <form className="space-y-4 md:space-y-6" action="#">

                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Enter Email Address"
                                        required
                                    />
                                </div>

                                <div>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Enter Password"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required

                                    />
                                </div>

                                <div className="flex items-start">

                                    <div className="flex items-center h-5">
                                        <a href="#" className="font-semibold text-indigo-500 hover:text-black dark:text-primary-500 dark:hover:text-[#00df9a]">Forget Password?</a>
                                    </div>

                                </div>

                                <button
                                    type="submit"
                                    className="w-full text-black bg-[#00df9a] hover:bg-indigo-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Login
                                </button>

                                <p className="text-sm6 text-center font-light text-black dark:text-gray-400">
                                    Don't have an account? <a href="#" className="font-semibold text-indigo-500 hover:text-black dark:text-primary-500 dark:hover:text-[#00df9a]">Create here!</a>
                                </p>

                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Login