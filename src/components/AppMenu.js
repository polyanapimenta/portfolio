import React from 'react'
import './sass/AppMenu.scss'
import Translate from 'react-translate-component'
import { Grid, Menu, Popup, Divider } from 'semantic-ui-react'

// Font
import Logo from '../assets/image/polyanapimenta.png'
import LogoFont from '../fonts/BalooBhai'

// Icons SVG
import { ReactComponent as Print } from '../assets/icons/print.svg'
import { ReactComponent as Whatsapp } from '../assets/icons/whatsapp.svg'
import { ReactComponent as Email } from '../assets/icons/email.svg'
import { ReactComponent as Github } from '../assets/icons/github.svg'
import { ReactComponent as Linkedin } from '../assets/icons/linkedin.svg'

function AppMenu() {
  return (
    <Grid id='AppMenuContainer' container>
      <Grid.Row>
        <Grid.Column>     

          <Menu borderless className='App-menu'>
            <Menu.Item className="App-logo" name='polyana pimenta'>
              <img src={Logo} /> &ensp;
              <span>Polyana Pimenta</span>
            </Menu.Item>

            <Menu.Menu position='right'>
              <Menu.Item className='App-icon' name='print'>
                <Popup
                  trigger={<Print />}
                  content={<Translate content='popup.resume' />}
                  position='bottom right' 
                  size='small' 
                  inverted />
              </Menu.Item>

              <Menu.Item className='App-icon' name='whatsapp'>
                <Popup
                  trigger={<Whatsapp />}
                  content={<Translate content='popup.whatsapp' />}
                  position='bottom right' 
                  size='small' 
                  inverted />
              </Menu.Item>
              
              <Menu.Item className='App-icon' name='email'>
                <Popup
                  trigger={<Email />}
                  content={<Translate content='popup.email' />}
                  position='bottom right' 
                  size='small' 
                  inverted />
              </Menu.Item>
              
              <Menu.Item className='App-icon' name='linkedin'>
                <Popup
                  trigger={<Linkedin />}
                  content={<Translate content='popup.linkedin' />}
                  position='bottom right' 
                  size='small' 
                  inverted />
              </Menu.Item>
              
              <Menu.Item className='App-icon' name='github'>
                <Popup
                  trigger={<Github />}
                  content={<Translate content='popup.github' />}
                  position='bottom right' 
                  size='small' 
                  inverted />
              </Menu.Item>
            </Menu.Menu>
          </Menu>

          <Divider hidden='true' />

        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default AppMenu