import React, { useState } from "react";
import "./test.scss";
import "./Testimonials_crowd.css";

const Testimonials = ({ testimonials }) => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  return (
    <div className="realC">
      <div className="team-achievements_heading hhh">
        <div className="TeamAboutUs-heading">
          <h1 className="TeamAboutUs-weare hh"> Testi</h1>
          <h1 className="TeamAboutUs-boldcolor hh">monials</h1>
        </div>
      </div>
      <div class="containerr">
        <div class="leaderboard left-box">
          <main class="leaderboard__profiles">
            {testimonials.map((testimonial, index) => (
              <article
                key={index}
                className={`leaderboard__profile ${
                  selectedTestimonial === index ? "active" : "lll"
                }`}
                onClick={() => {
                  setSelectedTestimonial(index);
                }}
              >
                <img
                  src={testimonial.profileImage}
                  alt="Mark Zuckerberg"
                  class="leaderboard__picture"
                />
                <span class="leaderboard__name">{testimonial.name}</span>
              </article>
            ))}
          </main>
        </div>

        <blockquote className="testimonial-content right-box">
          {testimonials[selectedTestimonial].content}
        </blockquote>

        {/* <cite>{testimonials[selectedTestimonial].name}</cite> */}
        {/* <div className="testimonial-content right-box">
          <p>{testimonials[selectedTestimonial].content}</p>
        </div> */}
      </div>
    </div>
  );
};

export default Testimonials;
