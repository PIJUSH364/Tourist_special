import { Box } from '@mui/material';
import React from 'react';
import ListItem from './ListItem/ListItem';

export const List = ({ list }) => {
  return (
    <Box
      gap={3}
      rowGap={7}
      className="list-warp"
      style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
      {list.map((item, key) => (
        <ListItem key={key} item={item} />
      ))}
    </Box>
  );
};
