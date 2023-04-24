// import { Link } from "react-router-dom"
// import Logo from "../../assets/logo.svg"
import Google from '../../assets/Google.png'
import Appstore from '../../assets/appstore.png'
import Logo from '../../assets/opt.png'


const Navbar = () => {
  return (
    <nav className='navbar'> 
     <div className="navigations">
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
     </nav>
  )
}

export default Navbar
