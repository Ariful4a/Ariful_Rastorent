import { Helmet } from "react-helmet-async";
import Crop from "./Crop";
import crop from '../../../assets/menu/guids.jpg'
import Cover from "../Menu_Page/Cover";

const MainCrop = () => {
  return (
    <div>
      <Helmet>
        <title>Ariful || Menu Page</title>
      </Helmet>
      <Cover img={crop} title={"Crop Details"}></Cover>
      <Crop></Crop>
    </div>
  );
};

export default MainCrop;
