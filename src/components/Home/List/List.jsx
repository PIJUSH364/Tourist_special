import { Box } from '@mui/material';
import React, { Suspense } from 'react';
const ListItem = React.lazy(() => import('./ListItem/ListItem'));
const responsiveListItem = {
  gridTemplateColumns: {
    xs: 'repeat(1,1fr)',
    sm: 'repeat(2,1fr)',
    md: 'repeat(2,1fr)',
    lg: 'repeat(3,1fr)',
    xl: 'repeat(3,1fr)',
  },
};
export const List = ({ list }) => {
  return (
    <Box
      p={2}
      gap={3}
      rowGap={7}
      className="list-warp"
      display="grid"
      sx={responsiveListItem}>
      {list.map((item, key) => (
        <Suspense key={key} fallback={<div>Loading...</div>}>
          <ListItem item={item} />
        </Suspense>
      ))}
    </Box>
  );
};
