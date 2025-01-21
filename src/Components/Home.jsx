import React from "react";
import computerpic from "../assets/Illustration.png";
import logo1 from "../assets/Logo.png";
import logo2 from "../assets/Logo (1).png";
import logo3 from "../assets/Logo (2).png";
import logo4 from "../assets/Logo (3).png";
import logo5 from "../assets/Logo (4).png";
import logo6 from "../assets/Logo (5).png";
import logo7 from "../assets/Logo (6).png";
import icon1 from "../assets/Icon (4).png";
import icon2 from "../assets/Icon (2).png";
import icon3 from "../assets/Icon (3).png";

import frame from "../assets/Frame 35.png";



const Home = () => {

  return (
    <div>
      <div
        style={{
          backgroundColor: "#F5F7FA",
          height: "416px",
          fontFamily: "'Inter', sans-serif",
          lineHeight: "52.9px",
          display: "flex",

          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",

            fontWeight: 600,
            fontSize: "44.5px",
            height: "192.9px",
            marginLeft: "50px",
            marginBottom: "70px",
          }}
        >
          Lessons and insights
          <div style={{ color: "#4CAF4F" }}>from 8 years</div>
          <div
            style={{
              fontSize: "18px",
              fontWeight: 400,
              marginTop: "10px",
              width: "100%",
              whiteSpace: "wrap",

              color: "black",
            }}
          >
            Where to grow your business as a photographer: site or social media
          </div>
          <div>
            <button
              style={{
                marginTop: "20px",
                backgroundColor: "#4CAF4F",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Register
            </button>
          </div>
        </div>
        <img src={computerpic} className="responsive-img" alt="computer" />

        <style jsx>{`
          .responsive-img {
            height: 283.3px;
            width: 100%;
            object-fit: cover;
          }

          @media (max-width: 768px) {
            .responsive-img {
              height: auto;
              max-width: 40%;
            }
          }
        `}</style>
      </div>
      <div
        style={{
          height: "27.84px",
          background: "white",
          width: "100%",
        }}
      ></div>
      <div
        style={{
          height: "132px",
          width: "100%",
        }}
      >
        <div
          style={{
            textAlign: "center",
            width: "100%",
            height: "31px",
            fontFamily: "'Inter', sans-serif",
            lineHeight: "30.6px",
            fontSize: "25.06px",
            fontWeight: 600,
            color: "#4D4D4D",
          }}
        >
          {" "}
          Our Clients
        </div>
        <h4
          style={{
            fontSize: "18px",
            fontWeight: 400,
            marginTop: "10px",

            whiteSpace: "nowrap",
            fontFamily: "'Inter', sans-serif",
            color: "#717171",
            textAlign: "center",flexWrap:'wrap'
          }}
        >
          We have been working with some Fortune 500+ clients
        </h4>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <div>
            {" "}
            <img src={logo1} alt="" />
          </div>
          <div>
            {" "}
            <img src={logo2} alt="" />
          </div>
          <div>
            {" "}
            <img src={logo3} alt="" />
          </div>
          <div>
            {" "}
            <img src={logo4} alt="" />
          </div>
          <div>
            {" "}
            <img src={logo5} alt="" />
          </div>
          <div>
            {" "}
            <img src={logo6} alt="" />
          </div>
          <div>
            {" "}
            <img src={logo7} alt="" />
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            paddingTop: "20px",
            textAlign: "center",
            width: "100%",
            fontFamily: "'Inter', sans-serif",
            fontSize: "25.06px",
            fontWeight: 600,
            color: "#4D4D4D",
          }}
        >
          Manage your entire community
          <br />
          in a single system
          <div
            style={{
              fontSize: "18px",
              fontWeight: 400,
              marginTop: "10px",

              whiteSpace: "nowrap",
              fontFamily: "'Inter', sans-serif",
              color: "#717171",
              textAlign: "center",
            }}
          >
            Who is Nextcent suitable for?
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            height: "27.84px",
            background: "white",
            width: "100%",
          }}
        ></div>
        <div
          style={{
            height: "196.1px",
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <img src={icon1} alt="" style={{ marginBottom: "10px" }} />
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "25.06px",
                fontWeight: 600,
                color: "#4D4D4D",
                marginBottom: "5px",
              }}
            >
              Manage your entire community
            </div>
            <p
              style={{
                fontSize: "15px",
                fontWeight: 400,
                fontFamily: "'Inter', sans-serif",
                color: "#717171",
                margin: 0,
              }}
            >
              Our membership management software provides full automation of
              membership renewals and payments.
            </p>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <img src={icon2} alt="" style={{ marginBottom: "10px" }} />
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "25.06px",
                fontWeight: 600,
                color: "#4D4D4D",
                marginBottom: "5px",
              }}
            >
              National Associations
            </div>
            <p
              style={{
                fontSize: "15px",
                fontWeight: 400,
                fontFamily: "'Inter', sans-serif",
                color: "#717171",
                margin: 0,
              }}
            >
              Our membership management software provides full automation of
              membership renewals and payments.
            </p>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <img src={icon3} alt="" style={{ marginBottom: "10px" }} />
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "25.06px",
                fontWeight: 600,
                color: "#4D4D4D",
                marginBottom: "5px",
              }}
            >
              National Associations Clubs And Groups
            </div>
            <p
              style={{
                fontSize: "15px",
                fontWeight: 400,
                fontFamily: "'Inter', sans-serif",
                color: "#717171",
                margin: 0,
              }}
            >
              Our membership management software provides full automation of
              membership renewals and payments.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="image-container">
          <img src={frame} alt="" />
        </div>
        <div className="content-container">
          <div className="text-content">
            <div className="title">
              The unseen of spending <br />
              years at Pixelgrade
            </div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta.
            </div>
            <button className="learn-more-btn">
              <p className="btn-text">Learn More</p>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          height: 144.56px;
          width: 100%;
          display: flex;
          margin-top: 18px;
          justify-content: space-around;
          flex-wrap: wrap;
        }

        .image-container {
          height: 109.84px;
          width: 147px;
        }

        .content-container {
          height: 62.34px;
          max-width: 100%;
          display: flex;
        }

        .text-content {
          height: 30px;
          font-weight: 600;
          font-family: "Inter", sans-serif;
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          color: #4d4d4d;
          font-size: 18.92px;
          gap: 10px;
          width: 300.65px;
        }

        .title {
          opacity: 60%;
        }

        .description {
          height: 27px;
          font-weight: 400;
          font-family: "Inter", sans-serif;
          color: #717171;
          font-size: 9.67px;
          width: 300.65px;
        }

        .learn-more-btn {
          background-color: #4caf4f;
          height: 18.35px;
          width: 70px;
          padding: 13.68px;
          border: none;
          border-radius: 1.34px;
          color: white;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          margin-top: 10px;
        }

        .btn-text {
          line-height: 8px;
          font-weight: 400;
          font-size: 8.34px;
        }

        @media (max-width: 768px) {
          .container {
            flex-direction: column;
            align-items: center;
          }

          .image-container {
            max-width: 100%;
            text-align: center;
            padding: 10px;
          }

          .learn-more-btn {
            width: 100%;
            padding: 10px;
            font-size: 14px;
            background: blue;
          }

          .btn-text {
            font-size: 14px;
          }

          .title {
            font-size: 16px;
          }

          .description {
            font-size: 12px;
          }
        }
      `}</style>

      <div style={{ padding: "17px" }}></div>
    </div>
  );
};

export default Home;
