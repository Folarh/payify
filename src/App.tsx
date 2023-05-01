import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Navbar from './components/header/Navbar'
import Info from './components/info/Info'
import Main from './components/main/Main'

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
       <Main/>
       <Info/>
       <Footer/>
    </div>
  
  )
}

export default App
