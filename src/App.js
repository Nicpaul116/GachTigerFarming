import React from 'react'
import './App.css'
import {Blog, Contact, Crops, Footer, Header, Livestock, Machines, About} from './containers'
import {Navbar} from './components'
const App = () => {
  return (
    <div >
     <div>
     <div className='App_header'>
     <Navbar/>
      <Header/>
     </div>
     <About/>
      <Livestock/>
      <Crops/>
      <Machines/>
      <Blog/>
      <Contact/>
      <Footer/>
     </div>
    </div>
  )
}

export default App