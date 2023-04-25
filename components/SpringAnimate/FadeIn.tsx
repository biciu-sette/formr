import { useSpring, animated } from '@react-spring/web';

const FadeIn: React.FC = ({ children }) => {
  const [animation, setAnimation] = useSpring(() => ({
    opacity: 0,
    transform: 'translateX(-50%)',
    from: { opacity: 0, transform: 'translateX(-100%)' },
    config: { duration: 1000 },
  }));

  return (
    <animated.div style={animation}>
      {children}
    </animated.div>
  );
};

export default FadeIn;