import React from 'react'
import { Card, Icon,Container } from 'semantic-ui-react'


const Linkedin = (
  <a>
    <Icon name='user'/>
    Linkedin
  </a>
)

const Presentacion = () => (

  < Card 
   
  
    header='Yoselin Del Carmen Silva jimenez'
    meta='Desarrolladora'
   
    extra={Linkedin}
  />
)

export default Presentacion
