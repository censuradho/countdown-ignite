import { styled } from "@/stitches.config";

export const Button = styled("button", {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  transition: ".2s",
  justifyContent: "center",
  position: "relative",

  "&:disabled": {
    background: "$primaryDark",
  },
  variants: {
    fullWidth: {
      true: {
        width: "100%",
      },
    },
    variant: {
      primary: {
        background: "$blue",
        "> *": {
          color: "white",
        },
        padding: "1rem",
        borderRadius: '$sm',

        "svg path": {
          fill: "White",
        },
        "&:hover": {
          opacity: 0.7,
          "svg path": {
            fill: "white",
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export const LoaderContainer = styled("div", {
  position: "absolute",

  svg: {
    width: "36px",
  },
});