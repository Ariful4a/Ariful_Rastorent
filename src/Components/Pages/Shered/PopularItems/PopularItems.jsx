

const PopularItems = ({item}) => {
    const {name, recipe , image, price} = item;
    return (
        <div className="flex space-x-4">
            <img style={{borderRadius : '0 200px 200px 200px'}} className='w-[104px]' src={image} alt="" />
            <div>
                <h2 className="text-2xl font-black">{name}-----------</h2>
                <p className="text-gray-400">{recipe}</p>
            </div>
            <p className="text-yellow-400">${price}</p>
        </div>
    );
};

export default PopularItems;