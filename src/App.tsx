
//styles
import './App.css'
//pages and components
import Home from './pages/Home'
import About from './pages/about/About'
import Faq from './pages/Faq'
import Footer from './components/footer/Footer'
import Navbar from './components/header/Navbar'
//routers
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  return (
    <div className='app'>
     <BrowserRouter>
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/faq' element={<Faq/>}/>
     </Routes>
       <Footer/>
  </BrowserRouter>
      
    </div>
  
  )
}

export default App
