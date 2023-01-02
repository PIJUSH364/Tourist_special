import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { NavBar } from './components/navBar/NavBar';
import { dataList } from './Constants/data';
import { Home } from './pages/Home';
const navStyle = {
  top: '0',
  position: 'sticky',
  minWidth: '350px',
  background:
    ' radial-gradient(circle, rgba(63,221,251,1) 0%,rgba(151,255,255,1) 63%)',
  fontFamily: "'Raleway', sans-serif",
};

function App() {
  const [list, setList] = useState(dataList);
  const [inputSearch, setInputSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
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
  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  }; // filter functionality
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
  };
  return (
    <>
      <Box style={navStyle}>
        <NavBar
          selectedCategory={selectedCategory}
          selectedRating={selectedRating}
          selectedPrice={selectedPrice}
          cuisines={cuisines}
          setCuisines={setCuisines}
          handleSelectCategory={handleSelectCategory}
          handleSelectRating={handleSelectRating}
          handleChangePrice={handleChangePrice}
          handleChangeChecked={handleChangeChecked}
        />
      </Box>
      <Box minWidth="350px">
        <Home
          selectedCategory={selectedCategory}
          selectedRating={selectedRating}
          selectedPrice={selectedPrice}
          cuisines={cuisines}
          setCuisines={setCuisines}
          handleSelectCategory={handleSelectCategory}
          handleSelectRating={handleSelectRating}
          handleChangePrice={handleChangePrice}
          handleChangeChecked={handleChangeChecked}
          inputSearch={inputSearch}
          setInputSearch={setInputSearch}
          applyFilter={applyFilter}
          list={list}
          setList={setList}
        />
      </Box>
    </>
  );
}

export default App;
