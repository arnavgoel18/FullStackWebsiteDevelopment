import React, { useState, useEffect } from 'react'
import ComponentCard from './ComponentCard';
import "./FundingTimeline.css";
import BtnSlider from '../FirstDisplayDIV/Autokriti/BtnSlider';
import Slider from "react-slick";
import battery from '../../Assets/CrowdFunding/Svg/battery.svg'
import tyres from '../../Assets/CrowdFunding/Svg/tyre.svg'
import damper from '../../Assets/CrowdFunding/Svg/Damper.svg'
import gearbox from '../../Assets/CrowdFunding/Svg/gearbox.svg'
import machining from '../../Assets/CrowdFunding/Svg/maching.svg'
import safetygear from '../../Assets/CrowdFunding/Svg/Safetygear.svg'
import suspension from '../../Assets/CrowdFunding/Svg/suspension.svg'
import drivetrain from '../../Assets/CrowdFunding/Svg/drivetrain.svg'

function FundingTimeline({amount}) {
    const [device, setdevice] = useState(5)
    // const { width, height } = useDimensions().dimensions;
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
        slidesToShow: device,
        centerMode: false,
        centerPadding: 0,
        autoplay: false,
        nextArrow: <Next />,
        prevArrow: <Back/>,
        dots:true,
        

    };

    
    const dataSlider=[
        {
            id: 1,
            title: "Suspension",
            image: suspension,
            status:(amount>=30000)?"Reached":"Notreached",
            price:"30,000"
        },
        {
            id: 2,
            title: "DriveTrain",
            image: drivetrain,
            status:(amount>=80000)?"Reached":"Notreached",
            price:"50,000"
        },
        {
            id: 3,
            title: "Gearbox",
            image: gearbox,
            status: (amount>=130000)?"Reached":"Notreached",
            price:"50,000"
        },
        {
            id: 4,
            title: "Dampers",
            image: damper,
            status: (amount>=280000)?"Reached":"Notreached",
            price:"1,50,000"
        },
        {
            id: 5,
            title: "Tyre Set",
            image: tyres,
            status: (amount>=380000)?"Reached":"Notreached",
            price:"1,00,000"
        },
        {
            id: 6,
            title: "Machining",
            image: machining,
            status: (amount>=480000)?"Reached":"Notreached",
            price:"1,00,000"
        },
        {
            id: 7,
            title: "Battery",
            image: battery,
            status: (amount>=680000)?"Reached":"Notreached",
            price:"2,00,000"
        },
        {
            id: 8,
            title: "Safety Gears",
            image: safetygear,
            status: (amount>=800000)?"Reached":"Notreached",
            price:"1,20,000"
        }
    ]

  
    useEffect(() => {
      const handleResize = () => {
        console.log("called", window.innerWidth)
        predictDevice(window.innerWidth);
        
      };
  
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);



const predictDevice=(W)=>{
    if(W>=320 && W<500)
    {
        setdevice(1);
    }
    else  if(W>=500 && W<768)
    {
        setdevice(2)
    }
    else  if(W>=768 && W<1024)
    {
        setdevice(3)
    }
    else  if(W>=1024 && W<1440)
    {
        setdevice(4)
    }
    else  if(W>=1440)
    {
        setdevice(5)
    }
}


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
                                index={index} image={e.image} status={e.status} price={e.price} />
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