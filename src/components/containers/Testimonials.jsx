import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import Testimonial from "../Testimonial";
import testimonials from "../../data/testimonials";
import { useState } from "react";
const Testimonials = () => {
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
  );
};

export default Testimonials;
