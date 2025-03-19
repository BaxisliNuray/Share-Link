
import { BrowserRouter , Routes, Route } from "react-router-dom";
import './index.css'
import Login from './Components/Login'
import Account from "./Components/Account"
import Devlink from "./Components/Devlink";
function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Account/>}/>
        <Route path="/devlink" element={<Devlink/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
