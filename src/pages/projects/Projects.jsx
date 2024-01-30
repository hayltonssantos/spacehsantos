import React from 'react'
import Cards from '../../components/Cards/Cards'
import styles from './Projects.module.css'
import Logos from '../../components/Logos/Logos'

export default function Projects() {
  return (
    <div className={styles.main}>
      <h3 className={styles.title}>Projects</h3>
      <Cards 
        title='My Wendding'
        desc='404'
        link={'https://mywendding.web.app/'}
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
        link={'https://mywendding.web.app/'}
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
