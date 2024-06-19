import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Carousel = ({ images, texto }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [inside, setInside] = useState(false);
  const [color, setColor] = useState("rgb(0, 0, 0)");
  const [r, setR] = useState(0);
  const [g, setG] = useState(0);
  const [b, setB] = useState(0);

  const handleMouseMove = () => {
    if (inside) {
      // Generate small random changes for r, g, b
      const deltaR = Math.floor(Math.random() * 21) - 10; // Random number between -10 and 10
      const deltaG = Math.floor(Math.random() * 21) - 10;
      const deltaB = Math.floor(Math.random() * 21) - 10;
  
      // Update r, g, b with the changes, ensuring they stay within 0-255
      const newR = Math.min(255, Math.max(0, r + deltaR));
      const newG = Math.min(255, Math.max(0, g + deltaG));
      const newB = Math.min(255, Math.max(0, b + deltaB));
  
      // Update the state with the new r, g, b values
      setR(newR);
      setG(newG);
      setB(newB);
  
      // Set the color using the new r, g, b values
      setColor(`rgb(${newR}, ${newG}, ${newB})`);
    }
  };

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  const slidersVariants = {
    hover: {
      scale: 1.2,
      backgroundColor: "#ff00008e",
    },
  };
  const dotsVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: -10,
      scale: 1.2,
      transition: { type: "spring", stiffness: 1000, damping: "10" },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left"); 

    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
        <div className="carousel-y-cosas">
            <div className="carousel-images">
                <AnimatePresence>
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                    animate="visible"
                    exit="exit"
                    variants={slideVariants}
                />
                </AnimatePresence>
                <div className="slide_direction">
                <motion.div
                    variants={slidersVariants}
                    whileHover="hover"
                    className="left"
                    onClick={handlePrevious}
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 96 960 960"
                    width="20"
                    className="svg-icon-left"
                    >
                    <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
                    </svg>
                </motion.div>
                <motion.div
                    variants={slidersVariants}
                    whileHover="hover"
                    className="right"
                    onClick={handleNext}
                >
                    <svg
                    className="svg-icon-right"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    viewBox="0 96 960 960"
                    width="20"
                    
                    >
                    <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
                    </svg>
                </motion.div>
                </div>
            </div>
            <div className="carousel-indicator">
                {images.map((_, index) => (
                <motion.div
                    key={index}
                    className={`dot ${currentIndex === index ? "active" : ""}`}
                    onClick={() => handleDotClick(index)}
                    initial="initial"
                    animate={currentIndex === index ? "animate" : ""}
                    whileHover="hover"
                    variants={dotsVariants}
                ></motion.div>
                ))}
            </div>
        </div>
      <div className="caja-texto" 
            onMouseEnter={() => setInside(true)} 
            onMouseLeave={() => {setInside(false); setColor("rgb(0, 0, 0)");}} 
            onMouseMove={handleMouseMove}>
        <p style={{color: color}}>{texto}</p>
      </div>
    </div>
    
  );
};
export default Carousel;