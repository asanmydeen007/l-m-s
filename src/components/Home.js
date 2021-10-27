import React from "react";
import "./bootstrap.css";

import course1 from "./assets/course-1.jpg";
import course2 from "./assets/course-2.jpg";
import course3 from "./assets/course-3.jpg";
import trainer1 from "./assets/trainer-1.jpg";
import trainer2 from "./assets/trainer-2.jpg";
import trainer3 from "./assets/trainer-3.jpg";
import about from "./assets/about.jpg";
import { Link } from "react-router-dom";
import "./style.css";
import Fade from 'react-reveal/Fade'
import Pulse from 'react-reveal/Pulse'
import Rubberband from 'react-reveal/RubberBand'
import Zoom from 'react-reveal/Zoom'

function Home() {
  return (
    <div>
      <header id="header" class="fixed-top">
        <div class="container d-flex align-items-center">
          <h1 class="logo me-auto">
           <Fade left> <Link to="/home">Mydeen</Link></Fade>
          </h1>

          <nav id="navbar" class="navbar order-last order-lg-0">
          
            <ul>
            <Fade  delay={200} top>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              </Fade>
              <Fade delay={600} top>
              <li>
                <Link to="/events">Events</Link>
              </li>
              </Fade>
              <Fade delay={1000} top>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              </Fade>
              <Fade delay={1400} top>
              <li>
                <Link to="/about">About</Link>
              </li>
              </Fade>
              <Fade delay={1800} top>
              <li>
                <Link to="/">Profile</Link>
              </li>
              </Fade>
            </ul>
           
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>

          {/* <a href="#" class="get-started-btn">Get Started</a> */}
        </div>
      </header>
<Pulse>
      <section
        id="hero"
        class="d-flex justify-content-center align-items-center"
      >
        <div
          class="container position-relative"
        ><Fade left delay={80}>
          <h1>
            Learning Today,
            <br />
            Leading Tomorrow
          </h1>
          </Fade>
          <Fade left delay={500}>
          <h2>Be the Change that you want to see in the world.</h2>
          </Fade>
          {/* <a href="#" class="btn-get-started">Get Started</a> */}
        </div>
      </section>
      </Pulse>

      <main id="main">
        <section id="about" class="about">
          <div class="container" data-aos="fade-up">
            <div class="row">
              <div
                class="col-lg-6 order-1 order-lg-2"
                
              >
              <Zoom delay={1000}> <img src={about} class="img-fluid" alt="" /> </Zoom>
              </div>
              <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
               <Fade bottom delay={1000}>
                <h3>Mydeen's E-Learning Website.</h3>
                <p class="fst-italic">Enhance and grow your talent with us.</p></Fade>
                
                <ul>
                <Fade top delay={140}>
                  <li>
                    <i class="bi bi-check-circle"></i> Find solutions for
                    Complex questions.
                  </li>
                  </Fade>
                  <Fade top delay={220}>
                  <li>
                    <i class="bi bi-check-circle"></i> Learn job-ready skills
                    for high-demand roles in hours instead of years.
                  </li>
                  </Fade>
                  <Fade top delay={250}>
                  <li>
                    <i class="bi bi-check-circle"></i> Study Anywhere, Anytime
                    with us.
                  </li>
                  </Fade>
                </ul>
                <Fade top delay={290}>
                <p>We will continue to grow with your feedback.</p>
                </Fade>
              </div>
            </div>
          </div>
        </section>

        <section id="popular-courses" class="courses">
          <div class="container" data-aos="fade-up">
            <div class="section-title">

              <h2>Courses</h2>
              <Rubberband delay={400}>
              <p>Popular Courses</p>
              </Rubberband>
            </div>

            <div class="row">
              <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                <Fade top delay={200}>
                <div class="course-item">
                  
                  <img src={course1} class="img-fluid" alt="..." />
                  
                  <div class="course-content">
                    <div
                      class="
                      d-flex
                      justify-content-between
                      align-items-center
                      mb-3
                    "
                    >
                      <h4>Web Development</h4>
                      <p class="price">Rs.500</p>
                    </div>

                    <h3>
                      <a href="#">Website Design</a>
                    </h3>
                    <p>
                      Web development is the work involved in developing a Web
                      site for the Internet (World Wide Web).Web development refers to the building, creating, and maintaining of websites.
                    </p>
                    <div
                      class="
                      trainer
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                    >
                      <div class="trainer-profile d-flex align-items-center">
                        <img src={trainer1} class="img-fluid" alt="" />
                        <span>Asan Mydeen</span>
                      </div>
                    </div>
                  </div>
                </div>
                </Fade>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <Fade top delay={650}>
                <div class="course-item">
                  <img src={course2} class="img-fluid" alt="..." />
                  <div class="course-content">
                    <div
                      class="
                      d-flex
                      justify-content-between
                      align-items-center
                      mb-3
                    "
                    >
                      <h4>Machine Learning</h4>
                      <p class="price">Rs.750</p>
                    </div>

                    <h3>
                      <a href="#">Machine Learning</a>
                    </h3>
                    <p>
                      Machine learning is the study of computer algorithms that
                      can improve automatically through experience and by the
                      use of data.
                    </p>
                    <div
                      class="
                      trainer
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                    >
                      <div class="trainer-profile d-flex align-items-center">
                        <img src={trainer2} class="img-fluid" alt="" />
                        <span>Udhaya Kumar</span>
                      </div>
                    </div>
                  </div>
                </div>
                </Fade>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
              <Fade top delay={1050}>
                <div class="course-item">
                  <img src={course3} class="img-fluid" alt="..." />
                  <div class="course-content">
                    <div
                      class="
                      d-flex
                      justify-content-between
                      align-items-center
                      mb-3
                    "
                    >
                      <h4>Programming</h4>
                      <p class="price">Rs.800</p>
                    </div>

                    <h3>
                      <Link to="/course-3">Java Programming</Link>
                    </h3>
                    <p>
                      Java is a high-level, class-based, object-oriented
                      programming language.Java is powering the innovation behind our digital world.
                    </p>
                    <div
                      class="
                      trainer
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                    >
                      <div class="trainer-profile d-flex align-items-center">
                        <img src={trainer3} class="img-fluid" alt="" />
                        
                        <span>Vignesh</span>
                        
                      </div>
                    </div>
                  </div>
                </div>
                </Fade>
              </div>
            </div>
          </div>
        </section>

        <section id="trainers" class="trainers">
          <div class="container" data-aos="fade-up">
            <div class="row" data-aos="zoom-in" data-aos-delay="100">
             <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
               <div class="member">
                <img src={trainer1} class="img-fluid" alt="" />
                <Zoom delay={600}>
                  <div class="member-content">
                    <h4>Asan Mydeen</h4>
                    <span>Web Developer</span>
                    <p>
                      Asan Mydeen is an experienced web developer and has
                      knowledge in latest frameworks.
                    </p>
                  </div></Zoom>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div class="member">
                  <img src={trainer2} class="img-fluid" alt="" />
                  <Zoom delay={600}><div class="member-content">
                    <h4>Udhaya Kumar</h4>
                    <span>Machine Learning Engineer.</span>
                    <p>
                      Udhaya Kumar has served as a ML developer in top
                      companies.
                    </p>
                  </div></Zoom>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div class="member">
                  <img src={trainer3} class="img-fluid" alt="" />
                 <Zoom delay={600}> <div class="member-content">
                    <h4>Vignesh</h4>
                    <span> Java Programmer</span>
                    <p>
                      Vignesh is a well-versed java developer for the past
                      15years.
                    </p>
                  </div></Zoom>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
