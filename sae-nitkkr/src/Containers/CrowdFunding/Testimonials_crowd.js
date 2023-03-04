import { useState } from "react";
import "./Testimonials_crowd.css";
import Slider from "react-slick";
import testimonial_crowd1 from "../../Assets/testimonial_crowds/testimonial_crowd1.jpg"
// import testimonial_crowd1 from "../../../Assets/testimonial_crowds/testimonial_crowd1.png";
import testimonial_crowd2 from "../../Assets/testimonial_crowds/testimonial_crowd1.jpg";
import testimonial_crowd3 from "../../Assets/testimonial_crowds/testimonial_crowd1.jpg";
import testimonial_crowd4 from "../../Assets/testimonial_crowds/testimonial_crowd1.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [testimonial_crowd1,testimonial_crowd2,testimonial_crowd3,testimonial_crowd4,];
function Testimonial_crowds() {
 
    const NextArrow = ({ onClick }) => {
      return (
        <div className="arrow next" onClick={onClick}>
          <FaArrowRight />
        </div>
      );
    };
  
    const PrevArrow = ({ onClick }) => {
      return (
        <div className="arrow prev" onClick={onClick}>
          <FaArrowLeft />
        </div>
      );
    };
  
    const [imageIndex, setImageIndex] = useState(0);
  
    const settings = {
      infinite: true,
      lazyLoad: true,
      speed: 300,
      slidesToShow: 3,
      centerMode: true,
      centerPadding: 0,
      autoplay:true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next) => setImageIndex(next),
    };
  
    return (
      <div className="testimonial_crowd">
        <div className="testimonial_crowd-title">
          Testimonials
        </div>
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div className={idx === imageIndex ?  "testimonial_crowd_slide testimonial_crowd_activeSlide"
            : "testimonial_crowd_slide"
            }>
              <img src={img} alt={img} />
            </div>
          ))}
          
           
        </Slider>
      </div>);
}

export default Testimonial_crowds;