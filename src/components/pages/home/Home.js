import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="triangle-topleft" />
      <div
        style={{
          position: "absolute",
          top: "100px",
          display: "flex",
          flexDirection: "row"
        }}
      >
        <div
          style={{
            flex: "1",
            marginLeft: "4%",
            marginRight: "2%",
            marginTop: "3%"
          }}
        >
          <h2 className="HeroTitle ">
            The most effective way to{" "}
            <span className="HeroTitle Blue">plan your build</span>
          </h2>
          <h5 style={{ fontSize: "1.4rem" }}>
            Increase efficiency through{" "}
            <span style={{ fontWeight: "bold" }}>professional plans</span>
          </h5>
          <h5 style={{ fontSize: "1.4rem" }}>
            A comprehensive Building Reg plans for build clarity and submission
          </h5>
          <h5 style={{ fontSize: "1.4rem" }}>
            Let us deal with the technicalities of Planning and Building
            Regulations
          </h5>
        </div>
        <div style={{ flex: "1.6" }}>
          <div>
            <img
              src={require("../../../assets/images/stock-photo-engineer-people-meeting-working-and-pointing-at-a-drawings-in-office-for-discussing-engineering-704715226.jpg")}
              alt="HomeImage"
              className="imageStyle"
            />
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row", marginTop: "20%" }}>
        <div style={{ flex: "1", marginLeft: "4%", marginRight: "4%" }}>
          <h3 className="HeroTitle ">Let's get your plans right</h3>
          <h5>
            A fully comprehensive set of plans with the latest 3D modelling done
            from real professionals for extra clarity. So what you see on plan
            is what you get, no confusion, no fuss.
          </h5>
          <h5>
            Any problems can be highlighted and quickly dealt with, with our
            unique mastery of the latest software
          </h5>
        </div>
        <div style={{ flex: "1.7" }}>
          <div>
            <img
              src={require("../../../assets/images/stock-photo-engineer-people-meeting-working-and-pointing-at-a-drawings-in-office-for-discussing-engineering-704715226.jpg")}
              alt="HomeImage"
              className="imageStyle2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
