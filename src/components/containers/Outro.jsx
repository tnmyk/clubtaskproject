import { BsArrowRight } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Outro = () => {
  return (
    <main style={{width:'85%'}}>
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
            © Datawarehouse™, 2020. All rights reserved. <br /> Company
            Registration Number: 21479524.
          </span>
          <div className="chat-btn">
            {" "}
            <img src="./images/chaticon.svg" alt="" height="50%" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Outro;
