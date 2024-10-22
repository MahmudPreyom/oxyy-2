/* eslint-disable react/no-unescaped-entities */
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className='login-page p-3 py-20'>
            <div className="max-w-7xl mx-auto mt-[27px] mb-[41px]">
                <div className='grid md:grid-cols-2 grid-cols-1'>
                    <div className='flex items-center justify-center flex-col p-7'>
                        <h2 className='text-5xl font-bold mb-[27px] text-white'>Oxyy</h2>
                        <p className='text-white text-center text-xl font-semibold mb-12'>Looks like you're new here!</p>
                        <h4 className="text-4xl text-white text-center font-semibold mb-9">Join our group in few<br />minutes! Sign up with your<br />details to get started</h4>
                        <p className='text-white text-lg mt-[13px] text-center underline'>Downlod our mobile app.</p>
                    </div>

                    <div className='border p-7 md:py-11 md:px-16 bg-white'>
                        <div className='flex items-center justify-center flex-col -mt-[4px]'>
                            <h3 className='text-4xl font-bold mb-[20px]'>Create an Account</h3>
                            <p className='text-lg mb-[27px]'>Already have an account? <Link to="/" className='text-blue-600 underline'>Sign In</Link> </p>
                        </div>
                        <form>
                            <div className='mb-[17px]'>
                                <label className='text-base font-bold block mb-2'>Email Address</label>
                                <input type="text" className='border outline-none px-[18px] py-3 w-full' placeholder='Enter Your Email' />
                            </div>
                            <div className='mb-[16px]'>
                                <label className='text-base font-bold block mb-2'>Username</label>
                                <input type="text" className='border outline-none px-[18px] py-3 w-full' placeholder='Enter Your Username' />
                            </div>
                            <div className='mb-[23px]'>
                                <label className='text-base font-bold block mb-2'>Password</label>
                                <input type="password" className='border outline-none px-[18px] py-3 w-full' placeholder='Enter Password' />
                            </div>

                            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Create Account</button>

                        </form>

                        <p className="mt-6 mb-[2px] text-center text-base text-gray-600">By creating an account, you agree to Oxyy <Link to="/" className="font-medium underline text-blue-600 hover:text-blue-500">Terms</Link> and <Link to="/" className="font-medium underline text-blue-600 hover:text-blue-500">Privacy</Link>?</p>

                        <div className="mt-[33px]">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">Or create with</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-[31px] mb-1">
                            <ul className='flex flex-col md:flex-row items-center gap-3 justify-center'>
                                <li><Link to="/" className="inline-flex justify-center items-center gap-2 py-2 px-4 border-2 border-[#1874eb] shadow-sm bg-white text-sm font-medium text-[#1874eb] hover:bg-[#1874eb] hover:text-white transition-all ease-in"><FaFacebookF className="hover:text-white" /> Facebook</Link></li>
                                <li><Link to="/" className="inline-flex justify-center items-center gap-2 py-2 px-4 border-2 border-[#DB4437] shadow-sm bg-white text-sm font-medium text-[#DB4437] hover:bg-[#DB4437] hover:text-white transition-all ease-in"><FaGoogle className="hover:text-white" />  Google</Link></li>
                                <li><Link to="/" className="inline-flex justify-center items-center gap-2 py-2 px-4 border-2 border-[#00ACEE] shadow-sm bg-white text-sm font-medium text-[#00ACEE] hover:bg-[#00ACEE] hover:text-white transition-all ease-in"><FaTwitter className="hover:text-white" /> Twitter</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;