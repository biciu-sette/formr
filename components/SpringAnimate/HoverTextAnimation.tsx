import React from "react";
import { useSpring, animated } from "@react-spring/web";

interface HoverTextAnimationProps {
  fontSize: string;
  defaultColor: string;
  hoverColor: string;
  children: React.ReactNode;
}

const HoverTextAnimation = ({
  children,
  fontSize,
  defaultColor,
  hoverColor,
}: HoverTextAnimationProps) => {
  const [animation, setAnimation] = useSpring(() => ({
    fontSize: fontSize,
    color: defaultColor,
    config: { duration: 400 },
  }));

  const handleMouseEnter = () => {
    setAnimation({ color: hoverColor, fontSize: fontSize, });
  };

  const handleMouseLeave = () => {
    setAnimation({ color: defaultColor, fontSize: fontSize, });
  };

  return (
    <animated.p
      style={{ ...animation }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </animated.p>
  );
};

export default HoverTextAnimation;
