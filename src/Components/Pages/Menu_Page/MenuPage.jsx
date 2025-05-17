import { Helmet } from "react-helmet-async";
import Cover from "./Cover";
import imgCover from "../../../assets/menu/g2.jpg";
import Subhading from "../Shered/Subhading";
import FarmingGuids from "./FarmingGuids";


const MenuPage = () => {

  return (
    <div>
      <Helmet>
        <title>Ariful || Menu Page</title>
      </Helmet>
      <Cover img={imgCover} title={"OUR MENU"}></Cover>

      <Subhading subHading="Don't miss" hading="Farming guides"></Subhading>
      <FarmingGuids></FarmingGuids>
      
    </div>
  );
};

export default MenuPage;
