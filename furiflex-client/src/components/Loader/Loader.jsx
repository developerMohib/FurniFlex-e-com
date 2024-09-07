import { ImSpinner2 } from "react-icons/im";
const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <ImSpinner2 className="text-3xl animate-spin " />
    </div>
  );
};

export default Loader;
