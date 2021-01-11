import React from 'react'
import './sass/AppFooter.scss'
import Translate from 'react-translate-component'
import { Grid, Segment, Image, Icon, Divider } from 'semantic-ui-react'
import ImageFooter from '../assets/image/emoji_polyana_notebook.png'
function AppFooter() {
  return (
    <Grid textAlign='center' container>
      <Grid.Row>
        <Grid.Column>
          <div className="Footer-image-centered">
            <Image src={ImageFooter} size='small' />
          </div>
          <Segment className='App-contact' padded='very'>
            <Translate content='footer.contact.title' component='h3' unsafe={true} />
            <Translate content='footer.contact.email' component='p'/>
          </Segment>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column className='App-footer'>
          <Divider hidden section />
          <Translate content='footer.credits.develop' component='span'  unsafe={true} />
          
          <span title='Veja mais em https://reactjs.org'>
            <Icon color='teal' name='react' size='large' /><b>React</b> 🥰
          </span>

          <p><Translate content='footer.credits.privacy' component='i' unsafe={true} /></p>

          <Divider hidden />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default AppFooter