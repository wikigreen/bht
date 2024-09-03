import { styled } from "@mui/material";
import { FC, ReactNode } from "react";

interface GradientButtonProps {
  btnType: "btn1" | "btn2" | "btn3" | "btn4"; // Define acceptable values for btnType
  children: ReactNode; // Define type for children
}

const StyledButton = styled("button")<GradientButtonProps>(({ btnType }) => ({
  border: "none",
  padding: "20px",
  borderRadius: 12,
  textTransform: "uppercase",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)",
  cursor: "pointer",
  color: "#fff",
  backgroundSize: "200%",
  transition: "0.4s",
  fontSize: "1.25rem", // Increased font size
  backgroundImage: (() => {
    switch (btnType) {
      case "btn1":
        return "linear-gradient(45deg, #FFC312, #EE5A24, #00A8FF)";
      case "btn2":
        return "linear-gradient(45deg, #e74c3c, #8e44ad, #f1c40f)";
      case "btn3":
        return "linear-gradient(to left, #c0392b, #27ae60, #f39c12)";
      case "btn4":
        return "linear-gradient(to left, #34495e, #9b59b6, #3498db)";
      default:
        return "linear-gradient(45deg, #FFC312, #EE5A24, #00A8FF)"; // Default gradient
    }
  })(),
  "&:hover": {
    backgroundPosition: "right",
  },
}));

// Main component that renders the button with different gradients
export const GradientButton: FC<GradientButtonProps> = ({
  btnType,
  children,
}) => {
  return <StyledButton btnType={btnType}>{children}</StyledButton>;
};
