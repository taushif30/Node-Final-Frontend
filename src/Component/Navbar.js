import React, { useEffect, useState } from 'react'
// import { Squash as Hamburger } from 'hamburger-react'
import '../Component/Style.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Bollywood from './Bollywood'
import Hollywood from './Hollywood'
import Technology from './Technology'
import Sports from './Sports'
import Food from './Food'
import ContextStore from './ContextStore'
import Detail from './Detail'

const Navbar = () => {

  useEffect(()=>{
    window.scrollTo(0,0);
  })

  const [menu,setMenu] = useState(false)
  console.log(menu)
  return (
    <>
    <div className='theSiren'>
      
        <h1><span className='the'>The</span></h1>
        <h1>Siren</h1>
        

        <div className='hamburger' onClick={()=>setMenu(!menu)}>
        <i class="fa-solid fa-bars"></i>
          {/* <Hamburger /> */}
        </div>
    </div>

    

    <div className={menu ? 'navTop' : 'link'} onClick={()=>setMenu(!menu)}   >
        <NavLink to={'/' } >Home</NavLink>
        <NavLink to={'/bollywood'} >Bollywood</NavLink>
        <NavLink to={'/hollywood'}  >Hollywood</NavLink>
        <NavLink to={'/technology'}  >Technology</NavLink>
        <NavLink to={'/sports'}  >Sports</NavLink>
        <NavLink to={'/food'}  >Food</NavLink>

    </div>

    
    <ContextStore>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bollywood' element={<Bollywood/>}/>
        <Route path='/hollywood' element={<Hollywood/>}/>
        <Route path='/technology' element={<Technology/>}/>
        <Route path='/sports' element={<Sports/>}/>
        <Route path='/food' element={<Food/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
    </Routes>
    </ContextStore>


    
    <footer className='footer'>
        
      <div className='fbox1' >
        <p>Follow us :</p>
        <NavLink><i class="fa-brands fa-instagram"></i></NavLink>
        <NavLink><i class="fa-brands fa-linkedin"></i></NavLink>
        <NavLink><i class="fa-brands fa-square-facebook"></i></NavLink>
        <NavLink><i class="fa-brands fa-youtube"></i></NavLink><br/><br/>

        <p>Contact Us :</p>
        <NavLink><i class="fa-solid fa-phone"></i> : +91 1800-1800</NavLink><br/>
        <NavLink><i class="fa-solid fa-envelope"></i> : Taushifsidd@gmail.com</NavLink>
      </div>

      <div  className='fbox2'>
        <p>Copyright@2003</p>
        <p>Privacy policy</p>
        <p>Copyright Policy</p>
        <p>Term of Use</p>
      </div>

      <div  className='fbox3'>
        <p>Quick Links :</p>
      <div className='flink'>
    <NavLink to={'/'}>Home</NavLink>
    <NavLink to={'/Bollywood'}>Bollywood</NavLink>
    <NavLink to={'/Hollywood'}>Hollywood</NavLink>
    <NavLink to={'/Technology'}>Technology</NavLink>
    <NavLink to={'/sports'}>Sports</NavLink>
    <NavLink to={'/Food'}>Food</NavLink>
    </div>
      </div>

      <div className='fbox4'>
        <h2>About Us</h2><br/>
        <p>Whether sharing your expertise, breaking news, or whatever’s on your mind, you’re in good company on Blogger. Sign up to discover why millions of people have published their passions here.</p>
         <br/>

      </div>

      <div className='fbox5'>
         <p>Copyright are subjected to @Taushifsidd@gmail.com</p>

      </div>

    </footer>
    </>
  )
}

export default Navbar