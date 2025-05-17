
import pestPhoto from "../../../../assets/home/pest.jpg";

const PestDetails = () => {
  return (
    <div
      className="relative h-[500px] bg-cover bg-fixed bg-center flex items-center justify-center my-14"
      style={{
        backgroundImage: `url(${pestPhoto})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative bg-white bg-opacity-90 px-10 py-8 max-w-3xl text-center rounded shadow-lg">
        <h2 className="text-3xl font-black text-black font-serif uppercase mb-4">
          Pest Details
        </h2>
        <p class="text-base text-gray-700 leading-relaxed">
          Boro rice is a major winter crop in Bangladesh, usually planted in
          November and harvested in April. It requires a lot of water and grows
          best in clay or loamy soil. Farmers use fertilizers like Urea, TSP,
          and MOP. The average growth duration is around 150 days, and it can
          yield up to 6 tons per hectare.
        </p>
      </div>
    </div>
  );
};

export default PestDetails;
