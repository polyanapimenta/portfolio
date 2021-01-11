import React from 'react'
import { Grid, Label, Divider, Image, Segment, Reveal } from 'semantic-ui-react'
import './sass/AppEducation.scss'
import ImageEducation from '../assets/image/fiap.png'
import ImagePremiacao from '../assets/image/premiacao.png'
import Image2019      from '../assets/image/premiacao-2019.gif'
import Image2018      from '../assets/image/premiacao-2018.gif'

function AppEducation() {
  return(
    <React.Fragment>
      <Grid container textAlign='center'>
        <Grid.Row>
          <Grid.Column>
            <div>
              <Divider hidden section />
              <h1 className='title'><p>formação acadêmica</p></h1>
              <Divider hidden />
              <h2 className='subtitle'>educação</h2>
              <Divider hidden section />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid container>
        <Grid.Row>
          <Grid.Column width={8}>
            <div className="AppEducation">
              <Image src={ImageEducation} />
              <h2>
                <small>2015 - 2019</small> graduação
                <p>engenharia da computação</p>
              </h2>
            </div>
          </Grid.Column>

          <Grid.Column width={8}>
            <div className="AppEducation">
              <Image src={ImagePremiacao} />
              <h2>
                <p className="my-0">projetos premiados</p>
                <p>🏆 1º e 2º lugar</p>
              </h2>
            </div>
          </Grid.Column>
        </Grid.Row>

        <Divider hidden section />

        <Grid.Row>
          <Grid.Column width="8">
            <Segment basic>
              <Image
                fluid
                label={{ as: 'div', color: 'yellow', ribbon: 'right', content: '1º Lugar / 2019', size: 'large' }}
                src={Image2019}
                className="premiacao-image"
              />
              <Image />
              <div className='premiacao-box'>
                <h4>Melhor solução hospitalar</h4>
                <p><i>Premiação entregue pela Beneficência Portuguesa - BP</i></p>
                <p>Aplicação desktop construída em Python, com a finalidade de bloquear qualquer intenção de compartilhamento de dados sensíveis, por meio de snapshots e fotografias.</p>
              </div>
            </Segment>
          </Grid.Column>

          <Grid.Column width="8">
            <Segment basic>
              <Image
                fluid
                label={{ as: 'div', color: 'orange', ribbon: 'right', content: '2º Lugar / 2018', size: 'large' }}
                src={Image2018}
                className="premiacao-image"
              />
              <Image />
              <div className='premiacao-box'>
                <h4>Melhor aplicação mobile</h4>
                <p><i>Premiação entregue pelo Grupo PSA - Citroën</i></p>
                <p>Aplicação mobile construída em React Native, com a finalidade de expor o lançameto de um novo produto por meio da interação do usuário com a realidade aumentada (AR e VR) oferecida pelo aplicativo.</p>
              </div>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Divider hidden section />
      </Grid>
    </React.Fragment>
  )
}

export default AppEducation