import useMenu from "../../../Hooks/useMenu";
import PestControlCard from "../Shered/PopularItems/PetsControl";
import Subhading from "../Shered/Subhading";


const AllPestControl = () => {
  const [menu] = useMenu();
  const allPest_control = menu.filter((item) => item.category === "pest_control");
  return (
    <div>
        <Subhading subHading={'Bangladesh Agriculture'} hading={'Crop Details'}></Subhading>
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto my-10">
        {allPest_control.map((item) => (
          <PestControlCard key={item._id} item={item}></PestControlCard>
        ))}
      </div>
      <div className="flex justify-center items-center mb-10">
        <button className="btn btn-primary">Up Coming More Pest details</button>
      </div>
    </div>
  );
};

export default AllPestControl;
