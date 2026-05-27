import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Use framer-motion values for smooth hardware-accelerated movement
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 450, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Listen to hover states on interactive elements
    const addHoverListeners = () => {
      const interactives = document.querySelectorAll(
        "a, button, [role='button'], input, select, textarea, .interactive-cursor"
      );
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovered(true));
        el.addEventListener("mouseleave", () => setIsHovered(false));
      });
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Initial attach
    addHoverListeners();

    // Create a MutationObserver to watch for dynamic nodes being added later
    const observer = new MutationObserver(() => {
      addHoverListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      observer.disconnect();
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Small active dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#FF67FF] rounded-full pointer-events-none z-50 mix-blend-screen hidden lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {/* Outer pulsing ring */}
      <motion.div
        className="fixed top-0 left-0 border rounded-full pointer-events-none z-50 hidden lg:block"
        animate={{
          width: isHovered ? 40 : 20,
          height: isHovered ? 40 : 20,
          borderColor: isHovered ? "rgba(0, 174, 239, 0.8)" : "rgba(255, 103, 255, 0.35)",
          backgroundColor: isHovered ? "rgba(0, 174, 239, 0.05)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
};
