import { useState } from "react";
import "./Testimonials.css";
import Slider from "react-slick";
import testimonial1 from "../../../Assets/testimonials/testimonial1.png";
import testimonial2 from "../../../Assets/testimonials/testimonial2.png";
import testimonial3 from "../../../Assets/testimonials/testimonial3.png";
import testimonial4 from "../../../Assets/testimonials/testimonial4.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [testimonial1,testimonial2,testimonial3,testimonial4,];
function Testimonials() {
 
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
      <div className="testimonial">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div className={idx === imageIndex ?  "testimonial_slide testimonial_activeSlide"
            : "testimonial_slide"
            }>
              <img src={img} alt={img} />
            </div>
          ))}
          
           
        </Slider>
      </div>);
}

export default Testimonials;