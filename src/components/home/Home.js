import { Fragment } from "react"

const Home = () => {
    return (
        <>

            <section className="welcome_section layout_padding">
                <div className="container">
                    <div className="custom_heading-container">
                        <h2>Welcome To Our Company</h2>
                    </div>
                    <div className="layout_padding2">
                        <div className="img-box">
                            <img src="images/welcome.png" alt="" />
                        </div>
                        <div className="detail-box">
                            <p>
                                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu
                            </p>
                            <div>
                                <a href="">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service_section">
                <div className="container">
                    <div className="custom_heading-container">
                        <h2>Our Services</h2>
                    </div>
                    <div className="service_container layout_padding2">
                        <div className="service_box">
                            <div className="img-box">
                                <img src="images/s-1.jpg" alt="" />
                            </div>
                            <div className="detail-box">
                                <h4>
                                    Business <br />
                                    Consultant
                                </h4>
                                <p>
                                    have suffered alteration in some form, by injected humour, or
                                    randomised words which don't look even slightly believable. If you
                                    are
                                </p>
                            </div>
                        </div>
                        <div className="service_box">
                            <div className="img-box">
                                <img src="images/s-2.jpg" alt="" />
                            </div>
                            <div className="detail-box">
                                <h4>
                                    Marketing <br />
                                    Analytics
                                </h4>
                                <p>
                                    have suffered alteration in some form, by injected humour, or
                                    randomised words which don't look even slightly believable. If you
                                    are
                                </p>
                            </div>
                        </div>
                        <div className="service_box">
                            <div className="img-box">
                                <img src="images/s-3.jpg" alt="" />
                            </div>
                            <div className="detail-box">
                                <h4>
                                    Financial <br />
                                    Planning
                                </h4>
                                <p>
                                    have suffered alteration in some form, by injected humour, or
                                    randomised words which don't look even slightly believable. If you
                                    are
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="">Read More</a>
                    </div>
                </div>
            </section>

            <section className="problem_section layout_padding">
                <div className="container">
                    <div className="custom_heading-container">
                        <h2>Do you have any business problem ?</h2>
                    </div>
                    <div className="layout_padding2">
                        <div className="img-box">
                            <img src="images/problem.jpg" alt="" />
                        </div>
                        <div className="detail-box">
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but
                                the majority have suffered alteration in some form, by injected
                                humour, or randomised words which don't look even slightly
                                believable. I
                            </p>
                            <div>
                                <a href="">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="why_section layout_padding">
                <div className="container">
                    <div className="custom_heading-container">
                        <h2>Why Choose Us</h2>
                    </div>
                    <div className="content-container">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis
                        </p>
                        <div className="row">
                            <div className="col-md-3 col-sm-6">
                                <div className="img-box">
                                    <img src="images/smiley.png" alt="" />
                                </div>
                                <div className="detail-box">
                                    <h3>99%</h3>
                                    <h6>SATISFIED CLIENTS</h6>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="img-box">
                                    <img src="images/monitor.png" alt="" />
                                </div>
                                <div className="detail-box">
                                    <h3>4700+</h3>
                                    <h6>AWESOME planing</h6>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="img-box">
                                    <img src="images/multiple-users-silhouette.png" alt="" />
                                </div>
                                <div className="detail-box">
                                    <h3>4500+</h3>
                                    <h6>CLIENTS</h6>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="img-box">
                                    <img src="images/bar-chart.png" alt="" />
                                </div>
                                <div className="detail-box">
                                    <h3>19000+</h3>
                                    <h6>DAILY business</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="client_section layout_padding">
                <div className="container">
                    <h2>What Our Clients Says</h2>
                    <div
                        id="carouselExampleControls"
                        className="carousel slide"
                        data-ride="carousel"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="client_container layout_padding2">
                                    <div className="client_text">
                                        <p>
                                            psum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                            enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                            irure dolor in reprehenderit in voluptate velit esse cillum
                                        </p>
                                    </div>
                                    <div className="detail-box">
                                        <div className="img-box">
                                            <img src="images/client.png" alt="" />
                                        </div>
                                        <div className="name">
                                            <h5>Joans Mark</h5>
                                            <p>cal</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="client_container layout_padding2">
                                    <div className="client_text">
                                        <p>
                                            psum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                            enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                            irure dolor in reprehenderit in voluptate velit esse cillum
                                        </p>
                                    </div>
                                    <div className="detail-box">
                                        <div className="img-box">
                                            <img src="images/client.png" alt="" />
                                        </div>
                                        <div className="name">
                                            <h5>Joans Mark</h5>
                                            <p>cal</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="client_container layout_padding2">
                                    <div className="client_text">
                                        <p>
                                            psum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                            enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                            irure dolor in reprehenderit in voluptate velit esse cillum
                                        </p>
                                    </div>
                                    <div className="detail-box">
                                        <div className="img-box">
                                            <img src="images/client.png" alt="" />
                                        </div>
                                        <div className="name">
                                            <h5>Joans Mark</h5>
                                            <p>cal</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a
                            className="carousel-control-prev"
                            href="#carouselExampleControls"
                            role="button"
                            data-slide="prev"
                        >
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#carouselExampleControls"
                            role="button"
                            data-slide="next"
                        >
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </section>

            <section className="contact_section layout_padding">
                <div className="container contact_heading">
                    <h2>Contact Us</h2>
                    <p>
                        psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </p>
                </div>
                <div className="container">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputName4">Name</label>
                                <input type="text" className="form-control" id="inputName4" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputNumber4">Phone number</label>
                                <input type="tel" className="form-control" id="inputNumber4" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputState">Select Service</label>
                                <select id="inputState" className="form-control">
                                    <option selected="" />
                                    <option>...</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputMessage">Message</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputMessage"
                                placeholder=""
                            />
                        </div>
                    </form>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="">
                        Send
                    </button>
                </div>
            </section>
        </>
    );
}

export default Home;