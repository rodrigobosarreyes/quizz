import * as React from 'react';
import yuumi from '../../assets/img/yuumi.png';
import alune from '../../assets/img/alune.png';
import styles from './Question2.module.scss';
import { useEffect } from 'react';
import { animated } from 'react-spring';
import useHoverAnimation from '../../core/hooks/useHoverAnimation';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../../core/hooks/useLocalStorage';

const Question2: React.FC<any> = (props) => {
  const navigate = useNavigate();
  const [aluneHover, setAluneHover] = useHoverAnimation(false, {filter: 'grayscale(100%)', scale: 1});
  const [aluneStarsHover, setAluneStarsHover] = useHoverAnimation(false, {fill: '#fff'});
  const [aluneStarsHover2, setAluneStarsHover2] = useHoverAnimation(false, {fill: '#fff'});
  const [aluneTextHover, setAluneTextHover] = useHoverAnimation(false, {color: '#fff', margin: '-10px'});
  const [yuumiHover, setYuumiHover] = useHoverAnimation(false, {filter: 'grayscale(100%)', scale: 1});
  const [storedValue, saveValue] = useLocalStorage('count', 0);

  const onAluneHover = (isHover: boolean) => {
    if (isHover) {
      setAluneHover(true, {filter: 'grayscale(0%)', scale: 1.1});
      setAluneStarsHover(true, {fill: '#b298dc'});
      setAluneStarsHover2(true, {fill: '#a663cc'});
      setAluneTextHover(true, {color: '#b8d0eb'});
    } else {
      setAluneHover(false);
      setAluneStarsHover(false);
      setAluneStarsHover2(false);
      setAluneTextHover(false);
    }
  }

  const onYuumiHover = (isHover: boolean) => {
    if (isHover) {
      setYuumiHover(true, {filter: 'grayscale(0%)', scale: .9});
    } else {
      setYuumiHover(false);
    }
  }

  const onClickAnswer = () => {
    navigate('/question-3');
  }

  const onClickCorrectAnswer = () => {
    saveValue(storedValue + 1)
    navigate('/question-3');
  }
  
  useEffect(() => {
    document.title = 'You are the best <3'
  }, []);

  return (
    <div className='question__container'>
        <h1>Who is more powerfull?</h1>
        <h2>Choose one to continue</h2>

        <div className={styles.container}>
          <section className={styles.emmContainer}>
            <article className={styles.articleAlune}
              onMouseEnter={() => onAluneHover(true)}
              onMouseLeave={() => onAluneHover(false)}
              onClick={onClickCorrectAnswer}
            >
              <animated.img
                style={aluneHover}
                className={styles.aluneuwu} src={alune} alt="Alune uwu"
              />
              <div className={styles.descriptionContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.starL}>
                  <animated.polygon style={aluneStarsHover} points="16,0,20,11,32,15,20,20,16,32,11,20,0,16,11,11" ></animated.polygon>
                </svg>
                <animated.svg xmlns="http://www.w3.org/2000/svg" className={styles.starL2} style={aluneStarsHover2}>
                  <polygon id="star" points="16,0,20,11,32,15,20,20,16,32,11,20,0,16,11,11"></polygon>
                </animated.svg>
                <animated.p className={styles.description} style={aluneTextHover}>Alune</animated.p>
                <animated.svg xmlns="http://www.w3.org/2000/svg" className={styles.starR} style={aluneStarsHover}>
                  <polygon id="star" points="16,0,20,11,32,15,20,20,16,32,11,20,0,16,11,11"></polygon>
                </animated.svg>
                <animated.svg xmlns="http://www.w3.org/2000/svg" className={styles.starR2} style={aluneStarsHover2}>
                  <polygon id="star" points="16,0,20,11,32,15,20,20,16,32,11,20,0,16,11,11"></polygon>
                </animated.svg>
              </div>
            </article>
          </section>
          <section className={styles.rodContainer}>
            <article className={styles.articleYuumi}
              onMouseEnter={() => onYuumiHover(true)}
              onMouseLeave={() => onYuumiHover(false)}
              onClick={() => onClickAnswer()}
            >
              <animated.img
                style={yuumiHover}
                className={styles.uglycat} src={yuumi} alt="that ugly cat"
              />
              <p className={styles.description} style={{marginTop: '22px'}}>That ugly cat</p>
            </article>
          </section>
        </div>
      {/* </animated.div> */}
    </div>
  )
}

export default Question2;