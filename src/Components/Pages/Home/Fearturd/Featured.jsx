import fImgbg from "../../../../assets/home/featured.jpg";
import Subhading from "../../Shered/Subhading";
import "./Feartured.css";
const Featured = () => {
  return (
    <div className="relative z-0 fearted-item bg-fixed text-white pt-8 my-20">
      <Subhading
        subHading={"Check it out"}
        hading={"from out menu"}
      ></Subhading>

      {/* Content */}
      <div className="flex gap-10 items-center justify-center pt-12 pb-40 px-36">
        <div>
            <img src={fImgbg} alt="" />
        </div>
       <div>
        <p> March 20, 2023</p>
        <h2>WHERE CAN I GET SOME?</h2>
         <p className="text-lg">
          Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Error voluptate facere, deserunt dolores
          maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium
          tempore consequatur consequuntur omnis ullam maxime tenetur.
        </p>
       <button className="btn btn-outline border-0 border-b-4 mt-5">Order now</button>
       </div>
      </div>
    </div>
  );
};

export default Featured;
