import { useCallback, useEffect, useState } from 'react';
import { Loader } from './Loader';
import { animated, useSpring, useSpringRef, useTransition } from 'react-spring';
import styles from './Results.module.scss';
import useLocalStorage from '../../core/hooks/useLocalStorage';

const Results = () => {
  // const [isLoading, setLoading] = useState(true);
  // const [loaderAnim, setLoaderAnim] = useSpring(() => ({display:'block', opacity: 1}));
  // const [storedValue, saveValue] = useLocalStorage('count', 0);

  // useEffect(() => console.log(storedValue), []);
  
  // setTimeout(() => {
  //   setLoading(false);
  //   setLoaderAnim({to: [{opacity: 0}, {display: 'none'}]});
  // }, 7500);

  const pages = [
    (props:any) => <animated.div style={{ ...props.style}}>
      <div style={{display: 'block', textAlign: 'center'}}>
        <Loader />
      </div>
      <img src="https://c.tenor.com/HvkCbvkGkR8AAAAC/yuumi-lol.gif" alt="" />
    </animated.div>,
    (props:any) => <animated.div style={{ ...props.style }}><h1 style={{color: '#fff'}}>Hola</h1></animated.div>,
  ]

  const [index, set] = useState(0);
  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  useEffect(() => {
    transRef.start()
  }, [index])

  setTimeout(() => {
    set(1);
  }, 7500);
  
  return (
    <div>
      {transitions((style, i) => {
        const Page = pages[i]
        return (<div className={styles.container}>
          <Page style={style} />
        </div>)
      })}
    </div>
  )
}

export default Results;