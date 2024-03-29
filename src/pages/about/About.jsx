import React, { useState } from 'react'
import styles from './About.module.css'
import './Button.css'
import photo1 from '../../assets/1.jpg'
import photo2 from '../../assets/2.jpg'
import { animated, useSpring } from 'react-spring';

export default function About() {

  const [lg, setLg] = useState('en-us')

  const ptBr = [`
  Me chamo Haylton Santos, sou estudante de Ciência da Computação 
  na UniCarioca, com formatura prevista para dezembro de 2024. 
  Apaixonado por desenvolver soluções tecnológicas inovadoras, 
  utilizo linguagens como Python, React e Javascript, além de ferramentas como 
  OutSystems e PostgreSQL. Atualmente, desempenho o papel de assistente na ELIS, 
  contribuindo para atividades administrativas e gestão de estoque. 
  Possuo certificações em Python e PostgreSQL pela Alura, e expertise em React, JS, HTML e CSS, 
  validando minhas habilidades nessas áreas.
  `]

  const enUs = `
  My name is Haylton Santos, 
  I'm a Computer Science student at UniCarioca, 
  scheduled to graduate in December 2024. 
  Passionate about developing innovative technological solutions, 
  I use languages ​​such as Python, React and Javascript, as well as tools such as 
  OutSystems and PostgreSQL. Currently, I play the role of assistant at ELIS, 
  contributing to administrative activities and inventory management. 
  I have certifications in Python and PostgreSQL from Alura, and expertise in React, 
  JS, HTML and CSS, validating my skills in these areas.
  `

  const esEs = `
  Mi nombre es Haylton Santos, 
  soy estudiante de Informática en la UniCarioca, 
  con graduación prevista para diciembre de 2024. 
  Apasionado por desarrollar soluciones tecnológicas innovadoras, 
  uso lenguajes como Python, React y Javascript, además de herramientas como 
  OutSystems y PostgreSQL. Actualmente desempeño el rol de asistente en ELIS, 
  contribuyendo con las actividades administrativas y manejo de inventarios. 
  Cuento con certificaciones en Python y PostgreSQL de Alura, y experiencia en React, JS, HTML y CSS, 
  validando mis habilidades en estas áreas.
  `

  const [springProps, set] = useSpring(() => ({
    from:{
      height:'0vh',
      transform: 'translateX(100%)',
      opacity: 0,
    }
  }));

  const handleScroll = () => {
    const shouldAnimate = window.scrollY > 300;
    if (shouldAnimate) {
      set.start({
        to:{
          height:'100vh',
          display: 'flex',
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
    <animated.div style={springProps} className={styles.main} id='about'>
      <div className={styles.photos}>
        <img src={photo1} className={styles.img1} alt=''></img>
        <img src={photo2} className={styles.img2} alt=''></img>
      </div>
      <div className={styles.textBox}>
        <h2  className={styles.aboutMe}>
          {
            (lg === 'pt-br' ? `Sobre Mim` : '')
          }
          {
            (lg === 'en-us' ? `About Me` : '')
          }
          {
            (lg === 'es-es' ? `Sobre Mi` : '')
          }
        </h2>
        <div className={styles.text}>
          <section>
              {
                (lg === 'pt-br' ? `${ptBr}` : '')
              }
              {
                (lg === 'en-us' ? `${enUs}` : '')
              }
              {
                (lg === 'es-es' ? `${esEs}` : '')
              }
          </section>
        </div>
        <div className={styles.buttons}>
          <button className='btn' onClick={() => setLg('pt-br')}>Pt-Br</button>
          <button className='btn' onClick={() => setLg('en-us')}>En-Us</button>
          <button className='btn' onClick={() => setLg('es-es')}>Es-Es</button>
        </div>
        
      </div>
    </animated.div>
  )
}