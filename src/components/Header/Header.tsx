import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { GradientButton } from "../Button";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";

import banner from "../../assets/banner.jpg";
import logo from "../../assets/logo.png";

export const Header: FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage: "linear-gradient(180deg, aliceblue, #FFF)",
      }}
    >
      <Box padding={2}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            marginBottom: 4,
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            sx={{
              height: "4rem",
              width: "auto",
            }}
            alt={"logo"}
            src={logo}
          />
          <Typography variant="h4">
            Переяславський будинок художньої творчості дітей, юнацтва та молоді
          </Typography>
          <Box marginLeft="auto">
            <FacebookOutlinedIcon
              fontSize="large"
              onClick={() => console.log("fdgfdg")}
            />
            <YouTubeIcon fontSize="large" />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: 1,
          }}
        >
          <GradientButton btnType="btn1">Головна</GradientButton>
          <GradientButton btnType="btn1">Новини</GradientButton>
          <GradientButton btnType="btn1">Про нас</GradientButton>
          <GradientButton btnType="btn1">Гуртки</GradientButton>
          <GradientButton btnType="btn1">Контакти</GradientButton>
          <GradientButton btnType="btn1">Анкета вихованця</GradientButton>
        </Box>
      </Box>

      <Box
        component="img"
        sx={{
          maxWidth: "100vw",
          boxShadow: "0px 0px 12px 8px lightgrey",
          minHeight: "210px",
          objectFit: "cover",
          objectPosition: "left",
        }}
        alt={"banner"}
        src={banner}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: { lg: "row", xs: "column" },
          gap: 1,
          padding: 2,
        }}
      >
        <GradientButton btnType="btn1">Публічна інформація</GradientButton>
        <GradientButton btnType="btn1">Дистанційне навчання</GradientButton>
        <GradientButton btnType="btn1">
          Нормативно-правові документи
        </GradientButton>
        <GradientButton btnType="btn1">Методична допомога</GradientButton>
        <GradientButton btnType="btn1">Протидія булінгу</GradientButton>
        <GradientButton btnType="btn1">
          Національно-патріотичне виховання
        </GradientButton>
      </Box>
    </Box>
  );
};
