import { useEffect, useState } from 'react';
import { Loader } from './Loader';
import { animated, useSpring } from 'react-spring';
import styles from './Results.module.scss';
import useLocalStorage from '../../core/hooks/useLocalStorage';

const Results = () => {
  const [isLoading, setLoading] = useState(true);
  const [loaderAnim, setLoaderAnim] = useSpring(() => ({display:'block', opacity: 1}));
  const [storedValue, saveValue] = useLocalStorage('count', 0);

  useEffect(() => console.log(storedValue), []);
  
  setTimeout(() => {
    setLoading(false);
    setLoaderAnim({to: [{opacity: 0}, {display: 'none'}]});
  }, 10000);
  
  return (
    <div className={styles.container}>
      {/* {isLoading &&
        <>
          Loading
          <Loader />
          <img src="https://c.tenor.com/HvkCbvkGkR8AAAAC/yuumi-lol.gif" alt="" />
        </>} */}
      <animated.div style={loaderAnim}>
        <div style={{display: 'block', textAlign: 'center'}}>
          <Loader />
        </div>
          <img src="https://c.tenor.com/HvkCbvkGkR8AAAAC/yuumi-lol.gif" alt="" />
      </animated.div>

      {!isLoading &&
        <>
          <h1 style={{color: '#fff'}}>Hola</h1>
        </>}
    </div>
  )
}

export default Results;