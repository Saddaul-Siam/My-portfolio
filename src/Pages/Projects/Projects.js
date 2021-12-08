import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";
import Footer from '../Shared/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);
const Project = () => {
  return (
    <>
      <Navigation />
      <Container id="home2">
        <Box sx={{ pt: 15, display: 'flex', justifyContent: 'center' }} id="home">
          <Typography variant="h4" sx={{ fontWeight: 700, pb: 5 }}>My Resent Projects</Typography>
        </Box>
        <Grid container spacing={5} sx={{ py: 5, boxShadow: 2, mb: 5 }} 
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        data-aos-duration="500">
          <Grid item xs={12} md={6}>
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
              "delay": 2500,
              "disableOnInteraction": false
            }} pagination={{
              "clickable": true
            }} navigation={true} className="mySwiper">
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/wCYs1nt/Screenshot-2021-11-29-232016.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/FhV7wCj/Screenshot-2021-11-29-232046.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/GvxQTSc/Screenshot-2021-11-29-232102.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/wMLzNnH/Screenshot-2021-11-29-232117.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/kmMDkHH/Screenshot-2021-11-29-232138.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/gjfYJVs/Screenshot-2021-11-29-232151.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/bRSby4W/Screenshot-2021-11-29-232707.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/txfbwjm/Screenshot-2021-11-29-232729.png" alt="" /></SwiperSlide>
            </Swiper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ m: 2 }}>
              Bike Buzz (e-commerce Website)
            </Typography>
            <Box sx={{ m: 2 }}>
              <Typography variant="p">
                ✅This is a full-stack bike-selling website.
                <br />
                ✅Users can order bikes and need to cancel orders
                <br />
                ✅Users need to log in via Google (also can create a new account)
                <br />
                ✅Have admin and user dashboard. Admin can delete, add, manage services.
              </Typography>
              <Box>
                <a target="_blank" href="https://bike-buzz.web.app/" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ ml: 2, borderRadius: '52px', }} variant="contained" color="warning">Live Site</Button></a>
                <a target="_blank" href="https://github.com/Saddaul-Siam/Bike-Buzz-Client" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ m: 1, borderRadius: '52px', }} variant="contained" color="primary">Client Site Code</Button></a>
                <a target="_blank" href="https://github.com/Saddaul-Siam/Bike-Buzz-Server" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ m: 1, borderRadius: '52px', }} variant="contained" color="secondary">Server Site Code</Button></a>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={5} sx={{ py: 5, boxShadow: 2, my: 5 }}  
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        data-aos-duration="500">
          <Grid item xs={12} md={6}>
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
              "delay": 2500,
              "disableOnInteraction": false
            }} pagination={{
              "clickable": true
            }} navigation={true} className="mySwiper">
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/G20Q1XC/Screenshot-2021-11-29-230925.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/zXqsFgr/Screenshot-2021-11-29-230938.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/D5zrVb6/Screenshot-2021-11-29-230950.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/h74DsZ6/Screenshot-2021-11-29-231009.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/vDbWb6X/Screenshot-2021-11-29-231104.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/yX5D0C2/Screenshot-2021-11-29-231117.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/t4WmKWs/Screenshot-2021-11-29-231127.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/ZVMQRXX/Screenshot-2021-11-29-231143.png" alt="" /></SwiperSlide>
            </Swiper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ m: 2 }}>
              Tour Planners (Tourism Website)
            </Typography>
            <Box sx={{ m: 2 }}>
              <Typography variant="p" >
                ✅This is a full-stack Tour-Planner booking website.
                <br />
                ✅Users can be booking tours
                <br />
                ✅Users need to log in via Google (also can create a new account)
                <br />
                ✅ Have admin and user dashboard. Admin can delete, add, manage services.
              </Typography>
              <Box>
                <a target="_blank" href="https://roma-tourism.web.app/" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ ml: 2, borderRadius: '52px', }} variant="contained" color="warning">Live Site</Button></a>
                <a target="_blank" href="https://github.com/Saddaul-Siam/Tour-Planners-client" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ m: 1, borderRadius: '52px', }} variant="contained" color="primary">Client Site Code</Button></a>
                <a target="_blank" href="https://github.com/Saddaul-Siam/Tour-Planners-server" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ m: 1, borderRadius: '52px', }} variant="contained" color="secondary">Server Site Code</Button></a>
              </Box>
            </Box>
          </Grid>
        </Grid> <Grid container spacing={5} sx={{ py: 5, boxShadow: 2, my: 5 }}  
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        data-aos-duration="500">
          <Grid item xs={12} md={6}>
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
              "delay": 2500,
              "disableOnInteraction": false
            }} pagination={{
              "clickable": true
            }} navigation={true} className="mySwiper">
              <SwiperSlide>
                <img width="100%" src="https://i.ibb.co/wckh8mN/Screenshot-2021-11-29-230018.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img width="100%" src="https://i.ibb.co/T0ZJ49y/Screenshot-2021-11-29-230031.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img width="100%" src="https://i.ibb.co/59Pvk03/Screenshot-2021-11-29-230111.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img width="100%" src="https://i.ibb.co/NFVWD01/Screenshot-2021-11-29-230124.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img width="100%" src="https://i.ibb.co/yY8T7Vf/Screenshot-2021-11-29-230136.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img width="100%" src="https://i.ibb.co/tJYWnFL/Screenshot-2021-11-29-230148.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img width="100%" src="https://i.ibb.co/q1c4pLr/Screenshot-2021-11-29-230042.png" alt="" />
              </SwiperSlide>
            </Swiper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ m: 2 }}>
              Pro medical
            </Typography>
            <Box sx={{ m: 2 }}>
              <Typography variant="p" >
                ✅This is a single-page website. (only client site)
                <br />
                ✅ Pro medical is online hospital
                <br />
                ✅Users need to log in via Google (also can create a new account)
              </Typography>
              <Box>
                <a target="_blank" href="https://pro-medical-24.web.app/" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ ml: 2, borderRadius: '52px', }} variant="contained" color="warning">Live Site</Button></a>
                <a target="_blank" href="https://github.com/Saddaul-Siam/Pro-Medical" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ m: 1, borderRadius: '52px', }} variant="contained" color="primary">Code</Button></a>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={5} sx={{ py: 5, boxShadow: 2, my: 5 }}  
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        data-aos-duration="500">
          <Grid item xs={12} md={6}>
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
              "delay": 2500,
              "disableOnInteraction": false
            }} pagination={{
              "clickable": true
            }} navigation={true} className="mySwiper">
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/txTCtDk/Screenshot-2021-11-30-195600.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src=" https://i.ibb.co/K5WBd7D/Screenshot-2021-11-30-195615.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/pZVvSwf/Screenshot-2021-11-30-195639.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/bRjjd5g/Screenshot-2021-11-30-195652.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/tXKh3ZZ/Screenshot-2021-11-30-195704.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/LnQ6WzD/Screenshot-2021-11-30-195732.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/n82pq01/Screenshot-2021-11-30-195853.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/txfbwjm/Screenshot-2021-11-29-232729.png" alt="" /></SwiperSlide>
            </Swiper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ m: 2 }}>
              Jerins Parlour
            </Typography>
            <Box sx={{ m: 2 }}>
              <Typography variant="p">
                ✅ This is a full-stack Parlour website.
                <br />
                ✅Users need to booking a services and cancel services
                <br />
                ✅Users can log in via Google (also can create a new account)
                <br />
                ✅Have admin and user dashboard. Admin can delete, add, manage services.
              </Typography>
              <Box>
                <a target="_blank" href="https://jerins-parlours.web.app/" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ ml: 2, borderRadius: '52px', }} variant="contained" color="warning">Live Site</Button></a>
                <a target="_blank" href="https://github.com/Saddaul-Siam/Jerins-parlour-client" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ m: 1, borderRadius: '52px', }} variant="contained" color="primary">Client Site Code</Button></a>
                <a target="_blank" href="https://github.com/Saddaul-Siam/Jerins-parlour-server" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ m: 1, borderRadius: '52px', }} variant="contained" color="secondary">Server Site Code</Button></a>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={5} sx={{ py: 5, boxShadow: 2, my: 5 }}  
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        data-aos-duration="500">
          <Grid item xs={12} md={6}>
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
              "delay": 2500,
              "disableOnInteraction": false
            }} pagination={{
              "clickable": true
            }} navigation={true} className="mySwiper">
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/Vw7XHzZ/Screenshot-2021-11-30-194536.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/zmcRB63/Screenshot-2021-11-30-194601.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/Pw693gk/Screenshot-2021-11-30-194615.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/mhRhvGK/Screenshot-2021-11-30-194625.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/mBffmzh/Screenshot-2021-11-30-194638.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/wdz0xSJ/Screenshot-2021-11-30-194704.png" alt="" /></SwiperSlide>
            </Swiper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ m: 2 }}>
              Doctors Portal
            </Typography>
            <Box sx={{ m: 2 }}>
              <Typography variant="p">
                ✅ This is a full-stack Doctors website.
                <br />
                ✅ Users can booking a Appointments
                <br />
                ✅ Users need to log in via Google (also can create a new account)
                <br />
                ✅ Have admin and user dashboard. Admin can delete, add, manage services.
              </Typography>
              <Box>
                <a target="_blank" href="https://doctors-portal-24.web.app/" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ ml: 2, borderRadius: '52px', }} variant="contained" color="warning">Live Site</Button></a>
                <a target="_blank" href="https://github.com/Saddaul-Siam/Doctor-protal-client" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ m: 1, borderRadius: '52px', }} variant="contained" color="primary">Client Site Code</Button></a>
                <a target="_blank" href="https://github.com/Saddaul-Siam/Doctor-protal-server" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ m: 1, borderRadius: '52px', }} variant="contained" color="secondary">Server Site Code</Button></a>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={5} sx={{ py: 5, boxShadow: 2, my: 5 }}  
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        data-aos-duration="500">
          <Grid item xs={12} md={6}>
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
              "delay": 2500,
              "disableOnInteraction": false
            }} pagination={{
              "clickable": true
            }} navigation={true} className="mySwiper">
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/Cv6p5Pk/Screenshot-1.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/3dv5z8K/Screenshot-2.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/BCwd4v8/Screenshot-3.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/2vSG2Hz/Screenshot-4.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/XCgDB5f/Screenshot-5.png" alt="" /></SwiperSlide>
            </Swiper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ m: 2 }}>
              Honda CBR
            </Typography>
            <Box sx={{ m: 2 }}>
              <Typography variant="p" >
                ✅ This is a single-page website. (only client site)
                <br />
                ✅  This is a bike-selling website.
                <br />
                ✅ e-commerce Website
              </Typography>
              <Box>
                <a target="_blank" href="https://honda-cbr-24.netlify.app/" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ ml: 2, borderRadius: '52px', }} variant="contained" color="warning">Live Site</Button></a>
                <a target="_blank" href="https://github.com/Saddaul-Siam/honda-cbr" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ m: 1, borderRadius: '52px', }} variant="contained" color="primary">Code</Button></a>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={5} sx={{ py: 5, boxShadow: 2, my: 5 }}  
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        data-aos-duration="500">
          <Grid item xs={12} md={6}>
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
              "delay": 2500,
              "disableOnInteraction": false
            }} pagination={{
              "clickable": true
            }} navigation={true} className="mySwiper">
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/WGnBm0w/Screenshot-1.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/XY3j8mN/Screenshot-2.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/ySnGntC/Screenshot-2021-11-29-224543.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/sKRMX7Y/Screenshot-2021-11-29-224606.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/gF0HLKS/Screenshot-2021-11-29-224622.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/DVvTsXb/Screenshot-2021-11-29-224640.png" alt="" /></SwiperSlide>
            </Swiper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ m: 2 }}>
              Responsive Football Website
            </Typography>
            <Box sx={{ m: 2 }}>
              <Typography variant="p" >
                ✅ This is a single-page website. (only client site)
                <br />
                ✅ Football news sharing website
                <br />

              </Typography>
              <Box>
                <a target="_blank" href="https://saddaul-siam.github.io/responsive-football/" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ ml: 2, borderRadius: '52px', }} variant="contained" color="warning">Live Site</Button></a>
                <a target="_blank" href="https://github.com/Saddaul-Siam/responsive-football" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ m: 1, borderRadius: '52px', }} variant="contained" color="primary">Code</Button></a>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={5} sx={{ py: 5, boxShadow: 2, my: 5 }}  
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        data-aos-duration="500">
          <Grid item xs={12} md={6}>
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
              "delay": 2500,
              "disableOnInteraction": false
            }} pagination={{
              "clickable": true
            }} navigation={true} className="mySwiper">
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/Kxs2JN2/Screenshot-2021-11-29-225030.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/HHjhQqd/Screenshot-2021-11-29-225058.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/Q6yn3Rj/Screenshot-2021-11-29-225044.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/HzmnQm5/Screenshot-2021-11-29-225111.png" alt="" /></SwiperSlide>
            </Swiper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ m: 2 }}>
              Siam Store (e-commerce Website)
            </Typography>
            <Box sx={{ m: 2 }}>
              <Typography variant="p" >
                ✅ This is a single-page website. (only client site)
                <br />
                ✅  Simple javascript website
                <br />
                ✅ e-commerce Website
              </Typography>
              <Box>
                <a target="_blank" href="https://siam-store.netlify.app/" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ ml: 2, borderRadius: '52px', }} variant="contained" color="warning">Live Site</Button></a>
                <a target="_blank" href="https://github.com/Saddaul-Siam/siam-store" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ m: 1, borderRadius: '52px', }} variant="contained" color="primary">Code</Button></a>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={5} sx={{ py: 5, boxShadow: 2, my: 5 }}  
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        data-aos-duration="500">
          <Grid item xs={12} md={6}>
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
              "delay": 2500,
              "disableOnInteraction": false
            }} pagination={{
              "clickable": true
            }} navigation={true} className="mySwiper">
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/tBCcpkr/Screenshot-2021-11-29-225308.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/jZfp1PS/Screenshot-2021-11-29-225412.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/dBJcfKL/Screenshot-2021-11-29-225426.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/CwJppx2/Screenshot-2021-11-29-225440.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/wwnkz5L/Screenshot-2021-11-29-225357.png" alt="" /></SwiperSlide>
              <SwiperSlide> <img width="100%" src="https://i.ibb.co/5BTx724/Screenshot-2021-11-29-225334.png" alt="" /></SwiperSlide>
            </Swiper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ m: 2 }}>
              Easy School (educational Website)
            </Typography>
            <Box sx={{ m: 2 }}>
              <Typography variant="p" >
                ✅ This is a single-page website. (only client site)
                <br />
                ✅ Simple React website
                <br />
                ✅ Online learning website
              </Typography>
              <Box>
                <a target="_blank" href="https://online-easy-school.netlify.app/" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ ml: 2, borderRadius: '52px', }} variant="contained" color="warning">Live Site</Button></a>
                <a target="_blank" href="https://github.com/Saddaul-Siam/Educational-services" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ m: 1, borderRadius: '52px', }} variant="contained" color="primary">Code</Button></a>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Project;