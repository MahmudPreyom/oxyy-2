import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const OtpPage = () => {
    return (
        <div className='login-page p-3 py-32'>
            <div className="max-w-7xl mx-auto mt-[66px] mb-[66px]">
                <div className='grid md:grid-cols-2 grid-cols-1'>
                    <div className='flex items-center justify-center flex-col p-7'>
                        <h2 className='text-5xl font-bold mb-[27px] text-white'>Oxyy</h2>
                        <p className='text-white text-center text-xl font-semibold mb-12'>We are glad to see you again!</p>
                        <div className='w-48 h-48 rounded-3xl overflow-hidden'>
                            <img className='w-full object-cover' src="https://cdn.qrplanet.com/proxy/qrcdr/plugins/qr-templates/preview/8b84a5d652391805c3e792ea9828e849.svg" alt="" />
                        </div>
                        <p className='text-white text-xl mt-[34px]'>Log In with QR Code</p>
                        <p className='text-white text-lg mt-[13px] text-center'>Scan this with your camera or our mobile app to login <br /> instantly.</p>
                    </div>

                    <div className='border p-7 md:py-11 md:px-16 bg-white'>
                        <div className='flex items-center justify-center flex-col -mt-[6px]'>
                            <h3 className='text-4xl font-bold mb-[20px]'>Forgot password?</h3>
                            <p className='text-lg text-center mb-[27px]'>Enter the email address or mobile number associated with your account.</p>
                        </div>
                        <form>
                            <div className='mb-[24px]'>
                                <label className='text-base font-bold block mb-2'>Email or Mobile Number</label>
                                <input type="text" className='border outline-none px-[18px] py-3 w-full' placeholder='Enter Email or Mobile Number' />
                            </div>

                            <button type="submit" className="group relative w-full flex justify-center py-[14px] px-4 border border-transparent text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Continue</button>

                        </form>

                        <div className="mt-[30px]">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">Or sign in with</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-[32px]">
                            <ul className='flex flex-col md:flex-row items-center gap-3 justify-center'>
                                <li><Link to="/" className="inline-flex justify-center items-center gap-2 py-2 px-4 border-2 border-[#1874eb] shadow-sm bg-white text-sm font-medium text-[#1874eb] hover:bg-[#1874eb] hover:text-white transition-all ease-in"><FaFacebookF className="hover:text-white" /> Facebook</Link></li>
                                <li><Link to="/" className="inline-flex justify-center items-center gap-2 py-2 px-4 border-2 border-[#DB4437] shadow-sm bg-white text-sm font-medium text-[#DB4437] hover:bg-[#DB4437] hover:text-white transition-all ease-in"><FaGoogle className="hover:text-white" />  Google</Link></li>
                                <li><Link to="/" className="inline-flex justify-center items-center gap-2 py-2 px-4 border-2 border-[#00ACEE] shadow-sm bg-white text-sm font-medium text-[#00ACEE] hover:bg-[#00ACEE] hover:text-white transition-all ease-in"><FaTwitter className="hover:text-white" /> Twitter</Link></li>
                            </ul>
                        </div>
                        <p className="mt-6 text-center text-lg text-gray-600">Return to <Link to="/" className="font-medium underline text-blue-600 hover:text-blue-500">Sing In</Link></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OtpPage;