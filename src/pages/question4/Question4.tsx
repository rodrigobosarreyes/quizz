import styles from './Question4.module.scss';
import kayn from '../../assets/img/kayn.jpg';
import graves from '../../assets/img/graves.jpg';
import me from '../../assets/img/me.jpg';
import useHoverAnimation from '../../core/hooks/useHoverAnimation';
import { animated, SpringRef, useChain, useSpring, useSpringRef, useTrail } from 'react-spring';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../../core/hooks/useLocalStorage';

const Question4 = () => {
  const navigate = useNavigate();
  const [style2, setHover2] = useSpring(() => ({filter: 'grayscale(100%)', scale: 1}));

  const [text1, setText1] = useHoverAnimation(false, {color: '#fff', textAlign: 'center'});
  const [text2, setText2] = useHoverAnimation(false, {color: '#fff'});
  const [hearts, setHearts] = useHoverAnimation(false, {color: '#fff'});
  const [text3, setText3] = useHoverAnimation(false, {color: '#fff', textAlign: 'center'});
  const [storedValue, saveValue] = useLocalStorage('count', 0);
  
  const onClickAnswer = () => {
    saveValue(storedValue + 1);
    navigate('/question-5');
  };

  const onEnterWrongAnswer = () => {
    setHover2({from: {scale: 1}, to: [{scale: 1.05}, {scale: 1}], config: {duration: 150}});
  };
  
  const onEnterCorrectAnswer = (isHover: boolean) => {
    if (isHover) {
      setHover2({filter: 'grayscale(0%)'});
      setText1(true, {color: '#333333'});
      setText3(true, {color: '#333333'});
      setText2(true, {color: '#FFC300'});
      setHearts(true, {color: '#a663cc'});
    } else {
      setHover2({filter: 'grayscale(100%)'});
      setText1(false);
      setText3(false);
      setText2(false);
      setHearts(false);
    }
  }
  
  return (
    <div className='question__container'>
      <h1>Who is Emm's crush?</h1>
      <h2>Choose one to continue</h2>

      <div style={{display: 'flex', justifyContent: 'space-between', padding: '0 300px'}}>
        <div className={styles.imgContainer}
          onMouseEnter={onEnterWrongAnswer}
          onClick={onEnterWrongAnswer}
        >
          <img style={{filter: 'grayscale(100%)'}} className='img-responsive' src={kayn} alt="" />
          <animated.p style={text1}>Kayn</animated.p>
        </div>
        <div className={styles.imgContainer2}
          onClick={onClickAnswer}
          onMouseEnter={() => onEnterCorrectAnswer(true)}
          onMouseLeave={() => onEnterCorrectAnswer(false)}
        >
          <animated.img style={style2} className='img-responsive' src={me} alt="" />
          <p style={{textAlign: 'center'}}><animated.span style={hearts}>♥</animated.span> <animated.span style={text2}>Rod</animated.span> <animated.span style={hearts}>♥</animated.span></p>
        </div>
        <div className={styles.imgContainer}
          onMouseEnter={onEnterWrongAnswer}
          onClick={onEnterWrongAnswer}
        >
          <img style={{filter: 'grayscale(100%)'}} className='img-responsive' src={graves} alt="" />
          <animated.p style={text3}>Graves</animated.p>
        </div>
      </div>
    </div>
  )
}

export default Question4;