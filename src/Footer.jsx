import React from 'react'


const Footer = () => {
  return (
    <div>
      <footer className="footer mt-5">
  <div className="footer-container">
    <div className="footer-logo">
      <h2>Travel world</h2> 
    </div>
    <div className="footer-links">
      <ul>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#privacy">Privacy Policy</a></li>
      </ul>
    </div>
    <div className="footer-social">
      <a href="#"><i class="fa-brands fa-facebook fa-xl"></i></a>
      <a href="#"><i className="fa-brands  fa-twitter fa-xl"></i></a>
      <a href="#"><i className="fa-brands  fa-instagram fa-xl"></i></a>
    </div>
  </div>
  <div className="footer-bottom">
    <p>&copy; 2024 Developed by Akshay R. All rights reserved.</p>
  </div>
</footer>

    </div>
  )
}

export default Footer
