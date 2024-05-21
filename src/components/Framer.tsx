import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Framer = () => {
  return (
    <>
      <Link to="/">
        <div className="flex justify-start underline text-blue-600">
          <div>Back</div>
        </div>
      </Link>

      <div className="text-center my-4 text-2xl">Framer Motion</div>
      <div className="square-container flex flex-col justify-center items-center">
        <div className="flex justify-center items-center space-x-4 mb-4">
          {/* 1st square */}
          <motion.div
            className="square w-60 h-60 bg-gray-500 rounded-none relative"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            {/* 1st circle */}
            <motion.div
              className="circle w-20 h-20 bg-blue-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
              animate={{ scale: 1, opacity: 1, x: -120, y: -120 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </motion.div>
          {/* 2nd square */}
          <motion.div
            className="square w-60 h-60 bg-gray-500 rounded-none relative"
            initial={{ scale: 0, opacity: 0, rotate: 0 }}
            animate={{ scale: 1, opacity: 1, rotate: 720 }}
            transition={{ duration: 2, delay: 0.4 }}
          >
            {/* 2nd circle */}
            <motion.div
              className="circle w-20 h-20 bg-green-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6, ease: "easeIn" }}
            />
          </motion.div>
          {/* 3rd square */}
          <motion.div
            className="square w-60 h-60 bg-gray-500 rounded-none relative"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            {/* 3rd circle */}
            <motion.div
              className="circle w-20 h-20 bg-red-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0, opacity: 0, x: 100, y: 100 }}
              animate={{ scale: 1, opacity: 1, x: -50, y: -50 }}
              transition={{ duration: 0.5, delay: 3 }}
            />
          </motion.div>
        </div>
        <div className="flex justify-center items-center space-x-4 mb-4">
          {/* 4th square */}
          <motion.div
            className="square w-60 h-60 bg-gray-500 rounded-none relative"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {/* 4th circle */}
            <motion.div
              className="circle w-20 h-20 bg-yellow-500 rounded-full relative absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0, opacity: 0, rotate: 0 }}
              animate={{ scale: 1, opacity: 1, rotate: 360 }}
              transition={{ duration: 2, repeat: 3, repeatType: "loop" }}
            />
          </motion.div>
          {/* 5th square */}
          <motion.div
            className="square w-60 h-60 bg-gray-500 rounded-none relative"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            {/* 5th circle */}
            <motion.div
              className="circle w-20 h-20 bg-purple-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
              animate={{ scale: 3, opacity: 1, x: -40, y: -40 }}
              transition={{ duration: 2, delay: 1.4 }}
            />
          </motion.div>
          {/* 6th square */}
          <motion.div
            className="square w-60 h-60 bg-gray-500 rounded-none relative"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            {/* 6th circle */}
            <motion.div
              className="circle w-20 h-20 bg-orange-500 rounded-full absolute"
              initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
              animate={{ scale: 3, opacity: 1, x: 0, y: 575 }}
              transition={{ duration: 12, delay: 2.5 }}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Framer;
