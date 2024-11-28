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
        <p className="price">${item.price}</p>
      </div>
    </div>
  );
};

export default Card;
