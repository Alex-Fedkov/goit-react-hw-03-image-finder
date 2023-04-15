import { BallTriangle } from "react-loader-spinner"
import { 
  Backdrop,
  } from "./style.jsx";

const Loader = () => {
  return (
    <Backdrop>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </Backdrop>
  )
}

export default Loader;