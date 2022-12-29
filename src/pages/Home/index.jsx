import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { EmptyViewPage } from '../../components/EmptyView/EmptyViewPage';
import { FilterPanel } from '../../components/Home/FilterPanel/FilterPanel';
import { List } from '../../components/Home/List/List';
import { SearchBar } from '../../components/Home/searchBar/SearchBar';
const homeStyle = {};
export const Home = () => {
  return (
    <Stack className="home" style={homeStyle} direction="column" height="100vh">
      {/* search bar */}
      <SearchBar />
      <Stack
        className="home_panelList-wrap"
        direction="row"
        flex={1}
        overflow="auto">
        <Box
          className="home_panel-wrap"
          bgcolor="red"
          flexBasis="280px"
          overflow="auto">
          {/* side panel */}
          <FilterPanel />
        </Box>
        <Box
          className="home_panel-wrap"
          bgcolor="blue"
          flex={1}
          overflow="auto">
          {/* list and empty view */}
          <List />
          {/* <EmptyViewPage /> */}
        </Box>
      </Stack>
    </Stack>
  );
};
