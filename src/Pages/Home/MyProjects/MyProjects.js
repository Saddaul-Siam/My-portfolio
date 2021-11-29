
import React from "react";
import { Button, Card, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./MyProjects.css";
import SwiperCore, { EffectCoverflow, Navigation, Pagination,Autoplay } from "swiper";
import { Box } from "@mui/system";



SwiperCore.use([EffectCoverflow, Navigation, Pagination,Autoplay]);

const MyProjects = () => {
  return (
    <Box sx={{ padding: "80px 0px", backgroundColor: '#F5F7FF', py: 20 }} id="projects" data-aos="fade-up">
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography sx={{ fontWeight: 700, fontSize: 40, color: '#3C3E41', fontFamily: 'Ubuntu' }} >
          My Resent Projects
        </Typography>
      </Box>
      <Swiper
        style={{ padding: 50 }}
        navigation={true}
        effect={"coverflow"}
        grabCursor={true}
        // centeredSlides={true}
        autoplay={{
          "delay": 2500,
          "disableOnInteraction": false
        }}
        slidesPerView={"auto"}
        // loop={true}
        coverflowEffect={{
          "rotate": 50,
          "stretch": 0,
          "depth": 100,
          "modifier": 1,
          "slideShadows": true
        }} pagination={true} className="mySwiper">
        {/* <SwiperSlide>
          <Card style={{ height: "100%", padding: 20, borderRadius: "20px" }}>
            <img src="https://i.ibb.co/SwtGj3b/project1.png" alt="" />
            <Box sx={{ pt: 3 }}>
              <Button size="small" sx={{ mx: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="error">HTML</Button>
              <Button size="small" sx={{ mr: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="info">CSS</Button>
            </Box>
            <Typography variant="h5" sx={{ m: 2 }}>
              Food Network
            </Typography>
            <Box>
              <a target="_blank" href="https://saddaul-siam.github.io/food-network/" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ ml: 2, borderRadius: '52px', }} variant="contained" color="warning">Live Site</Button></a>
              <a target="_blank" href="https://github.com/Saddaul-Siam/food-network" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ m: 1, borderRadius: '52px', }} variant="contained" color="primary">Code</Button></a>
            </Box>
          </Card>
        </SwiperSlide> */}
        <SwiperSlide>
          <Card style={{ height: "100%", padding: 20, borderRadius: "20px" }}>
            <img src="https://i.ibb.co/8PhD1T3/project2.png" alt="" />
            <Box sx={{ pt: 3 }}>
              <Typography variant="span" sx={{ fontSize: "18px" }}>Technology</Typography>
              <Button size="small" sx={{ mx: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="error">HTML</Button>
              <Button size="small" sx={{ mr: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="info">CSS</Button>
              <Button size="small" sx={{ mr: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="success">Bootstrap</Button>
            </Box>
            <Typography variant="h5" sx={{ m: 2 }}>
              Honda CBR
            </Typography>
            <Box sx={{ m: 2 }}>
              <Typography variant="p" >
                This is a single-page website. (only client site)
                <br />
                This is a bike-selling website.
                <br />
                e-commerce Website
              </Typography>
            </Box>
            <Box>
              <a target="_blank" href="https://honda-cbr-24.netlify.app/" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ ml: 2, borderRadius: '52px', }} variant="contained" color="warning">Live Site</Button></a>
              <a target="_blank" href="https://github.com/Saddaul-Siam/honda-cbr" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ m: 1, borderRadius: '52px', }} variant="contained" color="primary">Code</Button></a>
            </Box>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ height: "100%", padding: 20, borderRadius: "20px" }}>
            <img src="https://i.ibb.co/5ThXVCY/Untitled-2.png" alt="" />
            <Box sx={{ pt: 3 }}>
              <Typography variant="span" sx={{ fontSize: "20px" }}>Technology</Typography>
              <Button size="small" sx={{ mx: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="error">HTML</Button>
              <Button size="small" sx={{ mr: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="info">CSS</Button>
              <Button size="small" sx={{ mr: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="success">Bootstrap</Button>
            </Box>
            <Typography variant="h5" sx={{ m: 2 }}>
              Responsive Football Website
            </Typography>
            <Box sx={{ m: 2 }}>
              <Typography variant="p" >
                This is a single-page website. (only client site)
                <br />
                Football news sharing website
                <br />

              </Typography>
            </Box>
            <Box>
              <a target="_blank" href="https://saddaul-siam.github.io/responsive-football/" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ ml: 2, borderRadius: '52px', }} variant="contained" color="warning">Live Site</Button></a>
              <a target="_blank" href="https://github.com/Saddaul-Siam/responsive-football" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ m: 1, borderRadius: '52px', }} variant="contained" color="primary">Code</Button></a>
            </Box>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ height: "100%", padding: 20, borderRadius: "20px" }}>
            <img src="https://i.ibb.co/WzK9HqM/project5.png" alt="" />
            <Box sx={{ pt: 3 }}>
              <Typography variant="span" sx={{ fontSize: "20px" }}>Technology</Typography>
              <Button size="small" sx={{ mx: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="error">HTML</Button>
              <Button size="small" sx={{ mr: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="info">CSS</Button>
              <Button size="small" sx={{ mr: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="success">Bootstrap</Button>
              <Button size="small" sx={{ mr: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="success">JavaScript</Button>
            </Box>
            <Typography variant="h5" sx={{ m: 2 }}>
              Siam Store (e-commerce Website)
            </Typography>
            <Box sx={{ m: 2 }}>
              <Typography variant="p" >
                This is a single-page website. (only client site)
                <br />
                Simple javascript website
                <br />
                e-commerce Website
              </Typography>
            </Box>
            <Box>
              <a target="_blank" href="https://siam-store.netlify.app/" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ ml: 2, borderRadius: '52px', }} variant="contained" color="warning">Live Site</Button></a>
              <a target="_blank" href="https://github.com/Saddaul-Siam/siam-store" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ m: 1, borderRadius: '52px', }} variant="contained" color="primary">Code</Button></a>
            </Box>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ height: "100%", padding: 20, borderRadius: "20px" }}>
            <img src="https://i.ibb.co/XSN7cJz/project8.png" alt="" />
            <Box sx={{ pt: 3 }}>
              <Typography variant="span" sx={{ fontSize: "20px" }}>Technology</Typography>
              <Button size="small" sx={{ mx: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="error">React</Button>
              <Button size="small" sx={{ mr: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="info">Bootstrap</Button>
            </Box>
            <Typography variant="h5" sx={{ m: 2 }}>
              Easy School (educational Website)
            </Typography>
            <Box sx={{ m: 2 }}>
              <Typography variant="p" >
                This is a single-page website. (only client site)
                <br />
                Simple React website
                <br />
                Online learning website
              </Typography>
            </Box>
            <Box>
              <a target="_blank" href="https://online-easy-school.netlify.app/" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ ml: 2, borderRadius: '52px', }} variant="contained" color="warning">Live Site</Button></a>
              <a target="_blank" href="https://github.com/Saddaul-Siam/Educational-services" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ m: 1, borderRadius: '52px', }} variant="contained" color="primary">Code</Button></a>
            </Box>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ height: "100%", padding: 20, borderRadius: "20px" }}>
            <img src="https://i.ibb.co/VthncpG/project7.png" alt="" />
            <Box sx={{ pt: 3 }}>
              <Typography variant="span" sx={{ fontSize: "20px" }}>Technology</Typography>
              <Button size="small" sx={{ mx: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="error">React</Button>
              <Button size="small" sx={{ mr: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="success">Bootstrap</Button>
              <Button size="small" sx={{ mr: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="info">React Router</Button>
              <Button size="small" sx={{ mr: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="warning">Firebase</Button>
            </Box>
            <Typography variant="h5" sx={{ m: 2 }}>
              Pro medical (healthcare-website.)
            </Typography>
            <Box sx={{ m: 2 }}>
              <Typography variant="p" >
                This is a single-page website. (only client site)
                <br />
                Pro medical is online hospital
                <br />
                Users need to log in via Google (also can create a new account)
              </Typography>
            </Box>
            <Box>
              <a target="_blank" href="https://pro-medical-24.web.app/" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ ml: 2, borderRadius: '52px', }} variant="contained" color="warning">Live Site</Button></a>
              <a target="_blank" href="https://github.com/Saddaul-Siam/Pro-Medical" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ m: 1, borderRadius: '52px', }} variant="contained" color="primary">Code</Button></a>
            </Box>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ height: "100%", padding: 20, borderRadius: "20px" }}>
            <img src="https://i.ibb.co/ChJDNkv/project9.png" alt="" />
            <Box sx={{ pt: 3 }}>
              <Typography variant="span" sx={{ fontSize: "20px" }}>Technology</Typography>
              <Button size="small" sx={{ mx: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="error">React</Button>
              <Button size="small" sx={{ mr: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="info">React Router</Button>
              <Button size="small" sx={{ mr: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="success">Bootstrap</Button>
              <Button size="small" sx={{ mr: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="warning">Firebase</Button>
              <Button size="small" sx={{ mr: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="secondary">Node</Button>
              <Button size="small" sx={{ m: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="primary">MongoDB</Button>
            </Box>
            <Typography variant="h5" sx={{ m: 2 }}>
              Tour Planners (Tourism Website)
            </Typography>
            <Box sx={{ m: 2 }}>
              <Typography variant="p" >
                This is a full-stack Tour-Planner booking website.
                <br />
                Users can be booking tours
                <br />
                Users need to log in via Google (also can create a new account)
                <br />
                Have admin and user dashboard. Admin can delete, add, manage services.
              </Typography>
            </Box>
            <Box>
              <a target="_blank" href="https://roma-tourism.web.app/" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ ml: 2, borderRadius: '52px', }} variant="contained" color="warning">Live Site</Button></a>
              <a target="_blank" href="https://github.com/Saddaul-Siam/Tour-Planners-client" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ m: 1, borderRadius: '52px', }} variant="contained" color="primary">Client Site Code</Button></a>
              <a target="_blank" href="https://github.com/Saddaul-Siam/Tour-Planners-server" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ m: 1, borderRadius: '52px', }} variant="contained" color="secondary">Server Site Code</Button></a>
            </Box>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ height: "100%", padding: 20, borderRadius: "20px" }}>
            <img src="https://i.ibb.co/QMh2KVs/project6.png" alt="" />
            <Box sx={{ pt: 3 }}>
              <Typography variant="span" sx={{ fontSize: "20px" }}>Technology</Typography>
              <Button size="small" sx={{ mx: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="error">React</Button>
              <Button size="small" sx={{ mr: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="info">React Router</Button>
              <Button size="small" sx={{ mr: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="success">MaterialUI</Button>
              <Button size="small" sx={{ mr: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="warning">Firebase</Button>
              <Button size="small" sx={{ mr: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="secondary">Node</Button>
              <Button size="small" sx={{ m: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="primary">MongoDB</Button>
            </Box>
            <Typography variant="h5" sx={{ m: 2 }}>
              Bike Buzz (e-commerce Website)
            </Typography>
            <Box sx={{ m: 2 }}>
              <Typography variant="p">
                This is a full-stack bike-selling website.
                <br />
                Users can order bikes and need to cancel orders
                <br />
                Users need to log in via Google (also can create a new account)
                <br />
                Have admin and user dashboard. Admin can delete, add, manage services.
              </Typography>
            </Box>
            <Box>
              <a target="_blank" href="https://bike-buzz.web.app/" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ ml: 2, borderRadius: '52px', }} variant="contained" color="warning">Live Site</Button></a>
              <a target="_blank" href="https://github.com/Saddaul-Siam/Bike-Buzz-Client" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ m: 1, borderRadius: '52px', }} variant="contained" color="primary">Client Site Code</Button></a>
              <a target="_blank" href="https://github.com/Saddaul-Siam/Bike-Buzz-Server" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ m: 1, borderRadius: '52px', }} variant="contained" color="secondary">Server Site Code</Button></a>
            </Box>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ height: "100%", padding: 20, borderRadius: "20px" }}>
            <img src="https://i.ibb.co/LvD14fj/projects10.png" alt="" />
            <Box sx={{ pt: 3 }}>
              <Typography variant="span" sx={{ fontSize: "20px" }}>Technology</Typography>
              <Button size="small" sx={{ mx: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="error">React</Button>
              <Button size="small" sx={{ mr: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="info">React Router</Button>
              <Button size="small" sx={{ mr: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="success">MaterialUI</Button>
              <Button size="small" sx={{ mr: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="warning">Firebase</Button>
              <Button size="small" sx={{ mr: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="secondary">Node</Button>
              <Button size="small" sx={{ m: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="primary">MongoDB</Button>
            </Box>
            <Typography variant="h5" sx={{ m: 2 }}>
              Doctors Portal
            </Typography>
            <Box sx={{ m: 2 }}>
              <Typography variant="p">
                This is a full-stack Doctors website.
                <br />
                Users can booking a Appointments
                <br />
                Users need to log in via Google (also can create a new account)
                <br />
                Have admin and user dashboard. Admin can delete, add, manage services.
              </Typography>
            </Box>
            <Box>
              <a target="_blank" href="https://doctors-portal-24.web.app/" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ ml: 2, borderRadius: '52px', }} variant="contained" color="warning">Live Site</Button></a>
              <a target="_blank" href="https://github.com/Saddaul-Siam/Doctor-protal-client" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ m: 1, borderRadius: '52px', }} variant="contained" color="primary">Client Site Code</Button></a>
              <a target="_blank" href="https://github.com/Saddaul-Siam/Doctor-protal-server" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ m: 1, borderRadius: '52px', }} variant="contained" color="secondary">Server Site Code</Button></a>
            </Box>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ height: "100%", padding: 20, borderRadius: "20px" }}>
            <img src="https://i.ibb.co/XLHCYMD/project11.png" alt="" />
            <Box sx={{ pt: 3 }}>
              <Typography variant="span" sx={{ fontSize: "20px" }}>Technology</Typography>
              <Button size="small" sx={{ ml: 2, borderRadius: '52px', cursor: "default" }} variant="outlined" color="error">React</Button>
              <Button size="small" sx={{ mx: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="info">React Router</Button>
              <Button size="small" sx={{ mr: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="success">MaterialUI</Button>
              <Button size="small" sx={{ mr: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="warning">Firebase</Button>
              <Button size="small" sx={{ mr: 1, borderRadius: '52px', cursor: "default" }} variant="outlined" color="secondary">Node</Button>
              <Button size="small" sx={{ m: 2, borderRadius: '52px', cursor: "default" }} variant="outlined" color="primary">MongoDB</Button>
            </Box>
            <Typography variant="h5" sx={{ m: 2 }}>
              Jerins Parlour
            </Typography>
            <Box sx={{ m: 2 }}>
              <Typography variant="p">
                This is a full-stack Parlour website.
                <br />
                Users need to booking a services and cancel services
                <br />
                Users can log in via Google (also can create a new account)
                <br />
                Have admin and user dashboard. Admin can delete, add, manage services.
              </Typography>
            </Box>
            <Box>
              <a target="_blank" href="https://jerins-parlours.web.app/" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ ml: 2, borderRadius: '52px', }} variant="contained" color="warning">Live Site</Button></a>
              <a target="_blank" href="https://github.com/Saddaul-Siam/Jerins-parlour-client" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ m: 1, borderRadius: '52px', }} variant="contained" color="primary">Client Site Code</Button></a>
              <a target="_blank" href="https://github.com/Saddaul-Siam/Jerins-parlour-server" rel="noReferrer" style={{ textDecoration: 'none' }}><Button sx={{ m: 1, borderRadius: '52px', }} variant="contained" color="secondary">Server Site Code</Button></a>
            </Box>
          </Card>
        </SwiperSlide>
      </Swiper>
    </Box >
  );
};

export default MyProjects;