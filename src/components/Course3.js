import React from "react";

import "./bootstrap.css";

import coursedetails from "./assets/course-details.jpg";
import coursedetails1 from "./assets/course-details-tab-1.png";
import coursedetails2 from "./assets/course-details-tab-2.png";
import coursedetails3 from "./assets/course-details-tab-3.png";
import coursedetails4 from "./assets/course-details-tab-4.png";
import coursedetails5 from "./assets/course-details-tab-5.png";
import { Link } from "react-router-dom";
// import ReactPlayer from "react-player/youtube";

import "./style.css";

function Course1() {
  return (
    <div>
      <header id="header" class="fixed-top">
        <div class="container d-flex align-items-center">
          <h1 class="logo me-auto">
            <Link to="/home">Mydeen</Link>
          </h1>

          <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>

          {/* <a href="courses.html" class="get-started-btn">
            Get Started
          </a> */}
        </div>
      </header>
      <main id="main">
        <div class="breadcrumbs" data-aos="fade-in">
          <div class="container">
            <h2>Course Details</h2>
            <h6>
              This is a Java Course that will take you from the complete
              beginner to an advanced Java Developer.
            </h6>
          </div>
        </div>

        <section id="course-details" class="course-details">
          <div class="container" data-aos="fade-up">
            <div class="row">
              <div class="col-lg-8">
                <img src={coursedetails} class="img-fluid" alt="" />
                <h3>Java - (Beginner to Advanced)</h3>
                <p>
                  Java is a high-level, class-based, object-oriented programming
                  language.It is a general-purpose programming language intended
                  to let application developers write once, run anywhere (WORA).
                  <br></br>
                  for more info, refer official documentation.
                </p>
              </div>
              <div class="col-lg-4">
                <div class="course-info d-flex justify-content-between align-items-center">
                  <h5>Trainer</h5>
                  <p>
                    <a href="#">Vignesh</a>
                  </p>
                </div>

                <div class="course-info d-flex justify-content-between align-items-center">
                  <h5>Course Fee</h5>
                  <p>Rs.800</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cource-details-tabs" class="cource-details-tabs">
          <div class="container" data-aos="fade-up">
            <div class="row">
              <div class="col-lg-3">
                <ul class="nav nav-tabs flex-column">
                  <li class="nav-item">
                    <a
                      class="nav-link active show"
                      data-toggle="tab"
                      href="#tab-1"
                    >
                      <h5>
                        <strong>Lecture 1</strong>
                      </h5>
                    </a>
                    <ul>
                      {/* <li><button class = 'btn btn-secondary'>Lecture 1 Assignment</button></li> */}
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-2">
                      <h5>
                        <strong>Lecture 2</strong>
                      </h5>
                    </a>
                    <ul>
                      {/* <li><button class = 'btn btn-secondary'>Lecture 2 Assignment</button></li> */}
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-3">
                      <h5>
                        <strong>Lecture 3</strong>
                      </h5>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-4">
                      <h5>
                        <strong>Lecture 4</strong>
                      </h5>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#tab-5">
                      <h5>
                        <strong>Lecture 5</strong>
                      </h5>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-9 mt-4 mt-lg-0">
                <div class="tab-content">
                  <div class="tab-pane active show" id="tab-1">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Resources - Lecture 1</h3>
                        <ul>
                          <Link to="/cr-3-1.1">
                            <h4>
                              <a>Lecture 1.1 - (Java Introduction)</a>
                            </h4>
                          </Link>
                          <br></br>
                          <Link to="/cr-3-1.2">
                            <h4>
                              <a>Lecture 1.2 - (Datatypes & Variables)</a>
                            </h4>
                          </Link>
                          <br></br>
                          <Link to="/cr-3-1.3">
                            <h4>
                              <a>
                                Lecture 1.3 - (Operators & Contol Statements)
                              </a>
                            </h4>
                          </Link>
                          <br></br>
                          <Link to="/cr-3-1.4">
                            <h4>
                              <a>Lecture 1.4 - (Classes)</a>
                            </h4>
                          </Link>
                          <br></br>
                          <Link to="/cr-3-1.5">
                            <h4>
                              <a>Lecture 1.5 - (Methods)</a>
                            </h4>
                          </Link>
                          <br></br>
                        </ul>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src={coursedetails1} alt="" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane active show" id="tab-2">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Resources - Lecture 2</h3>
                        <ul>
                          <Link to="/cr-3-2.1">
                            <h4>
                              <a>Lecture 2.1 - (Packages and Interface)</a>
                            </h4>
                          </Link>
                          <br></br>
                          <Link to="/cr-3-2.2">
                            <h4>
                              <a>Lecture 2.2 - (Exception Handling)</a>
                            </h4>
                          </Link>
                          <br></br>
                          <Link to="/cr-3-2.3">
                            <h4>
                              <a>Lecture 2.3 - (Threads)</a>
                            </h4>
                          </Link>
                          <br></br>
                          <Link to="/cr-3-2.4">
                            <h4>
                              <a>Lecture 2.4 - (Practice Programs)</a>
                            </h4>
                          </Link>
                          <br></br>
                        </ul>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src={coursedetails2} alt="" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane active show" id="tab-3">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Resources - Lecture 3</h3>
                        <ul>
                          <Link to="/cr-3-3.1">
                            <h4>
                              <a>
                                Lecture 3.1 - (String Handling & String Buffer)
                              </a>
                            </h4>
                          </Link>
                          <br></br>
                          <Link to="/cr-3-3.2">
                            <h4>
                              <a>
                                Lecture 3.2 - (Library,Math and Process
                                Functions)
                              </a>
                            </h4>
                          </Link>
                          <br></br>
                          <Link to="/cr-3-3.3">
                            <h4>
                              <a>
                                Lecture 3.3 - (Cloning and System Functions)
                              </a>
                            </h4>
                          </Link>
                          <br></br>
                          <Link to="/cr-3-3.4">
                            <h4>
                              <a>Lecture 3.4 - (Practice Programs)</a>
                            </h4>
                          </Link>
                          <br></br>
                        </ul>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src={coursedetails3} alt="" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane active show" id="tab-4">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Resources - Lecture 4</h3>
                        <ul>
                          <Link to="/cr-3-4.1">
                            <h4>
                              <a>
                                Lecture 4.1 - (Collection Interface and Classes)
                              </a>
                            </h4>
                          </Link>
                          <br></br>
                          <Link to="/cr-3-4.2">
                            <h4>
                              <a>Lecture 4.2 - (String Tokenizer)</a>
                            </h4>
                          </Link>
                          <br></br>
                          <Link to="/cr-3-4.3">
                            <h4>
                              <a>Lecture 4.3 - (Input and Output Streams)</a>
                            </h4>
                          </Link>
                          <br></br>
                          <Link to="/cr-3-4.4">
                            <h4>
                              <a>Lecture 4.4 - (Stream Classes)</a>
                            </h4>
                          </Link>
                          <br></br>
                        </ul>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src={coursedetails4} alt="" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane active show" id="tab-5">
                    <div class="row">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Resources - Lecture 5</h3>
                        <ul>
                          <Link to="/cr-3-5.1">
                            <h4>
                              <a>Lecture 5.1 - (Swing Functions)</a>
                            </h4>
                          </Link>
                          <br></br>
                          <Link to="/cr-3-5.2">
                            <h4>
                              <a>Lecture 5.2 - (Event Handling)</a>
                            </h4>
                          </Link>
                          <br></br>
                          <Link to="/cr-3-5.3">
                            <h4>
                              <a>Lecture 5.3 - (JDBC)</a>
                            </h4>
                          </Link>
                          <br></br>
                        </ul>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img src={coursedetails5} alt="" class="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Course1;
