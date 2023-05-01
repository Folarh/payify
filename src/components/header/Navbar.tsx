
import Google from '../../assets/google.png'
import Appstore from '../../assets/appstore.png'
import Logo from '../../assets/opt.png'
import {useState} from "react"


const Navbar = () => {
  const [toggle, setToggle]= useState(false)
  return (
    <nav className='navbar'> 
     <div className="navigations" id='{toggle? "hidden": ""}'>
      <a >Home</a>
      <a >Contact</a>
      <a >FAQ</a>
     </div>

     <div className="logo">
      <img src={Logo}/>
     </div>

     <div className="app-download">
      <img src={Google}/>
      <img src={Appstore}/>
     </div>
     <div className='menu-icon' onClick={()=>setToggle(!toggle)}>
{toggle? "X": "#"}
     </div>
     </nav>
  )
}

export default Navbar
