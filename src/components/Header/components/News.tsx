import { FC } from "react";
import { Box, Button, Divider, Link, Typography } from "@mui/material";
import { GradientButton } from "../../Button";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  ArrowBackIosNewRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material";

const images = [
  "https://placehold.co/5",
  "https://www.ctvnews.ca/polopoly_fs/1.4270510.1570292473!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg",
  "https://static.independent.co.uk/2021/08/13/12/GettyImages-170126264.jpg",
  "https://placehold.co/1000",
  "https://www.ctvnews.ca/polopoly_fs/1.4270510.1570292473!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg",
  "https://static.independent.co.uk/2021/08/13/12/GettyImages-170126264.jpg",
  "https://placehold.co/1000",
  "https://www.ctvnews.ca/polopoly_fs/1.4270510.1570292473!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg",
  "https://static.independent.co.uk/2021/08/13/12/GettyImages-170126264.jpg",
  "https://placehold.co/1000",
  "https://www.ctvnews.ca/polopoly_fs/1.4270510.1570292473!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg",
  "https://static.independent.co.uk/2021/08/13/12/GettyImages-170126264.jpg",
];

export const News: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 4,
        flexDirection: { xs: "column", lg: "row" },
        maxWidth: "lg",
      }}
    >
      <Box display="flex" gap={4} flexDirection="column" width="100%">
        <Typography variant="h2">Новини</Typography>
        <Divider />
        <GradientButton btnType={"btn1"}>Подивитися всі</GradientButton>
      </Box>
      <Box maxWidth="850px" display="flex" flexDirection="row">
        <Button className="arrow-left" startIcon={<ArrowBackIosNewRounded />} />
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={2}
          navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: "32px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  padding: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    width: "100%",
                    height: "300px",
                    borderRadius: 8,
                    objectFit: "cover",
                  }}
                  alt={"logo"}
                  src={image}
                />
                <Box
                  sx={{
                    paddingLeft: 2,
                    alignSelf: "flex-start",
                  }}
                >
                  <Link href="/hello">
                    <Typography variant="h3" gutterBottom>
                      Новина
                    </Typography>
                  </Link>
                  <Typography variant="body1" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        <Button
          className="arrow-right"
          startIcon={<ArrowForwardIosRounded />}
        />
      </Box>
    </Box>
  );
};
