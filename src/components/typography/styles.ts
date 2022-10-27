import { styled } from '@/stitches.config'
export const Typography = styled("span", {

  variants: {
    text: {
      true: {
        fontSize: '$sm',
      }
    },
    heading: {
      true: {
        fontSize: '$md',
      }
    },
    bold: {
      true: {
        fontWeight: 600
      }
    }
  },
  defaultVariants: {
    text: true
  }
});