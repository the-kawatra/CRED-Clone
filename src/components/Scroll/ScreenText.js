import React, { useState, useEffect, useRef } from "react";
import "./scroll.css";

const ScreenText = (props) => {
  const [showAnimation, setShowAnimation] = useState(false);

  const ref = useRef(null);

  const toggleProductAnimation = (e) => {
    if (e[0]?.isIntersecting) {
      setShowAnimation(true);
      props.setCurrentImg(props.index);
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.75,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggleProductAnimation, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  });

  return (
    <div
      className={`screen-text ${showAnimation ? "text-visible" : ""}`}
      ref={ref}
    >
      <div className="screen-text-heading">{props.screen.heading}</div>
      <div className="mobile-mockup-wrapper only-mobile">
        <div className="mobile-mockup">
          <div className="mobile-mockup-screen flex absolute-center">
            <img
              src={props.screen.img}
              className="mobile-screen-img"
              alt="Mobile Mockup"
            />
          </div>
        </div>
      </div>
      <div className="screen-text-description">{props.screen.description}</div>
    </div>
  );
};

export default ScreenText;
