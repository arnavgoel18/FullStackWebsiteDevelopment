import React from "react";
import { useState, useEffect } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider";
import auto1 from "./auto1.png";

export default function Slider() {
  const dataSlider = [
    {
      id: 1,
      title: "Autokriti",
    },
    {
      id: 2,
      title: "Autokriti",
    },
    {
      id: 3,
      title: "Autokriti",
    },
    {
      id: 4,
      title: "Autokriti",
    },
    {
      id: 5,
      title: "Autokriti",
    },
  ];
  function prevSlide() {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  }

  function moveDot(index) {
    setSlideIndex(index);
  }

  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideIndex((preValue) => {
        if (preValue < dataSlider.length) {
          return preValue + 1;
        } else {
          return 1;
        }
      });
    }, 4000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="container-slider">
      {dataSlider.map((element, index) => {
        return (
          <div
            key={element.id}
            className={
              slideIndex === index + 1 ? "slide active-anim" : "slide "
            }
          >
            <img src={`Imgs/Autokriti${index + 1}.jpeg`} />
          </div>
        );
      })}

      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
      <div id="autokriti_heading">
        <img src={auto1} id="auto_image" />
      </div>
    </div>
  );
}
