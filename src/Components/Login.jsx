import React, { useState } from 'react';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
      alert("Login successful!");
      setErrorMessage(""); 
    } else {
      setErrorMessage("Invalid credentials. Please try again.");
      
      setEmailError(email !== storedEmail);
      setPasswordError(password !== storedPassword);
    }
  };

  return (
    <div className="cont flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="name-container sm:mx-auto sm:w-full sm:max-w-sm flex items-center justify-center gap-3">
        <FontAwesomeIcon className="faLink text-xl text-gray-900" icon={faLink} />
        <h2 className="text-5xl font-bold tracking-tight text-gray-900">devlinks</h2>
      </div>

      <div className="form_container mt-10 mx-auto w-[482px] h-[476px] p-8">
        <div className="head_text gap-8 w-[390px]">
          <h2>Login</h2>
          <p>Add your details below to get back into the app</p>
        </div>

        <form onSubmit={handleSubmit} method="POST" className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
              Email address
            </label>
            <div className="relative mt-2">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="e.g.alex@email.com"
                className={`login_email block w-full rounded-md px-10 py-2 text-base text-gray-900 placeholder:text-gray-400 
                  ${emailError ? 'border-2 border-red-500' : 'outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600'}`}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2 relative">
              <FontAwesomeIcon
                icon={faLock}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                required
                autoComplete="current-password"
                className={`block w-full rounded-md px-10 py-2 text-base text-gray-900 placeholder:text-gray-400
                  ${passwordError ? 'border-2 border-red-500' : 'outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600'}`}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Log in
            </button>
          </div>
        </form>

        {errorMessage && (
          <div className="mt-4 text-center text-sm text-red-600">
            {errorMessage}
          </div>
        )}

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Don't have an account?{' '}
          <Link to="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
