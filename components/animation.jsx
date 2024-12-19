"use client";
import { motion } from "framer-motion";

// Define reusable animation variants
const animationVariants = {
  pop: {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slide: {
    hidden: { x: "-150%" },
    visible: { x: 0 },
  },
};

const Animation = ({
  children,
  variant = "pop",
  duration = 0.5,
  delay = 0,
  className = "",
  once = true, // Ensure animation triggers only once
  margin = "0px 0px -50px 0px", // Custom margin for viewport threshold
}) => {
  const selectedVariant = animationVariants[variant];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      variants={selectedVariant}
      transition={{
        duration: duration,
        delay: delay,
        ease: "easeInOut",
      }}
      viewport={{
        once: once, // Trigger animation only once
        margin: margin, // Define viewport threshold
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Attach the animation variants to the component for direct access
Animation.variants = animationVariants;

export default Animation;
