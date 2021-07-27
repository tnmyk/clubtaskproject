import { useState } from "react";
import Feature from "./components/Feature";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";
import features from "./data/features";
import testimonials from "./data/testimonials";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
const App = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const scrollRight = () => {
    if (currentTestimonial >= testimonials.length - 1) return;
    setCurrentTestimonial(currentTestimonial + 1);
    document
      .querySelector("#testimonial-" + (currentTestimonial + 1))
      .scrollIntoView({ block: "nearest", behavior: "smooth" });
  };
  const scrollLeft = () => {
    if (currentTestimonial === 0) return;
    setCurrentTestimonial(currentTestimonial - 1);
    document
      .querySelector("#testimonial-" + (currentTestimonial - 1))
      .scrollIntoView({ block: "nearest", behavior: "smooth" });
  };
  return (
    <>
      <div className="front-page">
        <main>
          <Navbar />
          <div className="intro">
            <div className="intro-text">
              <h1>Save your data storage here.</h1>
              <p>
                Data Warehouse is a data storage area that has been tested for
                security, so you can store your data here safely but not be
                afraid of being stolen by others.
              </p>
              <div className="intro-learn-more-btn btn">Learn more</div>
            </div>
            <img
              src="./images/intro-image.svg"
              alt=""
              className="intro-image"
            />
          </div>
        </main>
      </div>
      <main>
        <div className="second-container">
          <div className="second-container-image-container">
            <img src="./images/second-container-image.svg" alt="" width="95%" />
          </div>
          <div className="second-container-text">
            <h1>We are a high-level data storage bank</h1>
            <p>
              The place to store various data that you can access at any time
              through the internet and where you can carry it. This very
              flexible storage area has a high level of security. To enter into
              your own data you must enter the password that you created when
              you registered in this Data Warehouse.
            </p>
          </div>
        </div>
        <div className="third-container">
          <h1>Features</h1>
          <p>
            Some of the features and advantages that we provide for those of you
            who store data in this Data Warehouse.
          </p>
          <div className="features-grid">
            {features.map((feat, index) => {
              return (
                <Feature
                  title={feat.title}
                  snippet={feat.snippet}
                  index={index}
                />
              );
            })}
          </div>
        </div>
        <div className=" testimonials second-container">
          <h1>Testimonials</h1>
          <div className="testimonials-container">
            {testimonials.map((test, index) => {
              return (
                <Testimonial
                  name={test.name}
                  about={test.about}
                  body={test.body}
                  index={index}
                />
              );
            })}
          </div>
          <div className="dots">
            {testimonials.map((test, index) => {
              return (
                <span
                  style={
                    currentTestimonial === index
                      ? { backgroundColor: "#F063B8", transform: "scale(2)" }
                      : {}
                  }
                ></span>
              );
            })}
          </div>
          <div className="testimonials-arrows">
            <BsArrowLeft onClick={scrollLeft} />
            <BsArrowRight onClick={scrollRight} />
          </div>
        </div>
      </main>
      <hr />
      <main>
        <div className="out">
          <div className="out-first">
            <div>
              <h1>Try for free!</h1>
              <p>Get limited 1 week free try our features!</p>
            </div>
            <div className="out-first-btns">
              <div className="out-first-btn-1 btn ">Learn more</div>
              <div className="out-first-btn-2 request-demo-btn btn">
                Request Demo{" "}
                <BsArrowRight
                  style={{
                    color: "#9C69E2",
                    fontSize: "1.6rem",
                    marginLeft: "0.9rem",
                  }}
                />{" "}
              </div>
            </div>
          </div>
          <div className="out-second">
            <div className="second-about">
              <h4
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "3rem",
                }}
              >
                <img src="./images/Logo.svg" alt="" height="25rem" />
                <span style={{ marginLeft: "1rem" }}>DataWarehouse</span>
              </h4>
              <div className="about-contact">
                <span className="about-address">
                  Warehouse Society, 234 <br /> Bahagia Ave Street PRBW 29281
                </span>{" "}
                <br /> <br />
                <span className="contacts">
                  info@warehouse.project <br /> 1-232-3434 (Main)
                </span>
              </div>
            </div>
            <div className="second-center">
              <h5>About</h5>
              <br />
              <p>Profile</p>
              <p>Features</p>
              <p>Careers</p>
              <p>DW News</p>
            </div>
            <div className="second-center">
              <h5>Help</h5>
              <br />
              <p>Support</p>
              <p>Sign up</p>
              <p>Guide</p>
              <p>Reports</p>
              <p>Q&A</p>
            </div>
            <div className="second-social">
              <h5>Social Media</h5>
              <br />
              <div
                style={{ backgroundColor: " #3b5998" }}
                className="social-icon"
              >
                <FaFacebookF />
              </div>
              <div
                style={{ backgroundColor: " #1DA1F2" }}
                className="social-icon"
              >
                <FaTwitter />
              </div>
              <div
                style={{
                  background:
                    "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
                }}
                className="social-icon"
              >
                <FaInstagram />
              </div>
            </div>
          </div>
          <div className="out-third">
            <span>
              © Datawarehouse™, 2020. All rights reserved. <br /> Company Registration
              Number: 21479524.
            </span>
            <div className="chat-btn"> <img src="./images/chaticon.svg" alt="" height='50%'/></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
