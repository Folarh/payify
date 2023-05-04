
import Logo from '../../assets/opt.png'
import {useState} from "react"

// router-links
import { Link } from 'react-router-dom';

//materia-ui-icons
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
  const [toggle, setToggle]= useState<boolean>(false)
  return (
    <nav className='navbar'> 
     <div className="navigations" id='{toggle? "hidden": ""}'>
      <Link to="/">Home
      </Link>
      <Link to="/about">About
      </Link>
      <Link to="/faq">FAQ
      </Link>
    
     
     </div>

     <div className="logo">
      <img src={Logo}/>
     </div>

     <div className="app-download">
      <FacebookIcon className="facebook-icon"/>
      < TwitterIcon className="twitter-icon"/>
      <GitHubIcon className="github-icon"/>
     </div>
     <div className='menu-icon' onClick={()=>setToggle(!toggle)}>
{toggle? <CloseIcon className="close-icon" />: <MenuIcon className="open-icon"/>}
     </div>
     </nav>
  )
}

export default Navbar
