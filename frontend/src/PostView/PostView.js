import React from "react";
import homeImg from "../Mock-data/home.jpg";
import "../App.css";
import { Link } from "react-router-dom";

export default function PostView() {
  return (
    <div className="parent-css">
      <div className="child-css">
        <div className="left-css">
          <img src={homeImg} alt="homeImg" width="100%" height="100%" />
        </div>
        <div className="right-css">
          <p>10x Team 04</p>
          <Link to="/LandingPage" style={{ textDecoration: "none" }}>
            <button>Enter</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
