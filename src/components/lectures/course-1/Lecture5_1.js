import React from "react";
import ReactPlayer from "react-player/youtube";
import "../../style.css";
import "../../bootstrap.css";
import { Link } from "react-router-dom";
import ppt from "./Unit V/1. Swing- Intro,Features,Components .pptx";

function Lecture5_1() {
  return (
    <>
      <section id="popular-courses" class="courses">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2><strong>Lecture 5.1 - (Swing Components)</strong></h2>
            <br></br>
            <h3>Download Files For This Lecture</h3>
            <br></br>
            <ul>
              <li>
                <a href={ppt}>
                  <h5>Download PPT</h5>
                </a>
                <br></br>
              </li>
              {/* <li>
                  <a><h5>download PDF</h5></a><br></br>
                </li> */}
            </ul>

            <h2><strong>Video on Swing Components</strong></h2>
            <br></br>
            <ReactPlayer
              width="640px"
              height="380px"
              controls
              volume
              url="https://www.youtube.com/watch?v=aqHhpahguVY"
              
            />
            {/* <button class="btn btn-primary"> Submit Assignment</button> */}
            <button class="btn btn-primary hell"> Attend Quiz </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Lecture5_1;
