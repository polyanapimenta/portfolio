import React from 'react'
import './sass/AppProjects.scss'
import { Grid, Segment, Icon, Image, Divider, Button } from 'semantic-ui-react'

import SwiperCore, { Autoplay, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

SwiperCore.use([Autoplay, Scrollbar])

function AppProjects() {
  return(
    <Grid container>
      <Grid.Row>
        <Grid.Column>
          <Divider hidden section />
          <Segment basic floated='right'>
            <h2 className='title-right'>projetos no github&ensp;<Icon size='large' name='github' /></h2>
          </Segment>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Divider hidden />
          <Swiper
            spaceBetween={50}
            slidesPerView={2}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <Segment basic>
                <Image
                  fluid
                  label={{ as: 'div', color: 'blue', ribbon: 'right', content: 'React JS', size: 'large' }}
                  src="https://ik.imagekit.io/polyanapimenta/portifolio/screencapture-polyanapimenta-github-io-react-search-filter-2021-01-09-16_03_56_u8PsWsyJb.png"
                  className="premiacao-image"
                />
                <Image />
                
                <div className='premiacao-box'>
                  <h4>Searching Cats 🔍</h4>
                  <p>A sample search filter built with React</p>
                  
                  <a href="https://github.com/polyanapimenta/react-search-filter" target="_blank">
                    <Button  icon >
                      <Icon name='code branch' />&ensp;código fonte
                    </Button>
                  </a>

                  <a href="https://polyanapimenta.github.io/react-search-filter/" target="_blank">
                    <Button floated='right' color="black" icon>
                      <Icon name='eye' />&ensp;ver demo
                    </Button>
                  </a>
                </div>
              </Segment>
            </SwiperSlide>
            
            <SwiperSlide>
              <Segment basic>
                <Image
                  fluid
                  label={{ as: 'div', color: 'purple', ribbon: 'right', content: 'React JS', size: 'large' }}
                  src="https://ik.imagekit.io/polyanapimenta/portifolio/screencapture-polyanapimenta-github-io-react-search-filter-2021-01-09-16_03_56_u8PsWsyJb.png"
                  className="premiacao-image"
                />
                <Image />
                
                <div className='premiacao-box'>
                  <h4>Searching Cats 🔍</h4>
                  <p>A sample search filter built with React</p>
                  
                  <a href="https://github.com/polyanapimenta/react-search-filter" target="_blank">
                    <Button  icon >
                      <Icon name='code branch' />&ensp;código fonte
                    </Button>
                  </a>

                  <a href="https://polyanapimenta.github.io/react-search-filter/" target="_blank">
                    <Button floated='right' color="black" icon>
                      <Icon name='eye' />&ensp;ver demo
                    </Button>
                  </a>
                </div>
              </Segment>
            </SwiperSlide>
            
            <SwiperSlide>
              <Segment basic>
                <Image
                  fluid
                  label={{ as: 'div', color: 'purple', ribbon: 'right', content: 'React JS', size: 'large' }}
                  src="https://ik.imagekit.io/polyanapimenta/portifolio/screencapture-polyanapimenta-github-io-react-search-filter-2021-01-09-16_03_56_u8PsWsyJb.png"
                  className="premiacao-image"
                />
                <Image />
                
                <div className='premiacao-box'>
                  <h4>Searching Cats 🔍</h4>
                  <p>A sample search filter built with React</p>
                  
                  <a href="https://github.com/polyanapimenta/react-search-filter" target="_blank">
                    <Button  icon >
                      <Icon name='code branch' />&ensp;código fonte
                    </Button>
                  </a>

                  <a href="https://polyanapimenta.github.io/react-search-filter/" target="_blank">
                    <Button floated='right' color="black" icon>
                      <Icon name='eye' />&ensp;ver demo
                    </Button>
                  </a>
                </div>
              </Segment>
            </SwiperSlide>
            
            <SwiperSlide>
              <Segment basic>
                <Image
                  fluid
                  label={{ as: 'div', color: 'purple', ribbon: 'right', content: 'React JS', size: 'large' }}
                  src="https://ik.imagekit.io/polyanapimenta/portifolio/screencapture-polyanapimenta-github-io-react-search-filter-2021-01-09-16_03_56_u8PsWsyJb.png"
                  className="premiacao-image"
                />
                <Image />
                
                <div className='premiacao-box'>
                  <h4>Searching Cats 🔍</h4>
                  <p>A sample search filter built with React</p>
                  
                  <a href="https://github.com/polyanapimenta/react-search-filter" target="_blank">
                    <Button  icon >
                      <Icon name='code branch' />&ensp;código fonte
                    </Button>
                  </a>

                  <a href="https://polyanapimenta.github.io/react-search-filter/" target="_blank">
                    <Button floated='right' color="black" icon>
                      <Icon name='eye' />&ensp;ver demo
                    </Button>
                  </a>
                </div>
              </Segment>
            </SwiperSlide>
            <Divider hidden section />
          </Swiper>
          <Divider hidden section />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default AppProjects