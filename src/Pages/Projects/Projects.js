import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
// import "./MyProjects.css";
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);
const Project = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Box sx={{ pt: 15, display: 'flex', justifyContent: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 700, pb: 5 }}>My Resent Projects</Typography>
        </Box>
        <Grid container spacing={5} sx={{ py: 5 }}>
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
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero doloremque magni est eveniet excepturi, quidem odit accusantium similique earum veniam tempore commodi consequuntur architecto dolores, incidunt necessitatibus ut quibusdam dolor eum accusamus provident asperiores cum nulla ab. Aspernatur, consequuntur minima aliquam debitis optio quos maxime nesciunt expedita. Sapiente, ducimus. Enim fuga eius voluptates incidunt eum repellat aspernatur aperiam eligendi quaerat sed ipsa deleniti, perferendis qui omnis, facilis illo tenetur atque voluptatibus minima totam modi! Tempora sequi, facere blanditiis culpa, ad a illo laudantium aliquid asperiores reprehenderit commodi vel maxime ut tempore magnam, veniam fuga. Laudantium dicta eveniet possimus doloremque exercitationem! Expedita impedit quod,
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={5} sx={{ py: 5 }}>
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
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero doloremque magni est eveniet excepturi, quidem odit accusantium similique earum veniam tempore commodi consequuntur architecto dolores, incidunt necessitatibus ut quibusdam dolor eum accusamus provident asperiores cum nulla ab. Aspernatur, consequuntur minima aliquam debitis optio quos maxime nesciunt expedita. Sapiente, ducimus. Enim fuga eius voluptates incidunt eum repellat aspernatur aperiam eligendi quaerat sed ipsa deleniti, perferendis qui omnis, facilis illo tenetur atque voluptatibus minima totam modi! Tempora sequi, facere blanditiis culpa, ad a illo laudantium aliquid asperiores reprehenderit commodi vel maxime ut tempore magnam, veniam fuga. Laudantium dicta eveniet possimus doloremque exercitationem! Expedita impedit quod,
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={5} sx={{ py: 5 }}>
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
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero doloremque magni est eveniet excepturi, quidem odit accusantium similique earum veniam tempore commodi consequuntur architecto dolores, incidunt necessitatibus ut quibusdam dolor eum accusamus provident asperiores cum nulla ab. Aspernatur, consequuntur minima aliquam debitis optio quos maxime nesciunt expedita. Sapiente, ducimus. Enim fuga eius voluptates incidunt eum repellat aspernatur aperiam eligendi quaerat sed ipsa deleniti, perferendis qui omnis, facilis illo tenetur atque voluptatibus minima totam modi! Tempora sequi, facere blanditiis culpa, ad a illo laudantium aliquid asperiores reprehenderit commodi vel maxime ut tempore magnam, veniam fuga. Laudantium dicta eveniet possimus doloremque exercitationem! Expedita impedit quod,
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={5} sx={{ py: 5 }}>
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
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero doloremque magni est eveniet excepturi, quidem odit accusantium similique earum veniam tempore commodi consequuntur architecto dolores, incidunt necessitatibus ut quibusdam dolor eum accusamus provident asperiores cum nulla ab. Aspernatur, consequuntur minima aliquam debitis optio quos maxime nesciunt expedita. Sapiente, ducimus. Enim fuga eius voluptates incidunt eum repellat aspernatur aperiam eligendi quaerat sed ipsa deleniti, perferendis qui omnis, facilis illo tenetur atque voluptatibus minima totam modi! Tempora sequi, facere blanditiis culpa, ad a illo laudantium aliquid asperiores reprehenderit commodi vel maxime ut tempore magnam, veniam fuga. Laudantium dicta eveniet possimus doloremque exercitationem! Expedita impedit quod,
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={5} sx={{ py: 5 }}>
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
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero doloremque magni est eveniet excepturi, quidem odit accusantium similique earum veniam tempore commodi consequuntur architecto dolores, incidunt necessitatibus ut quibusdam dolor eum accusamus provident asperiores cum nulla ab. Aspernatur, consequuntur minima aliquam debitis optio quos maxime nesciunt expedita. Sapiente, ducimus. Enim fuga eius voluptates incidunt eum repellat aspernatur aperiam eligendi quaerat sed ipsa deleniti, perferendis qui omnis, facilis illo tenetur atque voluptatibus minima totam modi! Tempora sequi, facere blanditiis culpa, ad a illo laudantium aliquid asperiores reprehenderit commodi vel maxime ut tempore magnam, veniam fuga. Laudantium dicta eveniet possimus doloremque exercitationem! Expedita impedit quod,
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={5} sx={{ py: 5 }}>
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
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero doloremque magni est eveniet excepturi, quidem odit accusantium similique earum veniam tempore commodi consequuntur architecto dolores, incidunt necessitatibus ut quibusdam dolor eum accusamus provident asperiores cum nulla ab. Aspernatur, consequuntur minima aliquam debitis optio quos maxime nesciunt expedita. Sapiente, ducimus. Enim fuga eius voluptates incidunt eum repellat aspernatur aperiam eligendi quaerat sed ipsa deleniti, perferendis qui omnis, facilis illo tenetur atque voluptatibus minima totam modi! Tempora sequi, facere blanditiis culpa, ad a illo laudantium aliquid asperiores reprehenderit commodi vel maxime ut tempore magnam, veniam fuga. Laudantium dicta eveniet possimus doloremque exercitationem! Expedita impedit quod,
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={5} sx={{ py: 5 }}>
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
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero doloremque magni est eveniet excepturi, quidem odit accusantium similique earum veniam tempore commodi consequuntur architecto dolores, incidunt necessitatibus ut quibusdam dolor eum accusamus provident asperiores cum nulla ab. Aspernatur, consequuntur minima aliquam debitis optio quos maxime nesciunt expedita. Sapiente, ducimus. Enim fuga eius voluptates incidunt eum repellat aspernatur aperiam eligendi quaerat sed ipsa deleniti, perferendis qui omnis, facilis illo tenetur atque voluptatibus minima totam modi! Tempora sequi, facere blanditiis culpa, ad a illo laudantium aliquid asperiores reprehenderit commodi vel maxime ut tempore magnam, veniam fuga. Laudantium dicta eveniet possimus doloremque exercitationem! Expedita impedit quod,
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Project;

