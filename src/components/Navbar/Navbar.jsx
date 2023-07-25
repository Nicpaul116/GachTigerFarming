import React, {useState} from 'react'
import './navbar.css'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'

const Menu = () => (
  <>
  <p><a href='#Home' className='link1'>Home</a></p>
         <p><a href="#About" className='link7'>About</a></p>
          <p ><a href='#Livestock'className='link2'>Livestock</a></p>
          <p ><a href='#Crops'className='link3'>Crops</a></p>
          <p><a href='#Machines' className='link4'>Machines</a></p>
          <p ><a href='#Blog'className='link5'>Blog</a></p>
          <p><a href='#Contact' className='link6'>Contact</a></p>
  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar_header'>
      <div className='navbar_wrap'>
         <div className='navbar_header1'>
         <h1>Gach<span>Tiger</span>'s</h1>
         </div>
         <div className='navbar_links'>
          <Menu/>
         </div>
         <div className='navbar_login'>
         <div className='signin'>
         <h3>Sign-in</h3>
         </div>
          <div className='login'>
          <button>Login</button>
          </div>
         </div>
         <div className='navbar-menu'>
        {toggleMenu
        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
        :<RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='navbar_menu-container scale-up'>
            <div className='navbar_menu-container-links'>
              <Menu/>
              <div className='navbar_login-links'>
              <div className='signin'>
              <h3>Sign-in</h3>
              </div>
              <div className='login'>
              <button>Login</button>
              </div>
              </div>
            </div>
          </div>
        )

        }
      </div>
      </div>
    </div>
  )
}

export default Navbar