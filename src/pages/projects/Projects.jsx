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
        title='My Wendding'
        desc='Decidi usar meus conhecimentos em React, JavaScript, HTML e CSS para criar um site de convite de casamento. Os convidados podem confirmar presença, acessar um catálogo de presentes e há uma página de administração para gerenciar a lista de convidados.'
        link={'https://hcwedding.web.app/'}
      >
        <Logos photo={'html5'}/>
        <Logos photo={'css'}/>
        <Logos photo={'js'}/>
        <Logos photo={'react'}/>
      </Cards>

      <Cards 
        title='4Save'
        desc='O 4Save, desenvolvido em 
          Python com SQLite3 por Haylton Santos, 
          é uma aplicação de código aberto para 
          geração e gerenciamento seguro de senhas, 
          proporcionando eficiência e praticidade.'
        link={'https://github.com/hayltonssantos/4Save'}
      >
        <Logos photo={'py'}/>
        <Logos photo={'mysql'}/>
        
      </Cards>
      <Cards 
        title='Validador de CNPJ'
        desc='O ValidadorCNPJ, 
          integra Back-End, Front-End e uma API em Python. 
          Recebe uma lista de CNPJs, consulta uma API, 
          e gera um arquivo CSV. Em caso de erros, 
          destaca os CNPJs em uma planilha, exibindo a 
          contagem no display.'
        link={'https://github.com/hayltonssantos/ValidadorCNPJ'}
      >
        <Logos photo={'py'}/>
      </Cards>
      
    </div>
  )
}
