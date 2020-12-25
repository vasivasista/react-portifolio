import home1 from "../img/home1.png";
const AboutSection = () => {
  return (
    <>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We Work to make</h2>
          </div>
          <div className="hide">
            <h2>
              Your <span>dreams</span>come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
          <p>
            Contact us for any photography or videography ideas that you have we
            are professionals
          </p>
          <button>Contact Us</button>
        </div>
      </div>
      <div className="image">
        <img src={home1} alt="Cameraman" />
      </div>
    </>
  );
};

export default AboutSection;
