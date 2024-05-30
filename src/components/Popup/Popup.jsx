/* eslint-disable no-unused-vars */
import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';
import PropTypes from 'prop-types';

const Popup = ({ showPopup, setShowPopup }) => {
  return (
    <>
      {showPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <div className="p-4 shadow-md bg-white rounded-md duration-200 w-[300px] relative">
            {/* Header section */}
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-dark">Login</h1>
              <IoCloseOutline
                className="text-2xl cursor-pointer"
                onClick={() => setShowPopup(false)}
                aria-label="Close"
              />
            </div>

            {/* Login form section */}
            <div className="mt-4">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4"
                aria-label="Email"
              />
              <input
                type="password"
                placeholder="Enter password"
                className="w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4"
                aria-label="Password"
              />

              {/* Login button section */}
              <button
                className="w-full bg-primary text-white rounded-md py-2"
                onClick={() => setShowPopup(false)}
              >
                Login
              </button>

              {/* Social login */}
              <div className="mt-4">
                <p className="text-center">or login with</p>
                <div className="flex justify-center gap-2 mt-2">
                  <FaFacebook className="text-3xl hover:text-blue-500 duration-200 cursor-pointer" aria-label="Login with Facebook"/>
                  <FaGoogle className="text-3xl hover:text-primary duration-200 cursor-pointer" aria-label="Login with Google"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Popup.propTypes = {
  showPopup: PropTypes.bool.isRequired,
  setShowPopup: PropTypes.func.isRequired,
};

export default Popup;
