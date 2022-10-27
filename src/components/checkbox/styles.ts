import { styled } from '@stitches/react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

export const Root = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  width: '1.0625rem',
  height: '1.0625rem',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  cursor: 'pointer',
  
  '[data-state]': {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '&[data-state="unchecked"]': {
    border: '2px solid $blue',
  },

  '&[data-state="checked"]': {
    backgroundColor: '$purpleDark',
    borderColor: 'transparent',
  }
});

export const Indicator = styled(CheckboxPrimitive.Indicator, {
  color: 'White',
});