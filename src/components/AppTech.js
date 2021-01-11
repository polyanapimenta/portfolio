import React from 'react'
import './sass/AppTech.scss'
import { Grid, Divider, Image } from 'semantic-ui-react'

import ImageMongo from '../assets/image/mongodb.png'
import ImageExpress from '../assets/image/expressjs.png'
import ImageReact from '../assets/image/react.png'
import ImageRedux from '../assets/image/redux.png'
import ImageNode from '../assets/image/nodejs.png'

import ImageHtml from '../assets/image/html5.png'
import ImageCss from '../assets/image/css3.png'
import ImageSass from '../assets/image/sass.png'
import ImageJavascript from '../assets/image/javascript.png'
import ImageJquery from '../assets/image/jquery.png'
import ImageAjax from '../assets/image/ajax.png'
import ImageBootstrap from '../assets/image/bootstrap.png'
import ImageSemantic from '../assets/image/semanticui.png'

import ImageOracle from '../assets/image/oracle.png'
import ImageDocker from '../assets/image/docker.png'
import ImageRabbitmq from '../assets/image/rabbitmq.png'
import ImagePython from '../assets/image/python.png'
import ImageC from '../assets/image/c.png'
import ImageJava from '../assets/image/java.png'
import ImageSwagger from '../assets/image/swagger.png'
import ImageApi from '../assets/image/api.png'
import ImageGit from '../assets/image/git.png'

import ImageSystem from '../assets/image/system.png'
import ImageApache from '../assets/image/apache.png'
import ImageMysql from '../assets/image/mysql.png'
import ImagePhp from '../assets/image/php.png'

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
SwiperCore.use([Autoplay])

function AppTech() {
  return(
    <Grid container textAlign='center'>
      <Grid.Row>
        <Grid.Column>
          <div>
            <h1 className='title'>minhas especialidades
              <p>desenvolvimento <span>web mobile</span></p>
            </h1>
            <Divider hidden section />
            <h2 className='subtitle'>tecnologias</h2>
            <Divider hidden section />
          </div>

          <Divider hidden section />

          <Swiper
            spaceBetween={50}
            slidesPerView={5}
            loop={true}
            autoplay={true}
          >
            <SwiperSlide><Image src={ImageMongo} size='small' /></SwiperSlide>
            <SwiperSlide><Image src={ImageExpress} size='small' /></SwiperSlide>
            <SwiperSlide><Image src={ImageReact} size='small' /></SwiperSlide>
            <SwiperSlide><Image src={ImageRedux} size='small' /></SwiperSlide>
            <SwiperSlide><Image src={ImageNode} size='small' /></SwiperSlide>
            <SwiperSlide><Image src={ImageApi} size='small' /></SwiperSlide>
            <SwiperSlide><Image src={ImageSwagger} size='small' /></SwiperSlide>
            <SwiperSlide><Image src={ImageAjax} size='small' /></SwiperSlide>
            <SwiperSlide><Image src={ImageJquery} size='small' /></SwiperSlide>
            <SwiperSlide><Image src={ImageJavascript} size='small' /></SwiperSlide>
            <SwiperSlide><Image src={ImageSass} size='small' /></SwiperSlide>
            <SwiperSlide><Image src={ImageCss} size='small' /></SwiperSlide>
            <SwiperSlide><Image src={ImageHtml} size='small' /></SwiperSlide>
            <SwiperSlide><Image src={ImageBootstrap} size='small' /></SwiperSlide>
            <SwiperSlide><Image src={ImageSemantic} size='small' /></SwiperSlide>
            <SwiperSlide><Image src={ImageGit} size='small' /></SwiperSlide>
            <SwiperSlide><Image src={ImageDocker} size='small' /></SwiperSlide>
            <SwiperSlide><Image src={ImageRabbitmq} size='small' /></SwiperSlide>
            <SwiperSlide><Image src={ImageOracle} size='small' /></SwiperSlide>
            <SwiperSlide><Image src={ImageMysql} size='small' /></SwiperSlide>
            <SwiperSlide><Image src={ImagePhp} size='small' /></SwiperSlide>
            <SwiperSlide><Image src={ImageApache} size='small' /></SwiperSlide>
            <SwiperSlide><Image src={ImageSystem} size='small' /></SwiperSlide>
            <SwiperSlide><Image src={ImageJava} size='small' /></SwiperSlide>
            <SwiperSlide><Image src={ImagePython} size='small' /></SwiperSlide>
            <SwiperSlide><Image src={ImageC} size='small' /></SwiperSlide>
          </Swiper>
          
          <Divider hidden section />

        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default AppTech