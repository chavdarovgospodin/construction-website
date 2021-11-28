import React, { useState } from 'react';
import CONSTANTS from '../../utils/constants';
import { ConfirmationModal } from '../../components/ConfirmationModal/ConfirmationModal';
import emailjs from 'emailjs-com';

import './styles.scss';

export const Contact = () => {
  const [isBtnActive, setBtnActive] = useState(false);
  const [isModalOpened, setModal] = useState(false);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);

  const contactText = 'Contact us today whether you would like to get your project started, have a general enquiry or would like a no obligation quote. Either way we are here to help!';
  // const validateEmail = (e) => {
  //   const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return regex.test(e);
  // }

  // const valiteName = (e) => {
  //   return e.trim().length > 2 && e.trim().length < 20;
  // }

  // const valiteMessage = (e) => {
  //   return e.trim().length > 1 && e.trim().length < 20;
  // }

  // const validateFields = () => {

  // }

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target)
    emailjs.sendForm(CONSTANTS.SERVICE_ID, CONSTANTS.TEMPLATE_ID, e.target, CONSTANTS.USER_ID)
      .then((result) => {
          console.log(result.text);
          alert('Thank you for contacting us, we will get back to you as soon as possible.')
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  }
  
  return (
    <>
    <div className="contact">
      <div className="container">
        <h2>Contact</h2>
        <h3>
          {contactText}
        </h3>
        <div className="row mt-5">
          <div className="col-md-7 mb-5">
            <div className="contact_us p-1">
              <h4 className="mt-3">Phones: {CONSTANTS.PHONE.phone2}, {CONSTANTS.PHONE.phone1}</h4>
              <h4 className="">Address: {CONSTANTS.ADDRESS.text}</h4>
              <h4 className="mt-3">Got a project for us?</h4>
              <form className="pb-3" method = "post" required onSubmit = {sendEmail}>
                <div className="col-12 pt-2">
                  <input type = "text" className ="form-control" placeholder ="Name" name = "name" required/>
                </div>
                <div className="col-12 pt-3">
                  <input type = "text" className ="form-control" placeholder ="Email Address" name = "email" required/>
                </div>
                <div className="col-12 pt-3">
                  <input type = "tel" className ="form-control" placeholder ="Phone" name = "phone" required/>
                </div>
                <div className="col-12 pt-3">
                  <textarea className ="form-control" id = "" cols = "30" rows = "10" placeholder ="Your message" name = "message" required/>
                </div>
                <div className="pt-3 pl-3">
                  {/* <button type="button" disabled = {isBtnActive} className="btn btn-warning mx-auto">Send Message</button> */}
                  <input className="btn btn-warning mx-auto" type="submit" value="Send"/>
                  {/* {isModalOpened && (
                    <ConfirmationModal text = 'hello' title = 'title' onClose = {setModal(false)} />
                  )} */}
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-5">
            <a className="facebook" href={CONSTANTS.FACEBOOK} target="_blank">
              <div className="content">
                <i className="fa fa-facebook-square"></i>
                <span>Facebook Page</span>
              </div>
            </a>
            <a className="phone" href={`tel:${CONSTANTS.PHONE}`}>
              <div className="content">
                <i className="fa fa-phone"></i>
                <span>Call us</span>
              </div>
            </a>
            <a className="email" href={`mailto:${CONSTANTS.EMAIL}`}>
              <div className="content">
                <i className="fa fa-envelope"></i>
                <span>Email us</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <ConfirmationModal/>
    </>
  );
};
