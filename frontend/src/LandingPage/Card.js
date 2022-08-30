import React from "react";
import shareImg from "../Mock-data/share.svg";

export default function Card({ obj }) {
   //console.log(obj);
  const { name, location, likes, description, PostImage, date } = obj;

  return (
    <div className="card">
      <div className="head">
        <div className="name" style={{ marginTop: "8px" }}>
          <h3>{name}</h3>
          <p style={{ paddingBottom: "7px" }}>{location}</p>
        </div>
        <div className="more">...</div>
      </div>

      <div style={{ width: "100%", height: "60%" }}>
        <img
          //src={process.env.REACT_APP_API + "/image/" + PostImage}
          src={"http://localhost:3004/api/image/" + PostImage}
          // src={"https://grv-insta-server.herokuapp.com/api/image/" + PostImage}
         
          
      
          alt="img"
          className="post-img"
        />
      </div>

      <div className="foot">
        <div>
          <span>{"\u2661"}</span>
          <span>
            <img src={shareImg} alt="shareImg" />
          </span>
        </div>
        <div className="date">{date.split("GMT")[0]}</div>
      </div>

      <div className="like-content">
        <p style={{ fontWeight: "bold" }}>{likes} likes</p>
        <p className="content">{description}</p>
      </div>
    </div>
  );
}
