import Feature from "./components/Feature";
import Navbar from "./components/Navbar";
import features from "./data/features";
const App = () => {
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
          <div className="second-container">
            <div className="second-container-image-container">
              <img
                src="./images/second-container-image.svg"
                alt=""
                width="95%"
              />
            </div>
            <div className="second-container-text">
              <h1>We are a high-level data storage bank</h1>
              <p>
                The place to store various data that you can access at any time
                through the internet and where you can carry it. This very
                flexible storage area has a high level of security. To enter
                into your own data you must enter the password that you created
                when you registered in this Data Warehouse.
              </p>
            </div>
          </div>
          <div className="third-container">
            <h1>Features</h1>
            <p>
              Some of the features and advantages that we provide for those of
              you who store data in this Data Warehouse.
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
          <div className=" fourth-container second-container">
            <h1>Testimonials</h1>
          </div>
        </main>
      </div>
      <main></main>
    </>
  );
};

export default App;
