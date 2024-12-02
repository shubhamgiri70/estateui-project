import "./list.scss";
import listData from "../library/dummydata";
import Card from "./Card";

const List = () => {
  return (
    <div className="list">
      {listData.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
