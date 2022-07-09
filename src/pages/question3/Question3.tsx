import styles from './Question3.module.scss';
import { animated } from 'react-spring';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import image from '../../assets/img/question3.png';
import peepoHappy from '../../assets/img/peepoHappy.png';
import peepoSad from '../../assets/img/peepoSad.png';
import madge from '../../assets/img/Madge.png';
import useHoverAnimation from '../../core/hooks/useHoverAnimation';
import useLocalStorage from '../../core/hooks/useLocalStorage';

const Question3 = () => {
  const navigate = useNavigate();
  const [imgHover1, setImgHover1] = useHoverAnimation(false, {opacity: 0, config: {duration: 2500}});
  const [imgHover2, setImgHover2] = useHoverAnimation(false, {opacity: 0, config: {duration: 2500}});
  const [text1, setText1] = useHoverAnimation(false, {color: '#fff'});
  const [text2, setText2] = useHoverAnimation(false, {color: '#fff'});
  const [isHover1, setHover1] = useState(false);
  const [storedValue, saveValue] = useLocalStorage('count', 0);
  
  const onHover1 = (isHover: boolean) => {
    if (isHover) {
      setImgHover1(true, {opacity: 1});
      setText1(true, {color: '#FFC300'});
      setText2(true, {color: '#333333'});
    } else {
      setImgHover1(false);
      setText1(false);
      setText2(false);
    }
    setHover1(isHover);
  };

  const onHover2 = (isHover: boolean) => {
    if (isHover) {
      setImgHover2(true, {opacity: 1});
      setText2(true, {color: '#FFC300'});
      setText1(true, {color: '#333333'});
    } else {
      setImgHover2(false);
      setText1(false);
      setText2(false);
    }
  }

  const onClickAnswer = () => {
    navigate('/question-4');
  };

  const onClickCorrectAnswer = () => {
    saveValue(storedValue + 1)
    navigate('/question-4');
  }
  
  useEffect(() => {
    document.title = 'You are beautiful <3'
  }, []);
  return (
    <div className='question__container'>
      <h1>You are a Yuumi and your ADC and Top Laner are going to die,<br />who do you decide to save?</h1>
      <h2>Choose one to continue</h2>

      <div className={styles.container}>
        <animated.img src={image} className={styles.image} alt="Madge"/>
        <section className={styles.leftContainer}
          onMouseEnter={() => onHover1(true)}
          onMouseLeave={() => onHover1(false)}
          onClick={() => onClickCorrectAnswer()}
        >
          <div style={{width: '200px', display: 'inline-block', alignSelf: 'center', marginLeft: '100px'}}>
            <animated.img style={imgHover1} src={isHover1 ? peepoHappy : peepoSad} alt="peepoHappy" className={styles.peepoHappy} />
          </div>
          <animated.span style={text1} className={styles.saveAdc}>Save ADC</animated.span>
        </section>
        <section className={styles.rightContainer}
          onMouseEnter={() => onHover2(true)}
          onMouseLeave={() => onHover2(false)}
          onClick={() => onClickAnswer()}
        >
          <animated.span style={text2} className={styles.saveTop}>Save Top Laner</animated.span>
          <div style={{width: '300px', display: 'inline-block', alignSelf: 'center'}}>
            <animated.img style={imgHover2} src={madge} alt="Madge" className={styles.peepoHappy} />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Question3;