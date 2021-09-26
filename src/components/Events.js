import React from 'react'
import './bootstrap.css'
import './style.css'
import events1 from './assets/events-1.jpg'
import events2 from './assets/events-2.jpg'
import {Link} from 'react-router-dom';

function Events() {
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
          <h2>Events</h2>
          <p>
            Events, webinars and hackathon in colleges from around tamil Nadu can be found here.
          </p>
        </div>
      </div>
      
      <section id="events" class="events">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-md-6 d-flex align-items-stretch">
              <div class="card">
                <div class="card-img">
                  <Link to = '/home'><img src={events1} alt="..." /></Link>
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="">Introduction to webdesign</a>
                  </h5>
                  <p class="fst-italic text-center">
                    Sunday, September 18th at 7:00 pm
                  </p>
                  <p class="card-text">
                    This webinar introduction to web design is taught by our experienced professors, keep your dates booked.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 d-flex align-items-stretch">
              <div class="card">
                <div class="card-img">
                  <Link to = '/home'><img src={events2} alt="..." /></Link>
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    <a href="">Marketing Strategies</a>
                  </h5>
                  <p class="fst-italic text-center">
                    Sunday, September 25th at 7:00 pm
                  </p>
                  <p class="card-text">
                  This webinar on Marketing Strategies is taught by our experienced professors, keep your dates booked.
                  </p>
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

export default Events
