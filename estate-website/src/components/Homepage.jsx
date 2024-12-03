import Searchbar from "./Searchbar";
import "./homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            qui repudiandae vitae expedita, quibusdam quia illo nobis! Esse
            perspiciatis dolore odio eligendi in nesciunt, facilis natus optio
            incidunt architecto tenetur deleniti, accusantium ut inventore
            repudiandae officia ad alias porro eum?
          </p>
          <Searchbar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of exprience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="./images/bg.png" alt="" />
      </div>
    </div>
  );
};

export default Homepage;
