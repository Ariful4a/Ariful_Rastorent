import FoodCard from "../FoodCard/FoodCard";

const OrderTab = ({items}) => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
                {items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)}
            </div>
        </div>
    );
};

export default OrderTab;