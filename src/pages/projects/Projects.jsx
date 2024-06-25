import React from 'react'
import Cards from '../../components/Cards/Cards'
import styles from './Projects.module.css'
import Logos from '../../components/Logos/Logos'

export default function Projects() {
  return (
    <div className={styles.main}>
      <div className={styles.divTitle}>
        <h1 className={styles.title}>Projects</h1>
        <span className={styles.text}>Technologies I’ve been working with recently</span>
      </div>
      <Cards 
        title='My Wedding'
        desc='Decidi usar meus conhecimentos em React, JavaScript, HTML e CSS para criar um site de convite de casamento. Os convidados podem confirmar presença, acessar um catálogo de presentes e há uma página de administração para gerenciar a lista de convidados.'
        link={'https://hcwedding.web.app/'}
      >
        <Logos photo={'html5'}/>
        <Logos photo={'css'}/>
        <Logos photo={'js'}/>
        <Logos photo={'react'}/>
      </Cards>

      <Cards 
        title='Burguer da Vila'
        desc='Projeto realizado como freelance para uma hamburgueria. 
        Neste projeto inclui o Menu, Sua Localização e Top Hambugueres
        Realizado com React'
        link={'https://burguerdavila.web.app/'}
      >
        <Logos photo={'html5'}/>
        <Logos photo={'css'}/>
        <Logos photo={'js'}/>
        <Logos photo={'react'}/>
        
      </Cards>
      <Cards 
        title='Stock Elis'
        desc='Utilizando React e Firebase Firestore, ele carrega dados de um arquivo JSON e verifica a existência de cada artigo antes de adicioná-lo ao banco de dados para evitar duplicações. Ideal para empresas que precisam manter um catálogo de produtos atualizado e acessível.'
        link={'https://stockelistv.web.app/home'}
      >
        <Logos photo={'html5'}/>
        <Logos photo={'css'}/>
        <Logos photo={'js'}/>
        <Logos photo={'react'}/>
      </Cards>
      
    </div>
  )
}
