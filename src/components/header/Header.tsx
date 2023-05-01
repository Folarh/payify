import './Header.css'
import Mock from './Mock'
// import Navbar from './Navbar'
import Welcome from './Welcome'
export default function Header() {
  return (
    <div className='header'>
  
    {/* <Navbar/> */}
    <Welcome/>
    <Mock/>
    </div>
  )
}
