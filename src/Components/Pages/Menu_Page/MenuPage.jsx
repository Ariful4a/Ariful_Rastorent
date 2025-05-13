import { Helmet } from "react-helmet-async";
import Cover from "./Cover";
import imgCover from "../../../assets/menu/banner3.jpg";
import Subhading from "../Shered/Subhading";
import useMenu from "../../../Hooks/useMenu";
import MenuCetegory from "./MenuCetegory";
import { Form } from "react-router";
import pizzaImage from '../../../assets/menu/dessert-bg.jpeg'

const MenuPage = () => {
  const [menu] = useMenu();

  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Ariful || Menu Page</title>
      </Helmet>
      <Cover img={imgCover} title={"OUR MENU"}></Cover>
      <Subhading subHading="Don't miss" hading="TODAY'S OFFER"></Subhading>
      <MenuCetegory items={offered}></MenuCetegory>
      <MenuCetegory
       items={pizza} title={"PIZA"} img = {pizzaImage}>
        
       </MenuCetegory>
      
    </div>
  );
};

export default MenuPage;
