import { Box, Checkbox, FormControlLabel } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';
const checkBoxStyle = {
  color: grey[800],
  '&.Mui-checked': {
    color: grey[600],
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
            sx={checkBoxStyle}
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
