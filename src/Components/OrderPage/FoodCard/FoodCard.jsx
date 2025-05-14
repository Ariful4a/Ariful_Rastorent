
const FoodCard = ({item}) => {
    const {name, recipe, image, price} = item;
  return (
    <div>
      <div className="card relative bg-base-100 w-96 shadow-sm">
        <p className="absolute right-5 p-1 mt-6 bg-black text-white">${price}</p>
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-black text-center">{name}</h2>
          <p>
           {recipe}
          </p>
          <div className="text-center mt-4">
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
