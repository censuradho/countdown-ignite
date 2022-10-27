import { styled } from "@/stitches.config";

export const Button = styled("button", {
  borderRadius: "50%",
  padding: "0.3rem",
  width: "max-content",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  outline: "none",

  "&:focus": {
    background: "$gray500",
  },
  
  variants: {
    isRipple: {
      true: {
        background: "$gray500",
      },
      false: {
        background: "none",

      },
    },
  },
});