import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { EmptyViewPage } from '../../components/common/EmptyView/EmptyViewPage';
import { FilterPanel } from '../../components/Home/FilterPanel/FilterPanel';
import { List } from '../../components/Home/List/List';
import { SearchBar } from '../../components/Home/searchBar/SearchBar';
import { dataList } from '../../Constants/data';

export const Home = () => {
  const [inputSearch, setInputSearch] = useState('');
  const [resultFound, setResultFound] = useState(false);
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
  const applyFilter = () => {
    let updatedList = dataList;

    //rating filter
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }

    //category filter
    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }
    //cuisine filter
    const cuisineChecked = cuisines
      .filter((item) => item.checked)
      .map((item) => item.label.toLocaleLowerCase());

    if (cuisineChecked.length) {
      updatedList = updatedList.filter((item) =>
        cuisineChecked.includes(item.cuisine)
      );
    }

    // price filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];
    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    // search filter
    if (inputSearch) {
      updatedList = updatedList.filter(
        (item) =>
          item.title
            .toLowerCase()
            .search(inputSearch.toLocaleLowerCase().trim()) !== -1
      );
    }
    // finally list of  item set
    setList(updatedList);
    !updatedList.length ? setResultFound(false) : setResultFound(true);
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
          {setResultFound ? <List list={list} /> : <EmptyViewPage />}

          <EmptyViewPage />
        </Box>
      </Stack>
    </Stack>
  );
};
