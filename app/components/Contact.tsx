"use client";

import { useForm, ValidationError } from "@formspree/react";
import { FaLocationDot } from "react-icons/fa6";
import React, { useState } from "react";
import "../styles/Contact.scss";

export default function Contact() {
  const [state, handleSubmit] = useForm("mqkrbabd");

  return (
    <section className="contact max-width" id="contact">
      <div className="contact-body">
        <h3 className="bar">Washing Location</h3>
        <h2>Car Washing & Care Location</h2>
        <div className="locate">
          <FaLocationDot size={30} color="#E81C2E" />
          <div className="locate-details">
            <h4>TAV college's Car Wash</h4>

            <p>
              <strong>Call:</strong>{" "}
              <a href="tel:+000 000 0000">000 000 0000</a>
            </p>
          </div>
        </div>
        <iframe
          src=""
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {state.succeeded ? (
        <div className="success">
          <h2>
            Thank you for reaching out!
            <br />I will get back to you soon
          </h2>
        </div>
      ) : (
        <div className="form-section">
          <p>Request for a car wash</p>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="name" />
            <input type="text" placeholder="Phone number" name="phone number" />
            <textarea
              cols={30}
              rows={10}
              placeholder="Message"
              name="message"
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </section>
  );
}
