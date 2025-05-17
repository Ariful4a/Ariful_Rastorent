
import Subhading from "../../Shered/Subhading";
import PopularItems from "../../Shered/PopularItems/PopularItems";
import useMenu from "../../../../Hooks/useMenu";
import PestControlCard from "../../Shered/PopularItems/PetsControl";
import PestDetails from "../PestDetails/PestDetails";
import { Link } from "react-router";

const Menu = () => {
  const [menu] = useMenu();
  const crops = menu.filter(item => item.category === 'crop_home');
  const pestControl = menu.filter(item => item.category === 'pest');

  return (
    <div>
      <Subhading
        subHading={"Bangladesh Agriculture"}
        hading={"Crop Details"}
      ></Subhading>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto my-10">
        {crops.map((item) => (
          <PopularItems key={item._id} item={item}></PopularItems>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link>
        <button className="btn btn-primary">More Information</button>
        </Link>
      </div>

        {/* Pest control  */}
        <div>
          <PestDetails></PestDetails>
        </div>
       <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto my-10">
        {pestControl.map((item) => (
          <PestControlCard key={item._id} item={item}></PestControlCard>
        ))}
      </div>
    </div>
  );
};

export default Menu;
