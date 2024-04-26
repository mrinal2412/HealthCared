import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            At HealthCared, we're revolutionizing the way you manage your health care. Our platform seamlessly connects you with healthcare professionals, making it easier than ever to book and manage your medical appointments. Whether you need a routine check-up, a consultation with a specialist, or urgent care, HealthCared puts comprehensive health services at your fingertips.With HealthCared, you gain access to a vast network of medical experts, transparent patient reviews, and a user-friendly interface to schedule your visits efficiently. It's our mission to simplify your health journey, providing the tools and support you need for a healthier tomorrow.Begin your path to better health with HealthCared today.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
