import { fn } from '@storybook/test';
import { SwipeableTextMobileStepper } from './Carousel';

export default {
  title: 'Example/Carousel',
  component: SwipeableTextMobileStepper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    handleNext: fn(),
    handleBack: fn(),
  },
};

// Ref: https://mui.com/material-ui/react-stepper/#text-with-carousel-effect
export const Default = {
  args: {
    position: 'bottom',
    variant: 'dots',
  }
};