import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { EmptyViewPage } from '../../components/common/EmptyView/EmptyViewPage';
import { FilterPanel } from '../../components/Home/FilterPanel/FilterPanel';
import { List } from '../../components/Home/List/List';
import { SearchBar } from '../../components/Home/searchBar/SearchBar';
import { dataList } from '../../Constants/data';

export const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const [list, setList] = useState(dataList);
  const [cuisines, setCuisines] = useState([
    { id: 1, checked: false, label: 'American' },
    { id: 2, checked: false, label: 'Chinese' },
    { id: 3, checked: false, label: 'Italian' },
  ]);

  const handleSelectCategory = (event, value) => {
    !value ? null : setSelectedCategory(value);
  };
  const handleSelectRating = (event, value) => {
    !value ? null : setSelectedRating(value);
  };
  const handleChangeChecked = (id) => {
    const cuisineStateList = cuisines;
    const changeCheckedCuisines = cuisineStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCuisines(changeCheckedCuisines);
  };
  const handeleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

// filter functionality 



  return (
    <Stack className="home" direction="column" height="100vh">
      {/* search bar */}
      <SearchBar />
      <Stack
        className="home_panelList-wrap"
        padding="1rem"
        direction="row"
        flex={1}
        overflow="auto">
        <Box
          className="home_panel-wrap"
          flexBasis="280px"
          overflow="auto"
          padding="1rem">
          {/* side panel */}
          <FilterPanel
            selectToggle={handleSelectCategory}
            selectCategory={selectedCategory}
            selectedRating={selectedRating}
            selectRating={handleSelectRating}
            cuisines={cuisines}
            changeChecked={handleChangeChecked}
            selectedPrice={selectedPrice}
            changePrice={handeleChangePrice}
          />
        </Box>
        <Box className="home_panel-wrap" flex={1} overflow="auto">
          {/* list and empty view */}
          <List list={list} />
          {/* <EmptyViewPage/> */}
        </Box>
      </Stack>
    </Stack>
  );
};
