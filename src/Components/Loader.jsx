import { FadeLoader } from "react-spinners";

function Loader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <FadeLoader color="#A91D3A" />
    </div>
  );
}

export default Loader;
