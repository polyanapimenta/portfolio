import React from 'react'
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import Typography from '@material-ui/core/Typography'
import { Grid, Divider } from 'semantic-ui-react'

function AppHistory() {
  return(
    <React.Fragment>
      <Grid container textAlign='center'>
        <Grid.Row>
          <Grid.Column>
            <div>
              <Divider hidden section />
              <h1 className='title'><p>histórico profissional</p></h1>
              <Divider hidden />
              <h2 className='subtitle'>linha do tempo</h2>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid container>
        <Grid.Row>
          <Grid.Column>
            <Timeline>
              <TimelineItem>
                <TimelineOppositeContent>
                  <img alt="Mercado Livre" src="https://ik.imagekit.io/polyanapimenta/portifolio/mercado_livre_JdFfKI-4yH.png" />
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent />
              </TimelineItem>
              
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography color="textSecondary" variant="button" display="block">2019</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <strong>Analista Tecnologia Jr</strong>
                  <Typography color="textSecondary" variant="overline" display="block">Mercado Livre</Typography>
                </TimelineContent>
              </TimelineItem>
              
              <TimelineItem>
                <TimelineOppositeContent>
                  <img alt="Infracommerce" src="https://ik.imagekit.io/polyanapimenta/portifolio/infracommerce_UQenlUZr1d.png" width="100px" />
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="secondary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent />
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography color="textSecondary" variant="button" display="block">2018</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <strong>Desenvolvedora Java Jr</strong>
                  <Typography color="textSecondary" variant="overline" display="block">Infracommerce</Typography>
                </TimelineContent>
              </TimelineItem>
              
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography color="textSecondary" variant="button" display="block">2017</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <strong>Analista Suporte Pleno</strong>
                  <Typography color="textSecondary" variant="overline" display="block">Infracommerce</Typography>
                </TimelineContent>
              </TimelineItem>
              
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography color="textSecondary" variant="button" display="block">2017</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <strong>Trainee</strong>
                  <Typography color="textSecondary" variant="overline" display="block">Infracommerce</Typography>
                </TimelineContent>
              </TimelineItem>
              
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography color="textSecondary" variant="button" display="block">2016</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <strong>Estágio</strong>
                  <Typography color="textSecondary" variant="overline" display="block">Infracommerce</Typography>
                </TimelineContent>
              </TimelineItem>
              
            
            </Timeline>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  )
}

export default AppHistory