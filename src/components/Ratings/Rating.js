import React from "react";
import Button from "../common/Button/Button";
import "./rating.css";

const Rating = () => {
  return (
    <div className="max-width flex rating">
      <div className="rating-block flex flex-col">
        <div className="flex">
          <div className="rating-value flex flex-col">
            4.8
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
              alt="App Store Rating Stars"
              className="rating-stars"
            />
          </div>
          <div className="rating-platform">
            app
            <br />
            store
          </div>
        </div>
        <div className="non-mobile">
          <Button
            buttonText="Download the app"
            customClass="rating-button"
            prefix={
              <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png"
                alt="apple store logo"
                className="rating-icon"
              />
            }
          />
        </div>
      </div>
      <div className="rating-block flex flex-col">
        <div className="flex">
          <div className="rating-value flex flex-col">
            4.7
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-android.png"
              alt="App Store Rating Stars"
              className="rating-stars"
            />
          </div>
          <div className="rating-platform">
            play
            <br />
            store
          </div>
        </div>
        <div className="non-mobile">
          <Button
            buttonText="Download the app"
            customClass="rating-button"
            prefix={
              <img
                src="https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png"
                alt="apple store logo"
                className="rating-icon"
              />
            }
          />
        </div>
      </div>
      <div className="only-mobile">
        <Button buttonText="Download the app" customClass="rating-button" />
      </div>
    </div>
  );
};

export default Rating;
