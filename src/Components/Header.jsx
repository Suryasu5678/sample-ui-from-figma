import React from "react";
import icon from "../assets/Icon.png";
import nexcent from "../assets/Nexcent.png";
import arrow from "../assets/image.png";

const Header = () => {
  return (
    <div
      style={{
        height: "58.76px",
        background: "#fffff",
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "5.57px",
        justifyContent: "flex-end",
      }}
    >
      {/* Logo Section */}
      <div
        style={{
          display: "flex",
          marginLeft: "20px",
          gap: "5px",
          height: "16.71px",
          width: "100%",
          justifyContent: "flex-start",
        }}
      >
        <img src={icon} alt="icon" />
        <img src={nexcent} alt="nexcent" />
      </div>

      {/* Navigation Menu */}
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          margin: 0,
          padding: 0,
          gap: "16.71px",
          cursor: "pointer",
          fontFamily: "'Inter', sans-serif",
          marginRight: "70px",
          width: "100%",
          justifyContent: "flex-end",
        }}
      >
        {["Home", "Features", "Community", "Blog", "Pricing"].map((item) => (
          <li
            key={item}
            style={{
              color: "#4D4D4D",
              cursor: "pointer",
              lineHeight: "16.7px",
              fontStyle: "medium",
              height: "17px",
            }}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Register Button */}
      <div
        style={{
       
        }}
      >
        <button
          style={{
            backgroundColor: "#4CAF4F",
            height: "36px",
            width: "auto",
            maxWidth: "100%",
            color: "white",
            fontFamily: "'Inter', sans-serif",
            borderRadius: "2.78px",
            border: "none",
            whiteSpace: "nowrap",
          }}
        >
          Register Now
          <img src={arrow} alt="arrow" style={{ height: "11.14px",paddingLeft:'5px' }} />
        </button>
      </div>
    </div>
  );
};

export default Header;
