import React,{useState} from 'react'
import Navbar from './Navbar'
import LeftMain from './LeftMain'
import "../index.css"
import RightMain from './RightMain'

const Devlink = () => {
  const [linksList, setLinksList] = useState([]);
  const addLink = (linkData) => {
    setLinksList([...linksList, linkData]);
  };

  return (
    <div className='main-container'>
      <Navbar/>    
    <div className="flex">
      <LeftMain linksList={linksList} />
      <RightMain addLink={addLink} />
    </div>
    </div>
  )
}

export default Devlink
