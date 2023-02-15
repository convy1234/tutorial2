import Card2 from "./card2";
import "./component3.css";
import pic01 from "../img001.jfif";
import pic002 from "../img002.jpg";
import pic03 from "../img003.jfif";
import pic04 from "../img004.jfif";
import pic05 from "../img005.jfif";
import pic06 from "../img006.jfif";

const Component3 = () => {
  const data = [
    {
      img: pic01,
    },
    {
      img: pic002,
    },
    {
      img: pic03,
    },
    {
      img: pic04,
    },
    {
      img: pic05,
    },
    {
      img: pic06,
    },
    {
      img: pic01,
    },
    {
      img: pic002,
    },
  ];
  return (
    <div className="contain4">
      <div className="Header">
        <h1>Tools</h1>
      </div>
      <div className="contain3">
        <div className="template">
          <Card2 img = {data[0].img}></Card2>
        </div>
        <div className="template">
          <Card2 img = {data[1].img}></Card2>
        </div>
        <div className="template">
          <Card2 img = {data[2].img}></Card2>
        </div>
        <div className="template">
          <Card2 img = {data[3].img}></Card2>
        </div>
        <div className="template">
          <Card2 img = {data[4].img}></Card2>
        </div>
        <div className="template">
          <Card2 img = {data[5].img}></Card2>
        </div>
        <div className="template">
          <Card2 img = {data[6].img}></Card2>
        </div>
      </div>
    </div>
  );
};
export default Component3;
