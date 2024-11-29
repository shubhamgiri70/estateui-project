import "./listpage.scss";
import listData from "../library/dummydata";
import Filter from "./Filter";
import Card from "./Card";
import Map from "./Map";

const Listpage = () => {
  const data = listData;
  console.log(data);
  return (
    <div className="listpage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data} />
      </div>
    </div>
  );
};
export default Listpage;
