import React from 'react'
import Translate from 'react-translate-component'
import { Grid, Popup, Flag } from 'semantic-ui-react'
import './sass/AppHeader.scss'

import { ReactComponent as Locale } from '../assets/icons/maps.svg'

function AppHeader(props) {
  return (
    <Grid id='AppHeader'>
      <Grid.Row>
        <Grid.Column>
          <div className='App-lang'>
            <Popup
              trigger={<Flag name='us' onClick={() => props.onClick('en')} />}
              content={<Translate content='popup.en'/>}
              position='bottom right' 
              size='small'
              inverted 
            />
            &ensp;
            <Popup
              trigger={<Flag name='br' onClick={() => props.onClick('pt')} />}
              content={<Translate content='popup.pt'/>}
              position='bottom right' 
              size='small' 
              inverted 
            />
          </div>
          <div className={`App-backg App-backg-${props.lang}`}></div>
          <div className='App-btn-contact'><Translate content='header.button' /></div>
          <p className='locale'><Locale />Osasco, São Paulo</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default AppHeader