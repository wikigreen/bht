import { FC } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { GradientButton } from "../../Button";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
      <Box maxWidth="800px" display="flex" gap={4} flexDirection="row">
        <button className="arrow-left arrow">Prev</button>
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={3}
          navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: "32px",
                marginLeft: "32px",
              }}
            >
              <Box
                sx={{
                  padding: 1,
                  width: "250px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: "200px",
                    borderRadius: 8,
                    maxWidth: "300px",
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
                  <Typography variant="h3" gutterBottom>
                    Про нас
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="arrow-right arrow">next</button>
      </Box>
    </Box>
  );
};
