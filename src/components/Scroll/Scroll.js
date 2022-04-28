import React, { useState } from "react";
import ScreenText from "./ScreenText";
import "./scroll.css";

const scrollData = [
  {
    heading: "we've got your back.",
    description:
      "gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time.",
    img: "https://web-images.credcdn.in/_next/assets/images/home-page/features/fold1.png",
    key: 1,
  },
  {
    heading: "begin your winning streak.",
    description:
      "use your CRED coins to participate in games and raffles to win the most exclusive rewards and cashbacks on CRED. good luck.",
    img: "https://web-images.credcdn.in/_next/assets/images/home-page/features/fold2.png",
    key: 2,
  },
  {
    heading: "for your eclectic taste.",
    description:
      "get access to the CRED Store, a member-exclusive selection of products and experiences at special prices that complement your taste. this is the good life they speak of.",
    img: "https://web-images.credcdn.in/_next/assets/images/home-page/features/fold3.png",
    key: 3,
  },
  {
    heading: "more cash in your pockets.",
    description:
      "switch to CRED RentPay and start paying rent with your credit card. this way you get up to 45 days of credit free period, more reward points and a happy landlord.",
    img: "https://web-images.credcdn.in/_next/assets/images/home-page/features/fold4.png",
    key: 4,
  },
];

const Scroll = () => {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <div className="max-width flex scroll">
      <div className="scroll-full-screen-wrapper">
        {scrollData.map((screen, i) => (
          <div className="scroll-full-screen">
            <ScreenText screen={screen} index={i} setCurrentImg={setCurrentImg} />
          </div>
        ))}
      </div>
      <div className="mobile-mockup-wrapper non-mobile">
        <div className="mobile-mockup">
          <div className="mobile-mockup-screen">
            <img
              src={scrollData[currentImg].img}
              className="mobile-screen-img slide-in-right"
              alt="Mobile Mockup"
              key={scrollData[currentImg].key}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scroll;
