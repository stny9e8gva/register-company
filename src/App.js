//import logo from './logo.svg';
import { Routes, Route, Router } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Services from './components/services/Services';

function App() {
  return (
    <>
      {/* <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" /> */}


      {/* Site Metas */}
      {/* <meta name="keywords" content="" />
  <meta name="description" content="" />
  <meta name="author" content="" />
  <title>BigWing</title> */}
      {/* slider stylesheet */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/assets/owl.carousel.min.css"
      />
      {/* bootstrap core css */}
      <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
      {/* fonts style */}
      <link
        href="https://fonts.googleapis.com/css?family=Dosis:400,500|Poppins:400,700&display=swap"
        rel="stylesheet"
      />
      {/* Custom styles for this template */}
      <link href="css/style.css" rel="stylesheet" />
      {/* responsive style */}
      {/* <link href="css/responsive.css" rel="stylesheet" /> */}
      <div className="hero_area">
        {/* header section strats */}
        <Header />
        {/* end header section */}
        {/* slider section */}
        <section className=" slider_section ">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to={0}
                className="active"
              >
                01
              </li>
              <li data-target="#carouselExampleIndicators" data-slide-to={1}>
                02
              </li>
              <li data-target="#carouselExampleIndicators" data-slide-to={2}>
                03
              </li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-5 col-md-6">
                      <div className="slider_detail-box">
                        <h1>
                          Start <br />
                          Business with <br />
                          Our Company
                        </h1>
                        <p>
                          sed do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi
                        </p>
                        <div className="btn-box">
                          <a href="" className="btn-1">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="slider_img-box">
                        <img src="images/slider-img.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-5 col-md-6">
                      <div className="slider_detail-box">
                        <h1>
                          Start <br />
                          Business with <br />
                          Our Company
                        </h1>
                        <p>
                          sed do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi
                        </p>
                        <div className="btn-box">
                          <a href="" className="btn-1">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="slider_img-box">
                        <img src="images/slider-img.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-5 col-md-6">
                      <div className="slider_detail-box">
                        <h1>
                          Start <br />
                          Business with <br />
                          Our Company
                        </h1>
                        <p>
                          sed do eiusmod tempor incididunt ut labore et dolore magna
                          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi
                        </p>
                        <div className="btn-box">
                          <a href="" className="btn-1">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="slider_img-box">
                        <img src="images/slider-img.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel_btn-container">
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </section>

      </div>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes >


      <div className="footer_bg">
        {/* info section */}
        <section className="info_section layout_padding2-bottom">
          <div className="container">
            <h3 className="">BigWing</h3>
          </div>
          <div className="container info_content">
            <div>
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div className="d-flex">
                    <h5>Useful Link</h5>
                  </div>
                  <div className="d-flex ">
                    <ul>
                      <li>
                        <a href="">About Us</a>
                      </li>
                      <li>
                        <a href="">About services</a>
                      </li>
                      <li>
                        <a href="">About Departments</a>
                      </li>
                      <li>
                        <a href="">Services</a>
                      </li>
                      <li>
                        <a href="">Contact Us</a>
                      </li>
                    </ul>
                    <ul className="ml-3 ml-md-5">
                      <li>
                        <a href="">Loram ipusm</a>
                      </li>
                      <li>
                        <a href="">Loram ipusm</a>
                      </li>
                      <li>
                        <a href="">Loram ipusm</a>
                      </li>
                      <li>
                        <a href="">Loram ipusm</a>
                      </li>
                      <li>
                        <a href="">Loram ipusm</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="d-flex">
                    <h5>The Services</h5>
                  </div>
                  <div className="d-flex ">
                    <ul>
                      <li>
                        <a href="">About Us</a>
                      </li>
                      <li>
                        <a href="">About services</a>
                      </li>
                      <li>
                        <a href="">About Departments</a>
                      </li>
                      <li>
                        <a href="">Services</a>
                      </li>
                      <li>
                        <a href="">Contact Us</a>
                      </li>
                    </ul>
                    <ul className="ml-3 ml-md-5">
                      <li>
                        <a href="">Lorem ipsum dolor</a>
                      </li>
                      <li>
                        <a href="">sit amet, consectetur</a>
                      </li>
                      <li>
                        <a href="">adipiscing elit,</a>
                      </li>
                      <li>
                        <a href="">sed do eiusmod</a>
                      </li>
                      <li>
                        <a href="">tempor incididunt</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="d-flex">
                    <h5>Contact Us</h5>
                  </div>
                  <div className="d-flex ">
                    <ul>
                      <li>
                        <a href="">About Us</a>
                      </li>
                      <li>
                        <a href="">About services</a>
                      </li>
                      <li>
                        <a href="">About Departments</a>
                      </li>
                      <li>
                        <a href="">Services</a>
                      </li>
                      <li>
                        <a href="">Contact Us</a>
                      </li>
                    </ul>
                    <ul className="ml-3 ml-md-5">
                      <li>
                        <a href="">Lorem ipsum</a>
                      </li>
                      <li>
                        <a href="">dolor sit amet,</a>
                      </li>
                      <li>
                        <a href="">consectetur</a>
                      </li>
                      <li>
                        <a href="">adipiscing</a>
                      </li>
                      <li>
                        <a href="">elit, sed do eiusmod</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center align-items-lg-baseline">
              <div className="social-box">
                <a href="">
                  <img src="images/fb.png" alt="" />
                </a>
                <a href="">
                  <img src="images/twitter.png" alt="" />
                </a>
                <a href="">
                  <img src="images/linkedin1.png" alt="" />
                </a>
                <a href="">
                  <img src="images/instagram1.png" alt="" />
                </a>
              </div>
              <div className="form_container mt-5">
                <form action="">
                  <label htmlFor="subscribeMail">Newsletter</label>
                  <input
                    type="email"
                    placeholder="Enter Your email"
                    id="subscribeMail"
                  />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* end info_section */}
        {/* footer section */}
        <Footer />
        {/* footer section */}
      </div>
    </>

  );
}

export default App;
