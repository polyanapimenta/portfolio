import React from 'react'
import Fab from '@material-ui/core/Fab'
import InfoIcon from '@material-ui/icons/Info'
import Modal from '@material-ui/core/Modal'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Divider} from 'semantic-ui-react'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import './sass/AppClients.scss'
import 'swiper/swiper-bundle.css'

SwiperCore.use([Autoplay, Navigation, Pagination])

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '12px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

function AppClients() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }


  return(
    <React.Fragment>
      <Grid container textAlign='center'>
        <Grid.Row>
          <Grid.Column>
            <div>
              <Divider hidden section />
              <h1 className='title'><p>alguns clientes</p></h1>
              <Divider hidden />
              <h2 className='subtitle'>projetos reais</h2>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid>
        <Grid.Row>
          <Grid.Column className="section-background">
            <Grid textAlign='center' container>
              <Grid.Row>
                <Grid.Column textAlign='center'>
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                  >
                    <SwiperSlide className="onCenter">
                      <iframe src="https://ik.imagekit.io/polyanapimenta/portifolio/carretos-mp_AMPZRF6OTy.png"
                        title="Carretos MP - http://carretosmp.com.br"
                        height="500" 
                        width="960"
                        loading="lazy"
                        scrolling="yes"> 
                      </iframe>

                      <Fab className="info_button" variant="extended" color="secondary" onClick={handleOpen}>
                        <InfoIcon />&nbsp;Saber mais
                      </Fab>

                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        className={classes.modal}
                      >
                        <div className={classes.paper}>
                          <div className="flex">
                            <h2 id="simple-modal-title">Text in a modal</h2>
                            <IconButton 
                              aria-label="upload picture" 
                              component="span"
                              onClick={handleClose}
                              >
                              <CloseIcon />
                            </IconButton>
                          </div>
                          <p id="simple-modal-description">
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                          </p>
                        </div>
                      </Modal>
                    </SwiperSlide>

                    <SwiperSlide className="onCenter">
                      <iframe src="https://dummyimage.com/960x960/dddddd/fff"
                        title="Carretos MP - http://carretosmp.com.br"
                        height="500" 
                        width="960"
                        loading="lazy"
                        scrolling="yes"> 
                      </iframe> 
                    </SwiperSlide>
                    <Divider hidden section />
                  </Swiper>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  )
}

export default AppClients