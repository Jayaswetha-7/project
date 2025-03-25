import React from "react";

import { motion } from "framer-motion";
import logo from "../assets/logo_png_.png"


const Loading: React.FC = () => {

  // const colors =;

  return (
    // <motion.div
    //   className="  h-[100vh]  flex flex-col items-center justify-center overflow-hidden mx-auto my-auto rounded-3xl"
    //   animate={{
    //     backgroundColor: ["yellow"],
    //     borderRadius: ["30%", "0%"],
    //     width: ["10%", "50%"],
    //     scale:["100%","30%"]
    //     // height: ["100%", "50%"],
    //   }}
    //   transition={{ duration: 3 }}
    // >
    //   {/* Container for the Truck */}
    //   <motion.div className="text-blue-800"
    //     animate={{
    //       scale: ["10","15"],
    //       transition: { duration: 5 },
    //     }}

    //   >
    //     FIFO
    //   </motion.div>
    //   <div className="relative w-[250px] h-16 mt-2    rounded-md overflow-hidden flex  items-center">
    //     <img
    //       className=" truck-animation "
    //       src={truckicon}
    //       alt="Truck Loading"
    //     />
    //   </div>
    // </motion.div>
    <div className="h-screen bg-white flex items-center justify-center overflow-hidden">
      <motion.div
        className="aspect-square "
        animate={{
          scale: [1, 0.2, 0.5, 0.2, 5],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["50%", "0%", "50%", "50%", "0%"],
          width: ["20%", "40%", "60%", "80%", "100%"],
          backgroundColor: [
            // "#FF5733",
            "#33FF57",
            
            "#00609c",
            "#F3FF33",
            "#1b8db6",
          ],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          // times: [0, 0.25, 0.5, 0.75, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        style={box}
      ></motion.div>

      <motion.img
        animate={{
          scale: [0.2, 0.1, 0.5, 0.2, 1],
          opacity: [0, 1, 0.5, 0.75, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
        }}
        src={logo}
        className=" absolute"
        alt=""
      />
    </div>
  );
};

export default Loading;


const box = {
  // width: 100,
 
  backgroundColor: "#f5f5f5",
  // borderRadius: 5,
};