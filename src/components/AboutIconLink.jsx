import React from 'react'
import {FaQuestion} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function AboutIconLink() {
  return (
    // Link to create route link without refreshing page
    // all process making on client side
    <Link to={'/about'}> 
    <div className='about-link'>
        <FaQuestion size={30} color='white'/>
    </div>
    </Link>
  )
}

export default AboutIconLink