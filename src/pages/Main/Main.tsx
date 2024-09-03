import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Box, Typography } from "@mui/material";

const images = [
  "https://thebreakspear.s3.amazonaws.com/uploads/home_header/2_17_s.jpg?t=1701185695",
  "https://www.ctvnews.ca/polopoly_fs/1.4270510.1570292473!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg",
  "https://static.independent.co.uk/2021/08/13/12/GettyImages-170126264.jpg",
];

export const Main: FC = () => {
  return (
    <Box
      display="flex"
      sx={{
        padding: 4,
        flexDirection: { xs: "column", lg: "row" },
        alignItems: "center",
      }}
    >
      {/* Swiper Container */}
      <Box sx={{ maxWidth: 700 }}>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                component="img"
                sx={{
                  maxHeight: "400px",
                  borderRadius: 8,
                }}
                alt={"logo"}
                src={image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Static Text Container */}
      <Box
        sx={{
          paddingLeft: 2,
          alignSelf: "flex-start",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Про нас
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Curabitur ut
          risus urna. Nullam et quam ut risus volutpat scelerisque nec sit amet
          lorem. Sed consequat suscipit neque, et tincidunt lacus malesuada at.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Curabitur ut
          risus urna. Nullam et quam ut risus volutpat scelerisque nec sit amet
          lorem. Sed consequat suscipit neque, et tincidunt lacus malesuada at.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Curabitur ut
          risus urna. Nullam et quam ut risus volutpat scelerisque nec sit amet
          lorem. Sed consequat suscipit neque, et tincidunt lacus malesuada at.
        </Typography>
      </Box>
    </Box>
  );
};
