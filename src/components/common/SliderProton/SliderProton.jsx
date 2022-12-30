import { Slider } from '@mui/material';
import React from 'react';

const SliderProton = ({ value, changePrice }) => {
  return (
    <div className="root">
      <Slider
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
