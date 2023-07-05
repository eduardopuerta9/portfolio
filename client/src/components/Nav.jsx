import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      window.pageYOffset > 50 ? setSticky(true) : setSticky(false)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <h1>hi</h1>
}

export default Navbar
