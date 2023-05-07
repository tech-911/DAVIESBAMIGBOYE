import React from "react";
import "./contact.scss";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const Contact = () => {
  return (
    <div className="contact_wrapper">
      <div className="contact_nav">
        <Nav />
      </div>
      <div className="contact_overlay"></div>
      <div className="contact_body">
        <p className="contact_head1">— Ready to start?</p>
        <h1 className="contact_head2">Let's Talk</h1>
        <div className="contact_info_wrap">
          <div className="contact_info_left">
            <p className="contact_info_left1">The Company Name Inc.</p>
            <p className="contact_info_left2">20-22 Wenlock Road </p>
            <p className="contact_info_left3">London, N17GU</p>
          </div>
          <div className="contact_info_right">
            <p className="contact_info_right1">+44 2071-6064-52 </p>
            <p className="contact_info_right2">
              9am - 5pm EST, Monday - Friday
            </p>
            <p className="contact_info_right3">admin@daviesbamigboye.com</p>
          </div>
        </div>
        <h2 className="contact_mid_text">- Drop me a line</h2>
        <div className="contact_form">
          <div className="contact_form_item1_wrap">
            <div className="contact_form_name">
              <label
                htmlFor="name"
                className="contact_name_label contact_form_text"
              >
                NAME
              </label>
              <input
                type="text"
                id="name"
                className="contact_name_input contact_border"
              />
            </div>
            <div className="contact_form_email">
              <label
                htmlFor="email"
                className="contact_email_label contact_form_text"
              >
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                className="contact_email_input contact_border"
              />
            </div>
          </div>
          <div className="contact_message">
            <label
              htmlFor="message"
              className="contact_message_label contact_form_text"
            >
              MESSAGE
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="contact_message_input contact_border"
            ></textarea>
          </div>
          <button className="contact_button">SUBMIT</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
