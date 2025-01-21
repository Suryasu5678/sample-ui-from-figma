import React from "react";
import icon5 from "../assets/Icon (5).png";
import icon6 from "../assets/Icon (6).png";
import icon7 from "../assets/Icon (7).png";
import icon8 from "../assets/Icon (8).png";
import image9 from "../assets/image 9.png";
import arrow from "../assets/image.png";
import logo1 from "../assets/Logo.png";
import logo2 from "../assets/Logo (1).png";
import logo3 from "../assets/Logo (2).png";
import logo4 from "../assets/Logo (3).png";
import logo5 from "../assets/Logo (4).png";
import logo6 from "../assets/Logo (5).png";
import frame from "../assets/Frame 35.png";

const Section = ({ data }) => {
  return (
    <div>
      <div
        style={{
          height: "200.09px",
          background: "#F5F7FA",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            fontSize: "20.02px",
            height: "200.09px",
            marginLeft: "50px",
            marginBottom: "70px",
            fontWeight: 400,
            fontFamily: "'Inter', sans-serif",
            lineHeight: "19.7px",
            color: "#4D4D4D",
            opacity: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          Helping a local
          <div style={{ color: "#4CAF4F" }}>business reinvent itself</div>
          <p
            style={{
              fontWeight: 400,
              color: "#18191F",
              lineHeight: "6px",
              fontSize: "7.34px",
            }}
          >
            We reached here with our hard work and dedication
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "20px",
            padding: "20px",
            width: "500px",
          }}
        >
          {[
            { icon: icon5, value: "2,245,341", label: "Members" },
            { icon: icon6, value: "46,328", label: "Clubs" },
            { icon: icon7, value: "828,867", label: "Event Bookings" },
            { icon: icon8, value: "1,926,436", label: "Payments" },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "15px",
                width: "180px",
              }}
            >
              <img
                src={item.icon}
                alt=""
                style={{
                  height: "40px",
                  width: "40px",
                  marginRight: "10px",
                }}
              />
              <div>
                <h3
                  style={{
                    fontWeight: 600,
                    fontFamily: "'Inter', sans-serif",
                    color: "#333333",
                    fontSize: "16px",
                    margin: 0,
                  }}
                >
                  {item.value}
                </h3>
                <p
                  style={{
                    fontWeight: 400,
                    fontFamily: "'Inter', sans-serif",
                    color: "#717171",
                    fontSize: "12px",
                    margin: 0,
                  }}
                >
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "17px" }}></div>

      <div
        style={{
          height: "342px",
          width: "100%",
          display: "flex",
          gap: "26px",
          background: "#F5F7FA",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "108px",
            width: "108px",
            borderRadius: "2.27px",
            marginTop: "40px",
          }}
        >
          <img
            src={image9}
            alt=""
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain",
              alignItems: "center",
              display: "flex",
            }}
          />
        </div>
        <div
          style={{
            height: "57px",
            width: "750px",
            fontSize: "12px",
            fontWeight: "300",
            lineHeight: "1.4",
            fontFamily: "'Inter', sans-serif",
            color: "#333",
            textAlign: "justify",
          }}
        >
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim.
          <p
            style={{
              color: "#4CAF4F",
              fontSize: "16px",
              fontWeight: "600",
              lineHeight: "1.4",
              fontFamily: "'Inter', sans-serif",
              marginTop: "10px",
            }}
          >
            Tim smith
          </p>
          <p
            style={{
              fontSize: "12px",
              fontWeight: "300",
              fontFamily: "'Inter', sans-serif",
              color: "#333",
              textAlign: "justify",
              marginTop: "0px",
            }}
          >
            British Dragon Boat Racing Association
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            {[logo1, logo2, logo3, logo4, logo5, logo6].map((logo, index) => (
              <div key={index}>
                <img src={logo} alt="" />
              </div>
            ))}
            <div
              style={{
                cursor: "pointer",
                color: "#4CAF4F",
                display: "flex",
                alignItems: "center",
                height: "10px",
                fontWeight: "600",
                fontSize: "13.68px",
                fontFamily: "'Inter', sans-serif'",
                marginTop: "10px",
              }}
            >
              Meet all customers
              <img
                src={arrow}
                alt=""
                style={{
                  height: "10px",
                  width: "10px",
                  marginLeft: "5px",
                  backgroundColor: "#4CAF4F",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: "17px" }}></div>

      <div
        style={{
          height: "144.56px",
          width: "100%",
          display: "flex",
          marginTop: "18px",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            height: "209.84px",
            width: "147px",
          }}
        >
          <img src={frame} alt="" />
        </div>
        <div
          style={{
            height: "62.34px",
            maxWidth: "100%",
            display: "flex",
          }}
        ></div>
        <div>
          <div
            style={{
              height: "30px",
              fontWeight: 600,
              fontFamily: "'Inter', sans-serif",
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              color: "#4D4D4D",
              fontSize: "18.92px",
              gap: "10px",
              width: "300.65px",
            }}
          >
            <div style={{ opacity: "60%" }}>
              How to design your site footer like we did
            </div>
            <div
              style={{
                height: "27px",
                fontWeight: 400,
                fontFamily: "'Inter', sans-serif",
                color: "#717171",
                fontSize: "9.67px",
                width: "300.65px",
              }}
            >
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
              <button
                style={{
                  backgroundColor: "#4CAF4F",
                  height: "18.35px",
                  width: "80px",
                  padding: "13.68px",
                  border: "none",
                  borderRadius: "1.34px",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <p
                  style={{
                    lineHeight: "8px",
                    fontWeight: "400",
                    fontSize: "8.34px",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Learn More
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "17px" }}></div>

      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            fontFamily: "'Inter', sans-serif",
            textAlign: "center",
            color: "#4D4D4D",
            opacity: "70%",
            paddingTop: "20px",
          }}
        >
          Caring is the new marketing
        </h1>
        <h4>
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lots more.​
        </h4>

        <style jsx>{`
          h4 {
            font-size: 18px;
            font-weight: 400;
            margin-top: 10px;
            white-space: normal;
            font-family: "Inter", sans-serif;
            color: #717171;
            text-align: justify;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
          }

          @media (max-width: 768px) {
            h4 {
              font-size: 16px;
              flex-wrap: wrap;
            }
          }
        `}</style>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          padding: "20px",
          position: "relative",
        }}
      >
        {data.map((item) => (
          <div
            key={item.id}
            style={{
              width: "300px",
              background: "#fff",
              borderRadius: "10px",
              position: "relative",
              border: "none",
            }}
          >
            <img
              src={item.image}
              alt="Card"
              style={{
                width: "100%",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "relative",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "70%",
                background: "#F5F7FA",
                padding: "15px",
                borderRadius: "5px",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  margin: "10px 0",
                  fontFamily: "'Inter', sans-serif",
                  color: "#717171",
                  opacity: "90%",
                }}
              >
                {item.title}
              </h3>
              <a
                href={item.linkUrl}
                style={{
                  color: "green",
                  textDecoration: "none",
                  fontWeight: "semibold",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {item.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>

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
        Pellentesque suscipit fringilla libero eu.
      </div>
    </div>
  );
};

export default Section;
