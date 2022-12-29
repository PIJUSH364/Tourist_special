import { SearchRounded } from '@mui/icons-material';
import { Stack } from '@mui/material';
import React from 'react';
const inputStyle = {
  fontSize: '1.5rem',
  outline: 'none',
  border: 'none',
  width: '100%',
};
export const SearchBar = ({ value, changeInput }) => {
  return (
    <Stack
      className="searchBar_warp"
      direction="row"
      alignItems="center"
      borderBottom="1px solid rgba(0,0,0,0.26)"
      padding="1.5rem 1rem">
      <SearchRounded
        className="searchBarIcon"
        style={{
          color: 'rgba(0,0,0,0.26)',
          marginRight: '2rem',
        }}
      />
      <input
        style={inputStyle}
        type="text"
        placeholder="Woodland Hills"
        value={value}
        onChange={changeInput}
      />
    </Stack>
  );
};
