import { Slider } from '@mui/material';
import React from 'react';
// slider custom style
const sliderStyle = {
  color: 'rgba(0, 0, 0, 0.6)',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0%',
    backgroundColor: 'rgba(0, 0, 0, 0.76)',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
};
const SliderProton = ({ value, changePrice }) => {
  return (
    <div className="root">
      <Slider
        sx={sliderStyle}
        value={value}
        onChange={changePrice}
        valueLabelDisplay="on"
        min={1000}
        max={5000}
      />
    </div>
  );
};

export default SliderProton;
