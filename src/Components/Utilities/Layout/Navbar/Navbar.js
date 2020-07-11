import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Overlay from 'Components/Utilities/Overlay/Overlay'
import Flex from 'Components/Utilities/Layout/Containers/Flex'

export default function Navbar() {

  const [ openDrawer, setOpenDrawer ] = useState(false)

  const NavLinks = () => (
    <ul>
      <li><Link onClick={ () => {setOpenDrawer(false)} } to="/">Home</Link></li>
      <li><Link onClick={ () => {setOpenDrawer(false)} } to="/about">About</Link></li>
      <li><Link onClick={ () => {setOpenDrawer(false)} } to="/blog">Blog</Link></li>
      <li><Link onClick={ () => {setOpenDrawer(false)} } to="/books">Books</Link></li>
      <li><a onClick={ () => {setOpenDrawer(false)} } href="https://anchor.fm/teamelesin" rel="noopener noreferrer" target="_blank">Podcast</a></li>
      <li><Link onClick={ () => {setOpenDrawer(false)} } to="/courses">Courses</Link></li>
      <li><Link onClick={ () => {setOpenDrawer(false)} } to="/contact">Contact</Link></li>
      <li>
        <a className="mr-3" href="https://facebook.com/bridgetelesin"><i className="fab fa-facebook"></i></a>&nbsp;
        <a className="mr-3" href="https://twitter.com/bridgetelesin"><i className="fab fa-twitter"></i></a>&nbsp;
        <a className="mr-3" href="https://instagram.com/bridgetelesin"><i className="fab fa-instagram"></i></a>
      </li>
    </ul>
  )

  return (
    <>
      <div className="Navbar">
        <div className="container">
          <div className="Navleft"> 
            <Link className="logo" to="/">
              <img src="https://services.etin.space/demos/bridgetelesin/logo.png" alt="Bridget Elesin" class="img-fluid" />
            </Link>
          </div>
          <div className="Navright">
            <div className="NavLinks d-sm-block d-none">
              <NavLinks />
            </div>
            <div className="collapse-menu d-block d-sm-none">
              <i onClick={ () => { setOpenDrawer(true) } } className="fas fa-bars"></i>
            </div>
          </div>
          <div className="Drawer">
            {
              openDrawer ?
                <Overlay close={ () => {setOpenDrawer(false)} }>
                  <Flex 
                    alignItems="center"
                    justifyContent="center"
                  >
                    <NavLinks />
                  </Flex>
                </Overlay>
                :
                ''
            }
          </div>
        </div>
      </div>
    </>
  )
}
