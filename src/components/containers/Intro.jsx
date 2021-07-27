import Navbar from "../Navbar";
const Intro = () => {
  return (
    <div className="front-page">
      <main>
        <Navbar />
        <div className="intro">
          <div className="intro-text">
            <h1>Save your data storage here.</h1>
            <p>
              Data Warehouse is a data storage area that has been tested for
              security, so you can store your data here safely but not be afraid
              of being stolen by others.
            </p>
            <div className="intro-learn-more-btn btn">Learn more</div>
          </div>
          <img src="./images/intro-image.svg" alt="" className="intro-image" />
        </div>
      </main>
    </div>
  );
};

export default Intro;
