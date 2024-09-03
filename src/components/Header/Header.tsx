import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { GradientButton } from "../Button";

import banner from "../../assets/banner.jpg";
import logo from "../../assets/logo.png";

export const Header: FC = () => {
  return (
    <>
      <Box
        sx={{
          padding: 2,
          backgroundColor: "aliceblue",
        }}
      >
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
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: 1,
          }}
        >
          <GradientButton btnType="btn1">Hello1</GradientButton>
          <GradientButton btnType="btn1">Hello2</GradientButton>
          <GradientButton btnType="btn1">Hello3</GradientButton>
          <GradientButton btnType="btn1">Hello4</GradientButton>
          <GradientButton btnType="btn1">Hello5</GradientButton>
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
    </>
  );
};
