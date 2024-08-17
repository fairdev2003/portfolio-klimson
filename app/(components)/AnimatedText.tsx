import { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  children: ReactNode;
  animationDuration?: number;
  className?: string;
  backgroundColor?: string;
  barSize?: number;
  active?: boolean;
  onClick?: () => void;
}

const AnimatedText = ({
  active,
  children,
  animationDuration = 0.2,
  className,
  backgroundColor = "#2563EB",
  barSize = 4,
  onClick,
}: AnimatedTextProps) => {
  const variants = {
    initial: { width: "0px" },
    active: { width: "100%", transition: { duration: animationDuration } },
  };

  return (
    <motion.div
      onClick={onClick}
      initial="initial"
      animate="initial"
      whileHover="active"
      className="flex flex-col cursor-pointer justify-center"
    >
      {children}
      {!active ? <motion.div
        exit={{ width: "0px" }}
        variants={variants}
        style={{
          backgroundColor,
          height: barSize,
        }}
      /> : <div style={{backgroundColor, height: barSize}}></div>}
    </motion.div>
  );
};

export default AnimatedText;
