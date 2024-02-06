import React from 'react'
import styles from './Stacks.module.css'
import cssPhoto from '../../assets/techs/css.png'
import html5Photo from '../../assets/techs/html5.png'
import jsPhoto from '../../assets/techs/js.png'
import pyPhoto from '../../assets/techs/py.png'
import reactPhoto from '../../assets/techs/react.png'
import { animated, useSpring } from 'react-spring';


export default function Stacks() {

  const [springProps, set] = useSpring(() => ({
    from:{
      height:'0vh',
      transform: 'translateX(100%)',
      opacity: 0,
    }
  }));

  const handleScroll = () => {
    const shouldAnimate = window.scrollY > 1200;
    if (shouldAnimate) {
      set.start({
        to:{
          height:'100vh',
          transform: `translateX(0)`,
          opacity: 1 }

      });
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <animated.div style={springProps} className={styles.main}>
      <div className={styles.divTechs}>
        <div className={styles.divTitle}>
          <h2 className={styles.title}>My Tech Stack</h2>
        </div>
        <div className={styles.divImg}>
          <img className={styles.logoTech} src={html5Photo} alt='HTML5'/>
          <span>HTML</span>
        </div>
        <div className={styles.divImg}>
          <img className={styles.logoTech} src={cssPhoto} alt='CSS3'/>
          <span>CSS3</span>
        </div>
        <div className={styles.divImg}>
          <img className={styles.logoTech} src={jsPhoto} alt='JavaScript'/>
          <span>JavaScript</span>
        </div>
        <div className={styles.divImg}>
          <img className={styles.logoTech} src={reactPhoto} alt='React'/>
          <span>React</span>
        </div>
        <div className={styles.divImg}>
          <img className={styles.logoTech} src={pyPhoto} alt='Python'/>
          <span>Python</span>
        </div>
      </div>
    </animated.div>
  )
}
