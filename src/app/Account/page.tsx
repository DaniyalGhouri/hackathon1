import React from 'react';
import Link from 'next/link';
import Banner from '../components/banner';
import Feature from '../components/Feature';

const Account = () => {
  return (
    <div>
       {/* Banner */}
       <header className="relative bg-cover bg-center h-70">
        <Banner />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center mt-[221px] text-white text-center">
          <div>
            <h1 className="text-5xl font-bold">Account</h1>
            <p className="text-xl mt-4">
              <Link href="/">Home</Link> &gt; Account
            </p>
          </div>
        </div>
      </header>

      {/* 2nd Section: Login and Register */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Login Column */}
            <div className="space-y-6">
              <h1 className="text-2xl sm:text-3xl font-bold">Login</h1>
              <form className="space-y-4">
                {/* Username or Email */}
                <div>
                  <label className="block text-lg font-semibold" htmlFor="email">Username or Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                {/* Password */}
                <div>
                  <label className="block text-lg font-semibold" htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                {/* Remember Me Checkbox */}
                <div className="flex items-center">
                  <input type="checkbox" id="rememberMe" className="mr-2" />
                  <label htmlFor="rememberMe" className="text-lg">Remember Me</label>
                </div>
                {/* Login Button */}
                <button className="w-full sm:w-[215px] h-[64px] py-2 bg-transparent border border-black rounded-md text-black text-lg hover:bg-black hover:text-white transition">
                  Login
                </button>
                {/* Lost Password Link */}
                <div className="text-center mt-4">
                  <Link href="#" className="text-lg text-blue-600">Lost your password?</Link>
                </div>
              </form>
            </div>

            {/* Register Column */}
            <div className="space-y-6">
              <h1 className="text-2xl sm:text-3xl font-bold">Register</h1>
              <form className="space-y-4">
                {/* Email Address */}
                <div>
                  <label className="block text-lg font-semibold" htmlFor="registerEmail">Email Address</label>
                  <input
                    type="email"
                    id="registerEmail"
                    placeholder="Enter your email"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                {/* Register Information */}
                <div className="text-sm text-gray-600 space-y-2">
                  <p>
                    A link to set a new password will be sent to your email address.
                  </p>
                  <p>
                    Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
                  </p>
                </div>
                {/* Register Button */}
                <button className="w-full sm:w-[215px] h-[64px] py-4 bg-transparent border border-black rounded-md text-black text-lg hover:bg-black hover:text-white transition">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Feature />
    </div>
  );
};

export default Account;