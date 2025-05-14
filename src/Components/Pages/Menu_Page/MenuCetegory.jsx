import { Link } from "react-router";
import PopularItems from "../Shered/PopularItems/PopularItems";
import Cover from "./Cover";

const MenuCetegory = ({ items, title, img }) => {
  return (
    <div>
       {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto my-10">
        {items.map((item) => (
          <PopularItems key={item._id} item={item}></PopularItems>
        ))}
      </div>
      <Link to={`/orderPage/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 mt-5">Order now</button>
      </Link>
    </div>
  );
};

export default MenuCetegory;
