import React from 'react'
import styles from './Knowledge.module.css'
import cssPhoto from '../../assets/techs/css.png'
import html5Photo from '../../assets/techs/html5.png'
import jsPhoto from '../../assets/techs/js.png'
import pyPhoto from '../../assets/techs/py.png'
import reactPhoto from '../../assets/techs/react.png'
import { animated, useSpring } from 'react-spring';


export default function Knowledge() {

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
        <h2>Knowledge</h2>
        <img className={styles.logoTech} src={html5Photo}/>
        <img className={styles.logoTech} src={cssPhoto}/>
        <img className={styles.logoTech} src={jsPhoto}/>
        <img className={styles.logoTech} src={reactPhoto}/>
        <img className={styles.logoTech} src={pyPhoto}/>
      </div>
    </animated.div>
  )
}
