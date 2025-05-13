import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Footer from "../Shered/Footer";
import Header from "../Shered/Header";
import BistroBos from "./BistroBoss/BistroBos";
import Cetegory from "./Cetegory";
import Featured from "./Fearturd/Featured";
import Testomonial from "./Testomonial/Testomonial";
import Menu from "./HomeMenu/Menu";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Ariful || Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Header></Header>
      <Banner></Banner>
      <Cetegory></Cetegory>
      <BistroBos></BistroBos>
      <Menu></Menu>
      <Featured></Featured>
      <Testomonial></Testomonial>
      <Footer></Footer>
    </div>
  );
};

export default Home;
