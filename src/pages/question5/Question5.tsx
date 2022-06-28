import { useNavigate } from 'react-router-dom';
import styles from './Question5.module.scss';

const Question5 = () => {
  const navigate = useNavigate();

  const onClickAnswer = () => {
    navigate('/results');
  }
  return (
    <div className='question__container'>
      <h1>?</h1>
      <h2>?????? ??? ?? ????????</h2>
      <div className={styles.container}>
        <section className={styles.section}
          onClick={onClickAnswer}
        >
          <div style={{textAlign: 'right'}}>Yes</div>
        </section>
        <section className={styles.section}
          onClick={onClickAnswer}
        >
          No
        </section>
      </div>
    </div>
  );
}

export default Question5;