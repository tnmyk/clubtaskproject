import features from "../../data/features";
import Feature from "../Feature";

const Features = () => {
  return (
    <div className="third-container">
      <h1>Features</h1>
      <p>
        Some of the features and advantages that we provide for those of you who
        store data in this Data Warehouse.
      </p>
      <div className="features-grid">
        {features.map((feat, index) => {
          return (
            <Feature key={index} title={feat.title} snippet={feat.snippet} index={index} />
          );
        })}
      </div>
    </div>
  );
};

export default Features;
