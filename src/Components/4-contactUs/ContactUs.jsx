import React from 'react'
import "./contactUs.css"
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from '../../../public/animation/done.json'
import contactUsAnimation from '../../../public/animation/contactUs.json'

const ContactUs = () => {
  const [state, handleSubmit] = useForm("xyzgrelv");

  return (
    <section className='contact-us'>
      <h1 className='title'>
        <span className='icon-outgoing_mail'/> Contact-Us
      </h1>

      <p className='sub-title'>
        Contact_us For More Information and Get Notified when i publish something new.
      </p>

      <div className="dflex" style={{justifyContent: 'space-between'}}>
        <form className='' onSubmit={handleSubmit}>
          
          <div className='dflex'>
            <label htmlFor="email">Email Address:</label>
            <input autoComplete='on' type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          
          <div style={{marginTop: "24px"}} className='dflex'>
            <label htmlFor="message">Your Message:</label>
            <textarea required name='message' id='message'></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors} />
          </div>

          <button className='submit' disabled={state.submitting}>{state.submitting ? "Submitting...":"Submited"}</button>
          {state.succeeded && <p style={{fontSize: "18px", marginTop: "1.7rem"}} className='theMessage dflex'>
          <Lottie loop={false} style={{height: 55}} animationData={doneAnimation} />
            You Message Has been Delevired Succesfuly 👌</p>}
        </form>
        <div className="animation">
        <Lottie  style={{height: 500}}  animationData={contactUsAnimation} />
        </div>
      </div>
    </section>
  )
}

export default ContactUs
