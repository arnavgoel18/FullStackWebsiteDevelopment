import React, { useEffect, useRef, useState } from 'react';
import "./progressbars.css";

function ProgressBar({value,name,backcolor,frontcolor}) {
  const [inView, setInView] = useState(false);
  const [displayedValue, setDisplayedValue] = useState(0);
  const progressRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 } // Adjust the threshold as needed
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const startTime = performance.now();

      const animateText = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentValue = Math.floor(progress * value);
        setDisplayedValue(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animateText);
        }
      };

      requestAnimationFrame(animateText);
    }
  }, [inView, value]);

  return (
    <div className='supportus-content'>
      <div className='supportus-heading'>
        <h3>{name}</h3>
      </div>
      <div ref={progressRef} className="support-progress-bar-container">
        <div
          className="support-progress-bar"
          style={{
            width: inView ? `${value}%` : '0%',
            transition: 'width 2s ease',
          }}
        ></div>
        <div className="progress-text"
          style={{
              left: inView ? `${value-3}%`:'10px',
              transition: 'left 2s ease'
          }}
        >{displayedValue}%</div>
      </div>
    </div>
  );
}

export default ProgressBar;
