import React from 'react'
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div>
         <nav className='nav-header sm:w-full  flex  items-center justify-between py-3'>
         <div className=" flex  items-center gap-3  ">
            <FontAwesomeIcon className="faLink text-gray-900" icon={faLink} />
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">devlinks</h2>
          </div>
          <div className="nav-links flex items-center justify-center flex-grow gap-10  ">
            <div className="prev-links flex items-center gap-3 ">
            <FontAwesomeIcon className=" text-gray-900 nav-falink" icon={faLink} />
            <p>Links</p>
            </div>
          <div className="profile flex items-center gap-3 ">
            <FontAwesomeIcon className="nav-faUser text-gray-900" icon={faUser} />
            <p>Profile Detail</p>
            </div>
          </div>
          <div className="preview flex items-center">
            <button>Preview</button>
          </div>
         </nav>
    </div>
  )
}

export default Navbar
