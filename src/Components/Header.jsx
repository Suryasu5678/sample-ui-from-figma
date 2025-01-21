import React from "react";
import icon from "../assets/Icon.png";
import nexcent from "../assets/Nexcent.png";
import arrow from "../assets/image.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-section">
        <img src={icon} alt="icon" />
        <img src={nexcent} alt="nexcent" />
      </div>

      <ul className="nav-menu">
        {["Home", "Features", "Community", "Blog", "Pricing"].map((item) => (
          <li key={item} className="nav-item">
            {item}
          </li>
        ))}
      </ul>

      <div className="button-container">
        <button className="register-btn">
          Register Now
          <img src={arrow} alt="arrow" className="arrow-icon" />
        </button>
      </div>

      <style jsx>{`
        .header {
          height: 58.76px;
          background: #ffffff;
          max-width: 100%;
          display: flex;
          align-items: center;
          gap: 5.57px;
          justify-content: flex-end;
          padding: 0 10px;
          width: 100%;
        }

        .logo-section {
          display: flex;
          margin-left: 20px;
          gap: 5px;
          height: 16.71px;
          width: 100%;
          justify-content: flex-start;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 16.71px;
          cursor: pointer;
          font-family: "Inter", sans-serif;
          margin-right: 70px;
          width: 100%;
          justify-content: flex-end;
        }

        .nav-item {
          color: #4d4d4d;
          cursor: pointer;
          line-height: 16.7px;
          font-weight: medium;
          height: 17px;
        }

        .button-container {
          padding: 0;
          margin: 0;
        }

        .register-btn {
          background-color: #4caf4f;
          height: 36px;
          width: 100%;
          max-width: 100%;
          color: white;
          font-family: "Inter", sans-serif;
          border-radius: 2.78px;
          border: none;
          white-space: nowrap;
          display: flex;
          align-items: center;
        }

        .arrow-icon {
          height: 11.14px;
          padding-left: 5px;
        }

        @media (max-width: 768px) {
          .header {
            align-items: center;
            justify-content: space-around;
            padding: 0px;
            width: 100%;
            display: flex;
            flex-direction: column-reverse;
            background-color: lightblue;
            height: 10%;
          }

          .logo-section {
            align-items: start;
            flex-direction: column-reverse;
            position: relative;
            bottom: 30px;
            left: 20%;
            width: 50%;
            height: 5px;
          }

          .nav-menu {
            display: flex;
            flex-wrap: nowrap;
            margin-right: 10px;
            justify-content: space-around;
            width: 100%;
          }

          .register-btn {
            width: 100%;
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            position: relative;
            left: 0;
            margin-top: 10px; /* Optional: Adjust space above the button */
          }

          .arrow-icon {
            height: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
