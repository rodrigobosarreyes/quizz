import { useState } from 'react';
import { Loader } from './Loader';
import { animated, useSpring } from 'react-spring';
import styles from './Results.module.scss';

const Results = () => {
  const [isLoading, setLoading] = useState(true);
  const [loaderAnim, setLoaderAnim] = useSpring(() => ({display:'block', opacity: 1}));

  setTimeout(() => {
    setLoading(false);
    setLoaderAnim({to: [{opacity: 0}, {display: 'none'}]});
  }, 10000);
  
  return (
    <div>
      {/* {isLoading &&
        <>
          Loading
          <Loader />
          <img src="https://c.tenor.com/HvkCbvkGkR8AAAAC/yuumi-lol.gif" alt="" />
        </>} */}
      <animated.div style={loaderAnim}>
        Loading
        <Loader />
        <img src="https://c.tenor.com/HvkCbvkGkR8AAAAC/yuumi-lol.gif" alt="" />
      </animated.div>
    </div>
  )
}

export default Results;