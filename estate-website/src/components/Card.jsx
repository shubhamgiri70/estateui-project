import "./card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.images} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="./images/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">Rs. {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="./images/bed.png" alt="" />
              <span>{item.bedrooms} bedroom</span>
            </div>
            <div className="feature">
              <img src="./images/bath.png" alt="" />
              <span>{item.bathrooms} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="./images/save.png" alt="" />
            </div>
            <div className="icon">
              <img src="./images/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
