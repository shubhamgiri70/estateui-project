import "./map.scss";
import "leaflet/dist/leaflet.css";
import Slider from "./Slider";
import "./singlepage.scss";
import { singlePostData, userData } from "../library/dummydata";
import Map from "./Map";

const Singlepage = () => {
  return (
    <div className="singlepage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="./images/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">Rs. {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="features">
              <img src="./images/utility.png" alt="" />
              <div className="featureText">
                <span>Utilites</span>
                <p>render is responsible</p>
              </div>
            </div>
            <div className="features">
              <img src="./images/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="features">
              <img src="./images/fee.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="./images/size.png" alt="" />
              <span>90sqft</span>
            </div>
            <div className="size">
              <img src="./images/bed.png" alt="" />
              <span>2 Beds</span>
            </div>
            <div className="size">
              <img src="./images/bath.png" alt="" />
              <span>1 Bathroom</span>
            </div>
          </div>
          <p className="title">Near by Places</p>
          <div className="listHorizontal">
            <div className="features">
              <img src="./images/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="features">
              <img src="./images/bus.png" alt="" />
              <div className="featureText">
                <span>Bus stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="features">
              <img src="./images/restaurant.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="./images/chat.png" alt="" />
              Send a Message
            </button>
            <button>
              <img src="./images/save.png" alt="" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singlepage;
