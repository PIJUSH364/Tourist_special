import { Box, Stack } from '@mui/material';
import React from 'react';

export const EmptyViewPage = () => {
  return (
    <Stack
      className="emptyView-warp"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center">
      <img
        src="/images/gif/empty.gif"
        alt="emptyView"
        style={{
          maxWidth: '500px',
          width: '100%',
        }}
      />
    </Stack>
  );
};
