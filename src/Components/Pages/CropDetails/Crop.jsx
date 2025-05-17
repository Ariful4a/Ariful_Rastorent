
import useMenu from "../../../Hooks/useMenu";
import PopularItems from "../Shered/PopularItems/PopularItems";
import Subhading from "../Shered/Subhading";


const Crop = () => {
  const [menu] = useMenu();
  const allCrops = menu.filter((item) => item.category === "crop");
  return (
    <div>
        <Subhading subHading={'Bangladesh Agriculture'} hading={'Crop Details'}></Subhading>
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto my-10">
        {allCrops.map((item) => (
          <PopularItems key={item._id} item={item}></PopularItems>
        ))}
      </div>
      <div className="flex justify-center items-center mb-10">
        <button className="btn btn-primary">Up Coming More Crop</button>
      </div>
    </div>
  );
};

export default Crop;
