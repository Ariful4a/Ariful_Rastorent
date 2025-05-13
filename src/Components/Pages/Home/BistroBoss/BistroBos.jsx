import chefPhoto from '../../../../assets/home/chef-service.jpg';

const BistroBos = () => {
  return (
    <div
      className="relative h-[500px] bg-cover bg-fixed bg-center flex items-center justify-center my-14"
      style={{
        backgroundImage: `url(${chefPhoto})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative bg-white bg-opacity-90 px-10 py-8 max-w-3xl text-center rounded shadow-lg">
        <h2 className="text-3xl text-black font-serif uppercase mb-4">Bistro Boss</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
          libero accusamus laborum deserunt ratione dolor officiis praesentium!
          Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus
          incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default BistroBos;
