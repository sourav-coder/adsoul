import React from "react";
import Appstation from "./Appstation"
import logo from "../image/asset1.svg";
import icon1 from "../image/icon1.svg";
import icon2 from "../image/icon2.svg";
import icon3 from "../image/icon3.svg";
import icon4 from "../image/icon4.svg";




export default function Home() {
  return (
    <div className="row">
        {/* 1st part */}
      <div className="col-md-6">
        <div className="header">
          <p>ADSOUL</p>
          <img src={logo} alt="" />
        </div>

        <div className="features">
          <h1>Revenue Optimization</h1>
          <div className="row">
            <div className="col-md-6">
              <img src={icon1} alt="" />
              <p>Fill Rate</p>
            </div>

            <div className="col-md-6">
              <img src={icon2} alt="" />
              <p>Improved CTR</p>
            </div>
          </div>
        
            {/* 2nd column */}
          <div className="row">
            <div className="col-md-6">
              <img src={icon3} alt="" />
              <p>Refresh Rate</p>
            </div>

            <div className="col-md-6">
              <img src={icon4} alt="" />
              <p>Quick Integration</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd part */}
      <div className="col-md-6">
        <Appstation />
      </div>
    </div>
  );
}
