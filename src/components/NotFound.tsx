import Lottie, { LottieRefCurrentProps } from "lottie-react";
import notFound from "../assets/lottie/notFound.json";
// import { useRef } from "react";

const NotFound = () => {
  //   const notFoundRef = useRef<LottieRefCurrentProps>(null);

  return (
    <div className="h-screen flex flex-col gap-4 justify-center items-center">
      <div className="max-w-5xl mx-auto">
        <Lottie
          //   onComplete={() => {
          //     notFoundRef.current?.goToAndPlay(50, true);
          //   }}
          //   loop={false}
          //   lottieRef={notFoundRef}
          animationData={notFound}
        />
      </div>
    </div>
  );
};

export default NotFound;
