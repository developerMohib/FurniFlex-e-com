import chair from "../../assets/Isolated-wooden.png";
const Categories = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 gap-3">
      <div className="relative rounded overflow-hidden">
        <img src={chair} alt="Hanging Planters" className="w-full" />
        <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
          Hanging Planters
        </p>
      </div>
      <div className="relative rounded overflow-hidden">
        <img src={chair} alt="Planter Stand with Pots" className="w-full" />
        <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
          Planter Stand with Pots
        </p>
      </div>
      <div className="relative rounded overflow-hidden">
        <img src={chair} alt="Watering Cans" className="w-full" />
        <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
          Watering Cans
        </p>
      </div>
      <div className="relative rounded overflow-hidden">
        <img src={chair} alt="Metal Planters" className="w-full" />
        <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
          Metal Planters
        </p>
      </div>
      <div className="relative rounded overflow-hidden">
        <img src={chair} alt="Table Top Planters" className="w-full" />
        <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
          Table Top Planters
        </p>
      </div>
      <div className="relative rounded overflow-hidden">
        <img src={chair} alt="Wall Mounted Stands" className="w-full" />
        <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
          Wall Mounted Stands
        </p>
      </div>
      <div className="relative rounded overflow-hidden">
        <img src={chair} alt="Jute Plant Pots" className="w-full" />
        <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
          Jute Plant Pots
        </p>
      </div>
    </div>
  );
};

export default Categories;
