const Testimonial = ({ name, about, body ,index}) => {
  return (
    <div className="testimonial" id={`testimonial-`+index}>
      <div className="testimonial-image-container">
          <img src={`./images/testimonials/${index}.png`} width='100%' alt="" />
      </div>
      <div className="testimonial-text">
        <h5>{name}</h5>
        <div className="testimonial-link">{about}</div>
        <p className="testimonial-para">{body}</p>
      </div>
    </div>
  );
};

export default Testimonial;
