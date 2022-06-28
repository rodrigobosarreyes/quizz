import { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { TriangleProps } from './triangle.model';
import styles from './Triangle.module.scss';

const Triangle: React.FC<TriangleProps> = ({isHover, position, config, animation}) => {
  const [triangle, setTriangle] = useSpring(() => ({
    from: { translate: 0, rotateZ: config.rotateZ, ...position },
    config: { duration: 10000, mass: 1, tension: 280, friction: 60 },
    pause: isHover
  }));
  const [triangleColor, setTriangleColor] = useSpring(() => ({borderWidth: config.borderWidth, borderColor: `transparent transparent ${config.borderColor} transparent`}));

  useEffect(() => {
    if (isHover) {
      setTriangle(animation);
      setTriangleColor({borderColor: `transparent transparent ${config.borderColorHover} transparent`});
    } else {
      setTriangle({rotateZ: config.rotateZ, translate: 0});
      setTriangleColor({borderColor: `transparent transparent ${config.borderColor} transparent`});
    }
  }, [isHover, setTriangle, setTriangleColor, config, animation])
  
  return (
    <animated.div className={styles.triangle} style={{...triangle, ...triangleColor}}></animated.div>
  )
};

export default Triangle;