import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Footer from "../Shered/Footer";
import Header from "../Shered/Header";
import Cetegory from "./Cetegory";
import Testomonial from "./Testomonial/Testomonial";
import Menu from "./HomeMenu/Menu";
import CropDetails from "./CropDetails/CropDetails";
import GallerySection from "../../../assets/home/Gallary/Gallary";
import { Link } from "react-router";

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
      <CropDetails></CropDetails>
      <Menu></Menu>
      <div className="flex items-center justify-center mb-10">
        <Link>
        <button className="btn btn-primary">More Information</button>
        </Link>
      </div>
      <GallerySection></GallerySection>
      <Testomonial></Testomonial>
      <Footer></Footer>
    </div>
  );
};

export default Home;
