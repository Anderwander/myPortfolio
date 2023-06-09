import React from "react";
import "./Contact.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Write Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">miEmail@gmail.com </span>
              <a
                href="mailto:ander7dhundrak@hotmail.com"
                className="contact__button"
              >
                Write Me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>

              <h3 className="contact__card-title">WhatsApp</h3>
              <span className="contact__card-data">612 345 678</span>
              <a
                href="https://api.whatsapp.com/send?phone=62214408789&text=Hello, more information!"
                className="contact__button"
              >
                Write Me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            {/* <div className="contact__card">
              <i className="bx bx contact__card-icon"></i>

              <h3 className="contact__card-title"></h3>
              <span className="contact__card-data"></span>
              <a href="" className="contact__button">
                Write Me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div> */}
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email "
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Message</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write me your message"
              ></textarea>
            </div>
            <button className="button button--flex">Send message</button>
          </form>
        </div>
      </div>

      <div className="map-wrap">
        <MapContainer center={[43.263087, -2.935079]} zoom={13}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
          <Marker position={[43.263087, -2.935079]}>
            <Popup>Ander lives here. </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default Contact;
