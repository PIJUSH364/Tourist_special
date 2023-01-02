import { Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React from 'react';

// ToggleButtonGroup custom style provide
const classesRoot = { width: '100%', justifyContent: 'space-between' };
// ToggleButton custom style
const classesToggle = {
  fontFamily: `'Raleway', sans-serif`,
  transition: 'all 1s ease-in-out',
  fontSize: '.8rem',
  border: '1px solid rgba(0, 0, 0, 0.12)',
  borderRadius: '10px',
  '&.MuiToggleButtonGroup-groupedHorizontal:not(:last-child)': {
    borderRadius: '10px',
  },
  '&.MuiToggleButtonGroup-groupedHorizontal:not(:first-of-type)': {
    borderRadius: '10px',
    border: '1px solid rgba(0, 0, 0, 0.12)',
  },
  '&.Mui-selected': {
    borderRadius: '10px',
    background: '#000',
    color: '#fff',
  },
  '&.MuiToggleButton-root': {
    '&:hover': {
      background: ' rgba(0, 0, 0, 0.72)',
      color: '#fff',
    },
  },
};
export const FilterListToggle = ({ options, value, selectToggle }) => {
  return (
    <>
      <ToggleButtonGroup
        sx={classesRoot}
        exclusive={true}
        value={value}
        onChange={selectToggle}
        className={'classesRoot'}>
        {options.map(({ label, id, value }) => (
          <ToggleButton
            className={'classesToggle'}
            key={id}
            value={value}
            sx={classesToggle}>
            {label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </>
  );
};
