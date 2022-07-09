import styles from './Question1.module.scss';
import emm from '../../assets/img/emm.png';
import me from '../../assets/img/mexD.png';
import { useNavigate } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { useEffect, useState } from 'react';
import TrianglePanel from '../../components/triangle-panel/TrianglePanel';
import { emmTriangles, rodTriangles } from './triangles';
import useLocalStorage from '../../core/hooks/useLocalStorage';

function Question1() {
  const navigate = useNavigate();
  const [{color: emmColor, backgroundColor: emmBackgroundColor}, setEmmColor] = useSpring(() => ({color: '#fff', backgroundColor: 'transparent'}));
  const [rodStyles, setRodStyles] = useSpring(() => ({color: '#fff', backgroundColor: 'transparent'}));
  const [{filter: emmFilter}, setEmmFilter] = useSpring(() => ({filter: 'grayscale(100%)'}));
  const [{filter: rodFilter}, setRodFilter] = useSpring(() => ({filter: 'grayscale(100%)'}));
  const [isHover1, setHover1] = useState<boolean>(false);
  const [isHover2, setHover2] = useState<boolean>(false);
  const [storedValue, saveValue] = useLocalStorage('count', 0);

  const onClickAnswer = () => {
    saveValue(1);
    navigate('/question-2');
  }

  const onMouseEnterAnswer1 = () => {
    setRodStyles({color: '#333333'});
    setEmmColor({color: '#FFC300',  backgroundColor: '#000019'});
    setEmmFilter({filter: 'grayscale(0%)'});
    setHover1(true);
  }

  const onMouseLeaveAnswer1 = () => {
    setRodStyles({color: '#fff'});
    setEmmColor({color: '#fff', backgroundColor: 'transparent'});
    setEmmFilter({filter: 'grayscale(100%)'});
    setHover1(false);
  }

  const onMouseEnterAnswer2 = () => {
    setEmmColor({color: '#333333'});
    setRodStyles({color: '#FFC300',  backgroundColor: '#000019'});
    setRodFilter({filter: 'grayscale(0%)'});
    setHover2(true);
  }

  const onMouseLeaveAnswer2 = () => {
    setEmmColor({color: '#fff'});
    setRodStyles({color: '#fff',  backgroundColor: 'transparent'});
    setRodFilter({filter: 'grayscale(100%)'});
    setHover2(false);
  }

  useEffect(() => {
    document.title = 'Did you know that I love you?';
  }, []);
  
  return (
    <div className='question__container'>
      <h1>Who are you?</h1>
      <h2>Choose one to continue</h2>

      <div className={styles.container}>
        <animated.section className={styles.emm} onClick={onClickAnswer}
          style={{backgroundColor: emmBackgroundColor}}
          onMouseEnter={onMouseEnterAnswer1}
          onMouseLeave={onMouseLeaveAnswer1}
        >
          <TrianglePanel isHover={isHover1} triangles={emmTriangles}/>
          <animated.img className={styles.image} src={emm} alt="" style={{filter: emmFilter}} />
          <animated.p style={{color: emmColor}}>
            Emm
          </animated.p>
        </animated.section>
        <animated.section className={styles.rodri} onClick={onClickAnswer}
          style={{backgroundColor: rodStyles.backgroundColor}}
          onMouseEnter={onMouseEnterAnswer2}
          onMouseLeave={onMouseLeaveAnswer2}
        >
          <TrianglePanel isHover={isHover2} triangles={rodTriangles}/>
          <animated.p style={{color: rodStyles.color}}>
            Rod
          </animated.p>
          <animated.img className={styles.image} src={me} alt="" style={{filter: rodFilter}}/>
        </animated.section>
      </div>
    </div>
  )
}

export default Question1;