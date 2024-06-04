import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
        <footer className="footer">
      <div className="footer-section contact">
        <div className="logo"><img src="/logo.png" alt="logo" />uifry</div>
        <p><img src="/email.png" alt="" />  Help@Frybix.Com</p>
        <p><img src="/call.png" alt="" />+1234 456 678 89</p>
      </div>
      <div className="footer-section links">
        <h4>Links</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Bookings</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
      <div className="footer-section legal">
        <h4>Legal</h4>
        <ul>
          <li><a href="#">Terms Of Use</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Cookie Policy</a></li>
        </ul>
      </div>
      <div className="footer-section product">
        <h4>Product</h4>
        <ul>
          <li><a href="#">Take Tour</a></li>
          <li><a href="#">Live Chat</a></li>
          <li><a href="#">Reviews</a></li>
        </ul>
      </div>
      <div className="footer-section newsletter">
        <h4>Newsletter</h4>
        <p>Stay Up To Date</p>
        <form>
          <input type="email" placeholder="Your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </footer>
    </>
  )
}

export default Contact