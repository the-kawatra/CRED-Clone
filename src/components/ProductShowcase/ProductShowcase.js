import React, { useEffect, useRef, useState } from "react";
import "./productShowcase.css";

const ProductShowcase = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  const ref = useRef(null);

  const toggleProductAnimation = (e) => {
    if (e[0]?.isIntersecting) {
      setShowAnimation(true);
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggleProductAnimation, options);

    if (!showAnimation) {
      if (ref.current) {
        observer.observe(ref.current);
      }
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  });

  return (
    <div
      className={`product-showcase ${showAnimation ? "scale-in-bottom" : ""}`}
      ref={ref}
    >
      {showAnimation && (
        <div className="showcase-wrapper">
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-2.png"
            alt="Phone Left 2"
            className="showcase-ui"
            id="phone-left-2"
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-1.png"
            alt="Phone Left 2"
            className="showcase-ui"
            id="phone-left-1"
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/center.png"
            alt="Phone Left 2"
            className="showcase-ui"
            id="phone-center"
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-1.png"
            alt="Phone Left 2"
            className="showcase-ui"
            id="phone-right-1"
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-2.png"
            alt="Phone Left 2"
            className="showcase-ui"
            id="phone-right-2"
          />
        </div>
      )}
    </div>
  );
};

export default ProductShowcase;
