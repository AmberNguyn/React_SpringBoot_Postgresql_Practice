import React from 'react'
import '../footer/Footer.css'

export default function Footer() {
  return (
    <footer className='mt-auto'>
      <div className='row footer_bar'>
        <div className='col-3 d-flex align-items-center'>
          <img className='footer_img' src='school_logo.png' alt='school_logo'></img>
        </div>

        <div className='col-6 d-flex flex-column align-items-center'>
          <p className='app_name'>Teacher Payment System</p>
          <p>Automate payment operations so you can focus on teacher relationships and growing values.</p>
        </div>

        <div className='col-3 d-flex flex-column align-items-center'>
          <p><a href='/#'>Contact</a></p>
          <p><a href='/#'>Policy</a></p>
        </div>
      </div>
    </footer>
  )
}
