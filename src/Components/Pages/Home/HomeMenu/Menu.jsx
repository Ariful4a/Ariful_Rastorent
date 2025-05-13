import { useEffect, useMemo, useState } from "react";
import Subhading from "../../Shered/Subhading";
import PopularItems from "../../Shered/PopularItems/PopularItems";
import useMenu from "../../../../Hooks/useMenu";

const Menu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === 'popular')
  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);


  return (
    <div>
      <Subhading
        subHading={"Check it out"}
        hading={"form our menu"}
      ></Subhading>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto my-10">
        {popular.map((item) => (
          <PopularItems key={item._id} item={item}></PopularItems>
        ))}
      </div>
    </div>
  );
};

export default Menu;
