import { Box, Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';
const rootStyle = {
  '&$checked': {
    color: '#000',
  },
};
const warpStyle = {
  width: '100%',
  display: 'flex',
  flexDirection: 'row-reverse',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginLeft: '0',
};
const CheckBoxProton = ({ cuisine, changeChecked }) => {
  const { checked, label, id } = cuisine;
  return (
    <Box>
      <FormControlLabel
        style={warpStyle}
        className="label warp"
        control={
          <Checkbox
            style={rootStyle}
            className="checked root"
            size="small"
            checked={checked}
            onChange={() => changeChecked(id)}
          />
        }
        label={label}
      />
    </Box>
  );
};

export default CheckBoxProton;
