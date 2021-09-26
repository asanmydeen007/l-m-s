import React from 'react'
import './bootstrap.css'
import about from './assets/about.jpg'
import './style.css'
import {Link} from 'react-router-dom';


function About() {
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

  <main id="main">
   
    <div class="breadcrumbs" data-aos="fade-in">
      <div class="container">
        <h2>About Us</h2>
        <h5>This is a website build by Asan Mydeen as a Mini-Project </h5>
      </div>
    </div>

    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <img src={about} class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>Mydeen's E-Learning Website.</h3>
            <p class="fst-italic">
            Enhance and grow your talent with us.


            </p>
            <ul>
              <li><i class="bi bi-check-circle"></i>Find solutions for Complex questions.
</li>
              <li><i class="bi bi-check-circle"></i> Learn job-ready skills for high-demand roles in hours instead of years.
</li>
              <li><i class="bi bi-check-circle"></i> Study Anywhere, Anytime with us.</li>
            </ul>
            <p>
            
We will continue to grow with your feedback.
            </p>

          </div>
        </div>

      </div>
    </section>

    
   
      

    

  </main>
    </div>
  )
}

export default About
