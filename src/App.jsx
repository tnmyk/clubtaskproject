import Features from "./components/containers/Features";
import Intro from "./components/containers/Intro";
import Outro from "./components/containers/Outro";
import Testimonials from "./components/containers/Testimonials";

const App = () => {
  return (
    <>
      <Intro/>
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
        <Features />
        <Testimonials />
      </main>
      <hr />
      <Outro />
    </>
  );
};

export default App;
