
import React from "react";
import { Card, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./MyProjects.css";
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Box } from "@mui/system";



SwiperCore.use([EffectCoverflow, Navigation, Pagination]);

const MyProjects = () => {
  return (
    <Box sx={{ padding: "80px 0px", backgroundColor: '#F5F7FF', py: 20, }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', pb: 5 }}>
        <Typography sx={{ fontWeight: 700, fontSize: 40, color: '#3C3E41', fontFamily: 'Ubuntu' }} >
          My Resent Projects
        </Typography>
      </Box>
      <Swiper
        style={{ padding: 50 }}
        navigation={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          "rotate": 50,
          "stretch": 0,
          "depth": 100,
          "modifier": 1,
          "slideShadows": true
        }} pagination={true} className="mySwiper">
        <SwiperSlide>
          <Card style={{ height: "100%" }}>
            <img src="https://i.ibb.co/SwtGj3b/project1.png" alt="" />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ height: "100%" }}>
            <img src="https://i.ibb.co/8PhD1T3/project2.png" alt="" />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ height: "100%" }}>
            <img src="https://i.ibb.co/5ThXVCY/Untitled-2.png" alt="" />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ height: "100%" }}>
            <img src="https://i.ibb.co/cLVLB2q/project4.png" alt="" />
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ height: "100%" }}>
            <img src="https://i.ibb.co/WzK9HqM/project5.png" alt="" />
            {/* <h2>Dr. Elisabeth</h2>
            <p>+123456789</p> */}
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ height: "100%" }}>
            <img src="https://i.ibb.co/XSN7cJz/project8.png" alt="" />
            {/* <h2>Dr. Elisabeth</h2>
            <p>+123456789</p> */}
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ height: "100%" }}>
            <img src="https://i.ibb.co/VthncpG/project7.png" alt="" />
            {/* <h2>Dr. Elisabeth</h2>
            <p>+123456789</p> */}
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ height: "100%" }}>
            <img src="https://i.ibb.co/ChJDNkv/project9.png" alt="" />
            {/* <h2>Dr. Elisabeth</h2>
            <p>+123456789</p> */}
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card style={{ height: "100%" }}>
            <img src="https://i.ibb.co/QMh2KVs/project6.png" alt="" />
            {/* <h2>Dr. Elisabeth</h2>
            <p>+123456789</p> */}
          </Card>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default MyProjects;