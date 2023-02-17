import React, { useState } from 'react'
import ComponentCard from './ComponentCard';
import "./FundingTimeline.css";
import BtnSlider from '../FirstDisplayDIV/Autokriti/BtnSlider';
import Slider from "react-slick";
import battery from '../../Assets/CrowdFunding/Svg/battery.svg'
import tyres from '../../Assets/CrowdFunding/Svg/tyres.svg'
import daq from '../../Assets/CrowdFunding/Svg/daq.svg'
import gearbox from '../../Assets/CrowdFunding/Svg/gearbox.svg'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function FundingTimeline() {

    const Next = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <svg style={{ cursor: "pointer" }}  width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.42495 10.4125L5.82495 6.00002L1.42495 1.58752" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        );
    };

    const Back = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <svg style={{ cursor: "pointer" }}  on width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.57505 10.4125L1.17505 6.00002L5.57505 1.58752" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />

                </svg>
            </div>
        );
    };
    const settings = {
        infinite: false,
        lazyLoad: false,
        speed: 300,
        slidesToShow: 5,
        centerMode: false,
        centerPadding: 0,
        autoplay: false,
        nextArrow: <Next />,
        prevArrow: <Back/>,
        dots:true,
        

    };
    const dataSlider = [
        {
            id: 1,
            title: "Battery",
            image: battery,
            status: "Reached"
        },
        {
            id: 2,
            title: "Tyres",
            image: tyres,
            status: "Reached"
        },
        {
            id: 3,
            title: "Gearbox",
            image: gearbox,
            status: "Notreached"
        },
        {
            id: 4,
            title: "DAQ",
            image: daq,
            status: "Notreached"
        },
        {
            id: 5,
            title: "DAQ",
            image: daq,
            status: "Notreached"
        },
        {
            id: 1,
            title: "Battery",
            image: battery,
            status: "Reached"
        },
        {
            id: 2,
            title: "Tyres",
            image: tyres,
            status: "Reached"
        },
        {
            id: 3,
            title: "Gearbox",
            image: gearbox,
            status: "Notreached"
        },
        {
            id: 4,
            title: "DAQ",
            image: daq,
            status: "Notreached"
        },
        {
            id: 5,
            title: "DAQ",
            image: daq,
            status: "Notreached"
        },

    ];


    function moveDot(index) {
        setSlideIndex(index);
    }

    const [slideIndex, setSlideIndex] = useState(1);

    // const nextSlide = () => {
    //     if (slideIndex !== dataSlider.length) {
    //         setSlideIndex(slideIndex + 1);
    //     } else if (slideIndex === dataSlider.length) {
    //         setSlideIndex(1);
    //     }
    // };
    return (
        <div id="funding_timeline_main_container" >

            <Slider {...settings}>
                {

                    dataSlider.map((e, index) => {

                        return (
                            <ComponentCard key={index} title={e.title}
                                slideIndex={slideIndex}
                                index={index} image={e.image} status={e.status} />
                        )
                    })}
            </Slider>


            {/* <div className="container_dots">
                {Array.from({ length: 5 }).map((item, index) => (
                    <div style={{ cursor: "pointer" }}
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div> */}
        </div>
    )
}

export default FundingTimeline