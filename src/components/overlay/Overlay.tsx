//import gsap from "gsap";
import React, { useLayoutEffect } from "react";
import "./Overlay.css";

const Overlay = () => {
  //const comp = useRef(); // create a ref for the root level element (we'll use it later)

  useLayoutEffect(() => {
    // -- ANIMATION CODE HERE --
    /* gsap.to(".overlay h1", 2, {
      opacity: 0,
      y: -60,
      ease: "easeInOut",
    });
    gsap.to(".overlay span", 2, {
      delay: 0.3,
      opacity: 0,
      y: -60,
      ease: "easeInOut",
    });
    gsap.to(".overlay", 2, {
      delay: 1,
      top: "-100%",
      ease: "easeInOut",
    }); */
    return () => {
      // cleanup code (optional)
    };
  }, []); // <- empty dependency Array so it doesn't re-run on every render!
  return (
    <div className="overlay">
      <h1>Faith Baptist Church</h1>
      <span>Oslo</span>
    </div>
  );
};

export default Overlay;
