import { React } from 'react'
const Home = () => {
  return (
    <>
      <div className="preloader">
        <div className="loader">
          <div className="loader-outter"></div>
          <div className="loader-inner"></div>

          <div className="indicator">
            <svg width="16px" height="12px">
              <polyline
                id="back"
                points="1 6 4 6 6 11 10 1 12 6 15 6"
              ></polyline>
              <polyline
                id="front"
                points="1 6 4 6 6 11 10 1 12 6 15 6"
              ></polyline>
            </svg>
          </div>
        </div>
      </div>

      <ul className="pro-features">
        <a className="get-pro" href="#">
          Click Me
        </a>
        <li className="big-title">Language Used</li>
        <li>React</li>
        <li>Bootstrap</li>
        <li>Java Script</li>
        <li>Vite</li>
        <li>Css</li>
      </ul>

      <header className="header">
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-5 col-12">
                <ul className="top-link">
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Doctors</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-7 col-12">
                <ul className="top-contact">
                  <li>
                    <i className="fa fa-phone"></i>021 221 7899
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>
                    <a
                      href="mailto:support@yourmail.
                                com"
                    >
                      multiplusjaffna@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="header-inner">
          <div className="container">
            <div className="inner">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-12">
                  <div className="logo">
                    <a href="index.html">
                      <img src="./assets/img/logo.png" alt="#" />
                    </a>
                  </div>

                  <div className="mobile-nav"></div>
                </div>
                <div className="col-lg-7 col-md-9 col-12">
                  <div className="main-menu">
                    <nav className="navigation">
                      <ul className="nav menu">
                        <li className="active">
                          <a href="#">
                            Home <i className="icofont-rounded-down"></i>
                          </a>
                          <ul className="dropdown">
                            <li>
                              <a href="index.html">Home Page 1</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Doctos </a>
                        </li>
                        <li>
                          <a href="#">Services </a>
                        </li>
                        <li>
                          <a href="#">
                            Pages <i className="icofont-rounded-down"></i>
                          </a>
                          <ul className="dropdown">
                            <li>
                              <a href="404.html">404 Error</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            Blogs <i className="icofont-rounded-down"></i>
                          </a>
                          <ul className="dropdown">
                            <li>
                              <a href="blog-single.html">Blog Details</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">Contact Us</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-lg-2 col-12">
                  <div className="get-quote">
                    <a href="appointment.html" className="btn">
                      Book Appointment
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="slider">
        <div className="hero-slider">
          <div className="single-slider sliderImg1">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="text">
                    <h1>
                      We Provide <span>Medical</span> Services That You Can{" "}
                      <span>Trust!</span>
                    </h1>
                    <p>
                      We are dedicated to delivering high-quality healthcare services with compassion and expertise.{" "}
                    </p>
                    <div className="button">
                      <a href="#" className="btn">
                        Get Appointment
                      </a>
                      <a href="#" className="btn primary">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="single-slider sliderImg1">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="text">
                    <h1>
                      We Provide <span>Medical</span> Services That You Can{" "}
                      <span>Trust!</span>
                    </h1>
                    <p>
                    Our team of experienced professionals utilizes advanced medical technology to ensure accurate diagnosis and effective
                    treatment.{" "}
                    </p>
                    <div className="button">
                      <a href="#" className="btn">
                        Get Appointment
                      </a>
                      <a href="#" className="btn primary">
                        About Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="single-slider sliderImg1">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="text">
                    <h1>
                      We Provide <span>Medical</span> Services That You Can{" "}
                      <span>Trust!</span>
                    </h1>
                    <p>
                    Whether you need routine checkups, specialized care, or emergency assistance, we are here to provide
                    reliable and personalized medical solutions you can trust.{" "}
                    </p>
                    <div className="button">
                      <a href="#" className="btn">
                        Get Appointment
                      </a>
                      <a href="#" className="btn primary">
                        Conatct Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="schedule">
        <div className="container">
          <div className="schedule-inner">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12 ">
                <div className="single-schedule first">
                  <div className="inner">
                    <div className="icon">
                      <i className="fa fa-ambulance"></i>
                    </div>
                    <div className="single-content">
                      <span>Expert Availability</span>
                      <h4>Doctors Timetable</h4>
                      <p>
                        Plan your visit with ease using our updated doctors’ schedule. We offer flexible appointment slots to
                        accommodate your needs, ensuring you receive the best care at your convenience.
                      </p>
                      <a href="#">
                        LEARN MORE<i className="fa fa-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="single-schedule middle">
                  <div className="inner">
                    <div className="icon">
                      <i className="icofont-prescription"></i>
                    </div>
                    <div className="single-content">
                      <span>Rapid Response</span>
                      <h4>Emergency Cases</h4>
                      <p>
                        Our emergency services are available 24/7, ensuring immediate medical attention when you need it most.
                        With highly skilled professionals and advanced medical equipment, we provide swift and efficient care.
                      </p>
                      <a href="#">
                        LEARN MORE<i className="fa fa-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-12">
                <div className="single-schedule last">
                  <div className="inner">
                    <div className="icon">
                      <i className="icofont-ui-clock"></i>
                    </div>
                    <div className="single-content">
                      <span>Convenient Hours</span>
                      <h4>Opening Hours</h4>
                      <ul className="time-sidual">
                        <li className="day">
                          Monday - Friday <span>8.00-20.00</span>
                        </li>
                        <li className="day">
                          Saturday <span>9.00-18.30</span>
                        </li>
                        <li className="day">
                          Sunday <span>Closed</span>
                        </li>
                      </ul>
                      <a href="#">
                        LEARN MORE<i className="fa fa-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Feautes section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
            <div className="section-title">
                <h2>We Are Always Ready to Help You & Your Family</h2>
                <img src="/assets/img/section-img.png" alt="#" />
                <p>
                  We are committed to providing compassionate and professional healthcare services.
                  Our dedicated team ensures that you and your family receive the best medical care with advanced technology
                  and expert guidance.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-12">
              <div className="single-features">
                <div className="signle-icon">
                  <i className="icofont icofont-ambulance-cross"></i>
                </div>
                <h3>Emergency Help</h3>
                <p>
                  Our emergency response team is available 24/7 to provide immediate medical attention when you need it most.
                  With state-of-the-art ambulances and skilled professionals, we ensure rapid and effective care during critical moments.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="single-features">
                <div className="signle-icon">
                  <i className="icofont icofont-medical-sign-alt"></i>
                </div>
                <h3>Enriched Pharmecy</h3>
                <p>
                  Our enriched pharmacy is stocked with high-quality medications and essential healthcare products.
                  We ensure accessibility to the best pharmaceutical solutions to support your well-being.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="single-features last">
                <div className="signle-icon">
                  <i className="icofont icofont-stethoscope"></i>
                </div>
                <h3>Medical Treatment</h3>
                <p>
                  From routine checkups to specialized treatments, our medical team is here to provide comprehensive healthcare solutions.
                  With a patient-centered approach, we prioritize your health and recovery at every step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="fun-facts" className="fun-facts section overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-fun">
                <i className="icofont icofont-home"></i>
                <div className="content">
                  <span className="counter">3468</span>
                  <p>Hospital Rooms</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-fun">
                <i className="icofont icofont-user-alt-3"></i>
                <div className="content">
                  <span className="counter">557</span>
                  <p>Specialist Doctors</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-fun">
                <i className="icofont-simple-smile"></i>
                <div className="content">
                  <span className="counter">4379</span>
                  <p>Happy Patients</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-fun">
                <i className="icofont icofont-table"></i>
                <div className="content">
                  <span className="counter">32</span>
                  <p>Years of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="why-choose section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Offer Different Services To Improve Your Health</h2>
                <img src="/assets/img/section-img.png" alt="#" />
                <p>
                At Multiplus Medical, we are dedicated to enhancing your well-being with top-quality
                  healthcare services. Our expert team provides personalized treatments to ensure
                  you receive the best possible care.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="choose-left">
                <h3>Who We Are</h3>
                <p>
                Multiplus Medical is a trusted healthcare provider offering comprehensive medical
                  solutions. We prioritize patient care, combining advanced medical technology with
                  a compassionate approach to treatment.{" "}
                </p>
                <p>
                Our experienced team is committed to delivering high-quality healthcare services
                  that focus on diagnosis, treatment, and long-term wellness.{" "}
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul className="list">
                      <li>
                        <i className="fa fa-caret-right"></i> Personalized treatment plans.
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i> 24/7 emergency medical services.
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i> Advanced diagnostic and treatment facilities.
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="list">
                      <li>
                        <i className="fa fa-caret-right"></i> Highly skilled and experienced doctors.
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i> Preventive care and wellness programs.
                      </li>
                      <li>
                        <i className="fa fa-caret-right"></i> Compassionate patient-centered approach.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="choose-right">
                <div className="video-image">
                  <div className="promo-video">
                    <div className="waves-block">
                      <div className="waves wave-1"></div>
                      <div className="waves wave-2"></div>
                      <div className="waves wave-3"></div>
                    </div>
                  </div>

                  <a
                    href="https://www.youtube.com/watch?v=RFVXy6CRVR4"
                    className="video video-popup mfp-iframe"
                  >
                    <i className="fa fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="call-action overlay" data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="content">
                <h2>Do you need Emergency Medical Care? Call +94 75 555 5551</h2>
                <p>
                  In case of a medical emergency, our dedicated team is available 24/7 to provide immediate
                  care and support. With advanced medical facilities and experienced professionals, we ensure
                  that you receive prompt and reliable treatment when you need it the most.
                </p>
                <div className="button">
                  <a href="#" className="btn">
                    Contact Now
                  </a>
                  <a href="#" className="btn second">
                    Learn More<i className="fa fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Maintain Cleanliness Rules Inside Our Hospital</h2>
                <img src="/assets/img/section-img.png" alt="#" />
                <p>
                  We prioritize cleanliness and hygiene to ensure a safe and sterile
                  environment for our patients and staff. Our hospital follows strict sanitation protocols,
                  advanced sterilization techniques, and regular disinfection procedures to maintain the
                  highest standards of healthcare safety.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="owl-carousel portfolio-slider">
                <div className="single-pf">
                  <img src="/assets/img/pf1.jpg" alt="#" />
                  <a href="portfolio-details.html" className="btn">
                    View Details
                  </a>
                </div>
                <div className="single-pf">
                  <img src="/assets/img/pf2.jpg" alt="#" />
                  <a href="portfolio-details.html" className="btn">
                    View Details
                  </a>
                </div>
                <div className="single-pf">
                  <img src="/assets/img/pf3.jpg" alt="#" />
                  <a href="portfolio-details.html" className="btn">
                    View Details
                  </a>
                </div>
                <div className="single-pf">
                  <img src="/assets/img/pf4.jpg" alt="#" />
                  <a href="portfolio-details.html" className="btn">
                    View Details
                  </a>
                </div>
                <div className="single-pf">
                  <img src="/assets/img/pf1.jpg" alt="#" />
                  <a href="portfolio-details.html" className="btn">
                    View Details
                  </a>
                </div>
                <div className="single-pf">
                  <img src="/assets/img/pf2.jpg" alt="#" />
                  <a href="portfolio-details.html" className="btn">
                    View Details
                  </a>
                </div>
                <div className="single-pf">
                  <img src="/assets/img/pf3.jpg" alt="#" />
                  <a href="portfolio-details.html" className="btn">
                    View Details
                  </a>
                </div>
                <div className="single-pf">
                  <img src="/assets/img/pf4.jpg" alt="#" />
                  <a href="portfolio-details.html" className="btn">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Offer Different Services To Improve Your Health</h2>
                <img src="/assets/img/section-img.png" alt="#" />
                <p>
                  Our healthcare services are designed to provide comprehensive medical care,
                  ensuring the well-being of our patients. From preventive treatments to
                  advanced surgical procedures, we are committed to delivering high-quality
                  healthcare with compassion and expertise.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-service">
                <i className="icofont icofont-prescription"></i>
                <h4>
                  <a href="service-details.html">General Treatment</a>
                </h4>
                <p>
                  We provide expert diagnosis and treatment for a wide range of
                  medical conditions to ensure your overall health and well-being.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-service">
                <i className="icofont icofont-tooth"></i>
                <h4>
                  <a href="service-details.html">Teeth Whitening</a>
                </h4>
                <p>
                  Our professional teeth whitening services help you achieve a
                  brighter, healthier smile with safe and effective treatments.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-service">
                <i className="icofont icofont-heart-alt"></i>
                <h4>
                  <a href="service-details.html">Heart Surgery</a>
                </h4>
                <p>
                  Advanced cardiac care, including life-saving heart surgeries,
                  performed by experienced specialists using cutting-edge technology.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-service">
                <i className="icofont icofont-listening"></i>
                <h4>
                  <a href="service-details.html">Ear Treatment</a>
                </h4>
                <p>
                  Comprehensive ear care services, including diagnosis and
                  treatment of hearing disorders and infections.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-service">
                <i className="icofont icofont-eye-alt"></i>
                <h4>
                  <a href="service-details.html">Vision Problems</a>
                </h4>
                <p>
                  Expert eye care services, including vision correction and
                  treatment of various eye conditions to maintain healthy eyesight.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-service">
                <i className="icofont icofont-blood"></i>
                <h4>
                  <a href="service-details.html">Blood Transfusion</a>
                </h4>
                <p>
                  Safe and reliable blood transfusion services ensuring timely
                  medical support for patients in need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-table section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Provide You The Best Treatment At Reasonable Prices</h2>
                <img src="/assets/img/section-img.png" alt="#" />
                <p>
                  Our medical services are affordable yet of the highest quality, ensuring
                  you get the best care without compromising your health or budget. From general
                  treatments to specialized surgeries, we provide excellent healthcare at
                  competitive prices, with payment options in Sri Lankan Rupees .
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12">
              <div className="single-table">
                <div className="table-head">
                  <div className="icon">
                    <i className="icofont icofont-ui-cut"></i>
                  </div>
                  <h4 className="title">Plastic Surgery</h4>
                  <div className="price">
                    <p className="amount">
                      LKR 75,000<span>/ Per Visit</span>
                    </p>
                  </div>
                </div>

                <ul className="table-list">
                  <li>
                    <i className="icofont icofont-ui-check"></i>Comprehensive consultation
                  </li>
                  <li>
                    <i className="icofont icofont-ui-check"></i>Advanced surgical techniques
                  </li>
                  <li className="cross">
                    <i className="icofont icofont-ui-close"></i>Non-invasive procedures
                  </li>
                  <li className="cross">
                    <i className="icofont icofont-ui-close"></i>Minor treatments available
                  </li>
                  <li className="cross">
                    <i className="icofont icofont-ui-close"></i>No follow-up required
                  </li>
                </ul>
                <div className="table-bottom">
                  <a className="btn" href="#">
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 col-12">
              <div className="single-table">
                <div className="table-head">
                  <div className="icon">
                    <i className="icofont icofont-tooth"></i>
                  </div>
                  <h4 className="title">Teeth Whitening</h4>
                  <div className="price">
                    <p className="amount">
                      LKR 35,000<span>/ Per Visit</span>
                    </p>
                  </div>
                </div>

                <ul className="table-list">
                  <li>
                    <i className="icofont icofont-ui-check"></i>Professional teeth whitening
                  </li>
                  <li>
                    <i className="icofont icofont-ui-check"></i>Safe and effective treatment
                  </li>
                  <li>
                    <i className="icofont icofont-ui-check"></i>Immediate visible results
                  </li>
                  <li className="cross">
                    <i className="icofont icofont-ui-close"></i>Self-administered treatments
                  </li>
                  <li className="cross">
                    <i className="icofont icofont-ui-close"></i>Home remedies available
                  </li>
                </ul>
                <div className="table-bottom">
                  <a className="btn" href="#">
                    Book Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 col-12">
              <div className="single-table">
                <div className="table-head">
                  <div className="icon">
                    <i className="icofont-heart-beat"></i>
                  </div>
                  <h4 className="title">Heart Surgery</h4>
                  <div className="price">
                    <p className="amount">
                      LKR 150,000<span>/ Per Visit</span>
                    </p>
                  </div>
                </div>

                <ul className="table-list">
                  <li>
                    <i className="icofont icofont-ui-check"></i>Comprehensive heart health
                  </li>
                  <li>
                    <i className="icofont icofont-ui-check"></i>Advanced cardiac procedures
                  </li>
                  <li>
                    <i className="icofont icofont-ui-check"></i>Skilled surgeons with years of experience
                  </li>
                  <li>
                    <i className="icofont icofont-ui-check"></i>24/7 cardiac monitoring available
                  </li>
                  <li>
                    <i className="icofont icofont-ui-check"></i>Pre-surgical consultations included
                  </li>
                </ul>
                <div className="table-bottom">
                  <a className="btn" href="#">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog section" id="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Keep up with Our Most Recent Medical News</h2>
                <img src="/assets/img/section-img.png" alt="#" />
                <p>
                  Stay informed with the latest updates on medical advancements, new treatments,
                  health tips, and breakthroughs in healthcare. Our blog offers expert insights
                  and the latest trends in the medical field, ensuring you receive reliable
                  information to take better care of your health.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-news">
                <div className="news-head">
                  <img src="/assets/img/blog1.jpg" alt="#" />
                </div>
                <div className="news-body">
                  <div className="news-content">
                    <div className="date">22 Aug, 2020</div>
                    <h2>
                      <a href="blog-single.html">
                        We Have Announced Our New Medical Product
                      </a>
                    </h2>
                    <p className="text">
                      We are excited to introduce a new product designed to enhance patient care
                      and improve recovery times. Read more about the cutting-edge features and
                      benefits this product offers to the medical community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-news">
                <div className="news-head">
                  <img src="/assets/img/blog2.jpg" alt="#" />
                </div>
                <div className="news-body">
                  <div className="news-content">
                    <div className="date">15 Jul, 2020</div>
                    <h2>
                      <a href="blog-single.html">
                        Top Five Ways for Solving Common Dental Problems
                      </a>
                    </h2>
                    <p className="text">
                      Dental health is crucial for overall well-being. Discover the top five ways
                      to maintain healthy teeth and gums, along with solutions to common dental issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-news">
                <div className="news-head">
                  <img src="/assets/img/blog3.jpg" alt="#" />
                </div>
                <div className="news-body">
                  <div className="news-content">
                    <div className="date">05 Jan, 2020</div>
                    <h2>
                      <a href="blog-single.html">
                        We Provide Highly Specialized Healthcare Solutions
                      </a>
                    </h2>
                    <p className="text">
                      At our facility, we offer specialized healthcare solutions designed to meet
                      the needs of patients with complex medical conditions. Explore our services
                      and learn how we can help you achieve optimal health.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="clients overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="owl-carousel clients-slider">
                <div className="single-clients">
                  <img src="/assets/img/client1.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="/assets/img/client2.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="/assets/img/client3.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="/assets/img/client4.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="/assets/img/client5.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="/assets/img/client1.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="/assets/img/client2.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="/assets/img/client3.png" alt="#" />
                </div>
                <div className="single-clients">
                  <img src="/assets/img/client4.png" alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="appointment">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Are Always Ready to Help You. Book An Appointment</h2>
                <img src="/assets/img/section-img.png" alt="#" />
                <p>
                  Our medical team is dedicated to providing you with the highest level of care.
                  Whether you re seeking a routine check-up or specialized treatment, we’re here
                  to assist you. Book your appointment today and take the first step towards better health.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <form className="form" action="#">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input name="name" type="text" placeholder="Name" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input name="email" type="email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input name="phone" type="text" placeholder="Phone" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <div className="nice-select form-control wide" tabIndex="0">
                        <span className="current">Department</span>
                        <ul className="list">
                          <li data-value="1" className="option selected">
                            Department
                          </li>
                          <li data-value="2" className="option">
                            Cardiac Clinic
                          </li>
                          <li data-value="3" className="option">
                            Neurology
                          </li>
                          <li data-value="4" className="option">
                            Dentistry
                          </li>
                          <li data-value="5" className="option">
                            Gastroenterology
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <div className="nice-select form-control wide" tabIndex="0">
                        <span className="current">Doctor</span>
                        <ul className="list">
                          <li data-value="1" className="option selected">
                            Doctor
                          </li>
                          <li data-value="2" className="option">
                            Dr. Akther Hossain
                          </li>
                          <li data-value="3" className="option">
                            Dr. Dery Alex
                          </li>
                          <li data-value="4" className="option">
                            Dr. Jovis Karon
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                      <input type="text" placeholder="Date" id="datepicker" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        placeholder="Write Your Message Here....."
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-5 col-md-4 col-12">
                    <div className="form-group">
                      <div className="button">
                        <button type="submit" className="btn">
                          Book An Appointment
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-8 col-12">
                    <p>( You will receive a confirmation via text message )</p>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="appointment-image">
                <img src="/assets/img/contact-img.png" alt="#" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="subscribe-text">
                <h6>Sign up for our Medical Newsletter</h6>
                <p className="">
                  Stay informed about the latest advancements in healthcare and receive tips on maintaining your well-being.
                  <br />
                  Get updates on medical treatments, wellness, and more directly to your inbox.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="subscribe-form">
                <form
                  action="mail/mail.php"
                  method="get"
                  target="_blank"
                  className="newsletter-inner"
                >
                  <input
                    name="EMAIL"
                    placeholder="Your email address"
                    className="common-input"
                    onFocus={(e) => (e.target.placeholder = '')}
                    onBlur={(e) => (e.target.placeholder = 'Your email address')}
                    required=""
                    type="email"
                  />
                  <button className="btn">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer">
                  <h2>About Us</h2>
                  <p>
                    We are dedicated to providing exceptional healthcare services. Our team of medical experts is here to ensure your well-being.
                  </p>

                  <ul className="social">
                    <li>
                      <a href="#">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-vimeo"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer f-link">
                  <h2>Quick Links</h2>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-caret-right" aria-hidden="true"></i>
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-caret-right" aria-hidden="true"></i>
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-caret-right" aria-hidden="true"></i>
                            Services
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-caret-right" aria-hidden="true"></i>
                            Our Cases
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-caret-right" aria-hidden="true"></i>
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-caret-right" aria-hidden="true"></i>
                            Consultations
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-caret-right" aria-hidden="true"></i>
                            Specialties
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-caret-right" aria-hidden="true"></i>
                            Testimonials
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-caret-right" aria-hidden="true"></i>
                            FAQs
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-caret-right" aria-hidden="true"></i>
                            Book an Appointment
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer">
                  <h2>Open Hours</h2>
                  <p>
                    We are here to assist you with your medical needs during the following hours:
                  </p>
                  <ul className="time-sidual">
                    <li className="day">
                      Monday - Friday <span>8.00 AM - 8.00 PM</span>
                    </li>
                    <li className="day">
                      Saturday <span>9.00 AM - 6.30 PM</span>
                    </li>
                    <li className="day">
                      Sunday <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer">
                  <h2>Newsletter</h2>
                  <p>
                    Stay up to date with the latest medical news, tips, and health updates. Subscribe to our newsletter.
                  </p>
                  <form
                    action="mail/mail.php"
                    method="get"
                    target="_blank"
                    className="newsletter-inner"
                  >
                    <input
                      name="email"
                      placeholder="Your email address"
                      className="common-input"
                      onFocus={(e) => (e.target.placeholder = '')}
                      onBlur={(e) => (e.target.placeholder = 'Your email address')}
                      required=""
                      type="email"
                    />
                    <button className="button">
                      <i className="icofont icofont-paper-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="copyright-content">
                  <p>
                    © Copyright 2025 | All Rights Reserved by {"Muhila"}
                    <a href="https://muhila-portfolio.netlify.app" target="_blank">
                      www.Devmuhi.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
};

export default Home;
