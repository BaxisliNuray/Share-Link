import React, { useState } from 'react';
import "../index.css";
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Account = () => {
  const [errorMessage, setErrorMessage] = useState(""); 
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  }); 
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target["confirm-password"].value;

    let newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email.";
    } else {
      newErrors.email = "";
    }

    
    const existingEmail = localStorage.getItem('userEmail');
    if (existingEmail === email) {
      newErrors.email = "This email is already in use.";
    }

    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    } else {
      newErrors.password = "";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    } else {
      newErrors.confirmPassword = "";
    }

    setErrors({}); 
    setErrorMessage("");

    
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    alert("Account created successfully.");
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
        <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
        devlink
      </a>
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
            Create an account
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">
                Your email
              </label>
              <div className="relative">
                <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={`email_regis bg-gray-50 border ${errors.email ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg block w-full px-10 py-2 `}
                  placeholder="e.g.alex@email.com"
                  required
                />
              </div>
              {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">
                Create Password
              </label>
              <div className="relative">
                <FontAwesomeIcon icon={faLock} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="At least 8 character"
                  className={`px-10 py-2 bg-gray-50 border ${errors.password ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full`}
                  required
                />
              </div>
              {errors.password && <p className="text-xs text-red-500">{errors.password}</p>}
            </div>
            <div>
              <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 ">
                Confirm password
              </label>
              <div className="relative">
                <FontAwesomeIcon icon={faLock} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="At least 8 character"
                  className={`bg-gray-50 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full px-10 py-2 `}
                  required
                />
              </div>
              {errors.confirmPassword && <p className="text-xs text-red-500">{errors.confirmPassword}</p>}
            </div>

            <button
              type="submit"
              className="submit_regis w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Create new account
            </button>
            <p className="flex items-center justify-center text-sm font-light text-gray-500 ">
              Already have an account?{' '}
              <Link to="/" className="font-medium text-primary-600 hover:underline ">
                Login here
              </Link>
            </p>
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default Account;
