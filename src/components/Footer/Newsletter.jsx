import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Newsletter.css';
import Subheading from '../SubHeading/Subheading';

const Newsletter = () => {
  const [ email, setEmail ] = useState('')

  const notify = () => toast(`Thank you for subscribing, ${email}! You will now receive our updates.`, {
    position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  })

  return (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <Subheading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <form className="app__newsletter-input flex__center" onSubmit={e=> {e.preventDefault(); notify()}}>
      <input type="email" value={email} required placeholder='Enter your e-mail address' onChange={e => setEmail(e.target.value)}/>
      <button type='submit' className="custom__button">Subscribe</button>
    </form>
    <ToastContainer position="bottom-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
  </div>
)};

export default Newsletter;
