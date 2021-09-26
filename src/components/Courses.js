import React from 'react'
import './bootstrap.css'
import './style.css'

import course1 from './assets/course-1.jpg'
import course2 from './assets/course-2.jpg'
import course3 from './assets/course-3.jpg'
import trainer1 from './assets/trainer-1.jpg'
import trainer2 from './assets/trainer-2.jpg'
import trainer3 from './assets/trainer-3.jpg'
import {Link} from 'react-router-dom';

import Course1 from "./Course1";
import Course2 from "./Course2";
import Course3 from "./Course3";

function Courses() {
  return (
    <div>
      <header id="header" class="fixed-top">
      <div class="container d-flex align-items-center">
      <h1 class="logo me-auto"><Link to ='/home'>Mydeen</Link></h1>
        

        <nav id="navbar" class="navbar order-last order-lg-0">
          <ul>
            
            <li><Link to ='/courses'>Courses</Link></li>
            <li><Link to ='/events'>Events</Link></li>
            <li><Link to ='/contact'>Contact</Link></li>
            <li><Link to ='/about'>About</Link></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        

        {/* <a href="courses.html" class="get-started-btn">Get Started</a> */}
      </div>
    </header>
  

    <main id="main" data-aos="fade-in">
      
      <div class="breadcrumbs">
        <div class="container">
          <h2>Courses</h2>
          <p>
            Our three top most courses are here.
          </p>
        </div>
      </div>
      
      <section id="courses" class="courses">
        <div class="container" data-aos="fade-up">
          <div class="row" data-aos="zoom-in" data-aos-delay="100">
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div class="course-item">
                <img
                  src={course1}
                  class="img-fluid"
                  alt="..."
                />
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

                  <h3><Link to='/course-1'>Web Development</Link></h3>
                  <p>
                  Web development is the work involved in developing a Web site for the Internet (World Wide Web).Web development refers to the building, creating, and maintaining of websites
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
                      <img
                        src={trainer1}
                        class="img-fluid"
                        alt=""
                      />
                      <span>Asan Mydeen</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            

            <div
              class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
            >
              <div class="course-item">
                <img
                  src={course2}
                  class="img-fluid"
                  alt="..."
                />
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
                    <Link to = '/course-2'>Machine Learning</Link>
                  </h3>
                  <p>
                  Machine learning is the study of computer algorithms that can improve automatically through experience and by the use of data.
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
                      <img
                        src={trainer2}
                        class="img-fluid"
                        alt=""
                      />
                      <span>Udhaya Kumar</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            

            <div
              class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
            >
              <div class="course-item">
                <img
                  src={course3}
                  class="img-fluid"
                  alt="..."
                />
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

                  <h3><Link to = '/course-3'>Java Programming</Link></h3>
                  <p>
                  Java is a high-level, class-based, object-oriented programming language.Java is powering the innovation behind our digital world.
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
                      <img
                        src={trainer3}
                        class="img-fluid"
                        alt=""
                      />
                      <span>Vignesh</span>
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
  )
}

export default Courses
