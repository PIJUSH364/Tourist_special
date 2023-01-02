import { Close, Filter, Menu, Sort } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { EmptyViewPage } from '../../components/common/EmptyView/EmptyViewPage';
import { FilterPanel } from '../../components/Home/FilterPanel/FilterPanel';
import { List } from '../../components/Home/List/List';
import { SearchBar } from '../../components/Home/searchBar/SearchBar';
import { dataList } from '../../Constants/data';
import { changeZIndex } from '../../redux/domSlice';

const cancelIconStyle = {
  display: {
    xs: 'block',
    sm: 'block',
    md: 'none',
    lg: 'none',
    xl: 'none',
  },
};
const filterPanelStatus = {
  display: {
    xs: 'none',
    sm: 'none',
    md: 'block',
    lg: 'block',
    xl: 'block',
  },
};
export const Home = ({
  selectedCategory,
  selectedRating,
  selectedPrice,
  cuisines,
  handleSelectCategory,
  handleSelectRating,
  handleChangePrice,
  handleChangeChecked,
  inputSearch,
  setInputSearch,
  applyFilter,
  list,
  setList,
}) => {
  const dispatch = useDispatch();
  const [toggleStatus, setToggleStatus] = useState(false);
  const transformValue = toggleStatus ? 'translateX(0)' : 'translateX(-110%)';
  const [resultFound, setResultFound] = useState(false);

  const iconView = toggleStatus ? 'none' : 'block';

  // ....icon display status
  const menuIconStyle = {
    display: {
      xs: iconView,
      sm: iconView,
      md: 'none',
      lg: 'none',
      xl: 'none',
    },
  };

  useEffect(() => {
    applyFilter();
  }, [selectedRating, selectedCategory, cuisines, selectedPrice, inputSearch]);

  return (
    <Stack className="home" direction="column" height="100vh">
      {/* search bar */}
      <SearchBar
        value={inputSearch}
        changeInput={(e) => setInputSearch(e.target.value)}
      />
      <Stack
        className="home_panelList-wrap"
        padding="1rem"
        direction="row"
        flex={1}
        overflow="auto">
        <Box
          sx={filterPanelStatus}
          id="only_desktop"
          className="home_panel-wrap"
          flexBasis="280px"
          overflow="auto"
          padding="1rem">
          {/* side panel */}
          <FilterPanel
            cuisines={cuisines}
            selectedCategory={selectedCategory}
            selectedRating={selectedRating}
            selectedPrice={selectedPrice}
            selectToggle={handleSelectCategory}
            changePrice={handleChangePrice}
            changeChecked={handleChangeChecked}
            selectRating={handleSelectRating}
          />
        </Box>
        <Box className="home_panel-wrap" flex={1} overflow="auto">
          {/* list and empty view */}
          {setResultFound ? <List list={list} /> : <EmptyViewPage />}
          {/* <EmptyViewPage /> */}
        </Box>
      </Stack>
    </Stack>
  );
};
