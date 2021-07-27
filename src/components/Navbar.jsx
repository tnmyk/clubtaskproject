import {BsArrowRight} from 'react-icons/bs'
const Navbar = () => {
    return (
      <nav>
        <div className="nav-left">
          <a href="/">
            <img src="./images/Logo.svg" alt="" height="27rem" />
          </a>
          <div className="nav-links">
            <a href="/" style={{ fontWeight: 700, color: "#212353" }}>
              About
            </a>
            <a href="/">Help</a>
            <a href="/">Features</a>
            <a href="/">Signup</a>
          </div>
        </div>
        <div className="request-demo-btn btn">
          Request Demo{" "}
          <BsArrowRight
            style={{
              color: "#9C69E2",
              fontSize: "1.6rem",
              marginLeft: "0.9rem",
            }}
          />{" "}
        </div>
      </nav>
    );
}
 
export default Navbar;