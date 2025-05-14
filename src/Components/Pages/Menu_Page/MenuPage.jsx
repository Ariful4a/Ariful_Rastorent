import { Helmet } from "react-helmet-async";
import Cover from "./Cover";
import imgCover from "../../../assets/menu/banner3.jpg";
import Subhading from "../Shered/Subhading";
import useMenu from "../../../Hooks/useMenu";
import MenuCetegory from "./MenuCetegory";
import desssertImage from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImage from '../../../assets/menu/pizza-bg.jpg'
import saladImage from '../../../assets/menu/salad-bg.jpg'
import soupsImage from '../../../assets/menu/soup-bg.jpg'

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
       items={dessert} title={"DESSERT"} img = {desssertImage}>
       </MenuCetegory>
      
      <MenuCetegory items={pizza} title={"PIZZA"} img={pizzaImage}></MenuCetegory>
      <MenuCetegory items={salad} title={"SALADS"} img={saladImage}></MenuCetegory>
      <MenuCetegory items={soup} title={"SOUPS"} img={soupsImage}></MenuCetegory>
    </div>
  );
};

export default MenuPage;
