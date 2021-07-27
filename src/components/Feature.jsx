import { BsArrowRight } from "react-icons/bs";

const Feature = ({ title, snippet, index }) => {
  return (
    <div className="feature">
      <div style={{ position: "absolute", right: "0", height: "100%" }}>
        <img
          src={`./images/features/backgrounds/${index}.svg`}
          alt=""
          height="100%"
        />
      </div>
      <div className="feature-icon">
        <img src={`./images/features/icons/${index}.svg`} alt="" height="50%" />
      </div>
      <div className="feature-text">
        <div className="feature-title">{title}</div>
        <p>{snippet}</p>
        <span className='feature-learn-more'>
          Learn more{" "}
          <BsArrowRight
            style={{
              color: "#9C69E2",
              fontSize: "1.6rem",
              marginLeft: "0.9rem",
            }}
          />
        </span>
      </div>
    </div>
  );
};

export default Feature;
