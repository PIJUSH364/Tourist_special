import {
  Cancel,
  Close,
  ExpandMore,
  FilterList,
  Menu,
  Sort,
} from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeZIndex } from '../../redux/domSlice';
import { FilterPanel } from '../Home/FilterPanel/FilterPanel';

const menuIconStyle = {
  display: {
    xs: 'block',
    sm: 'block',
    md: 'none',
    lg: 'none',
    xl: 'none',
  },
};
const menuItemStyle = {
  display: {
    xs: 'none',
    sm: 'none',
    md: 'flex',
    lg: 'flex',
    xl: 'flex',
  },
};

export const NavBar = ({
  selectedCategory,
  selectedRating,
  selectedPrice,
  cuisines,
  handleSelectCategory,
  handleSelectRating,
  handleChangePrice,
  handleChangeChecked,
}) => {
  const dispatch = useDispatch();
  const [toggleStatus, setToggleStatus] = useState(false);
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const transformValue = toggleStatus ? 'translateX(0)' : 'translateX(110%)';

  return (
    <>
      <Stack
        direction="row"
        gap={2}
        p={2}
        justifyContent="space-between"
        boxShadow="rgb(50 50 93 / 25%) 0px 50px 100px -20px, rgb(0 0 0 / 30%) 0px 8px 9px -30px">
        <Box>
          <Typography variant="h5">Tourist_choice</Typography>
        </Box>
        <Box direction="row" gap={2} alignItems="center" sx={menuItemStyle}>
          <Typography variant="h6">LogIn</Typography>
          <Typography variant="h6">SignUp</Typography>
          <Typography variant="h6">Dashboard</Typography>
        </Box>
        <IconButton
          sx={menuIconStyle}
          onClick={() => {
            dispatch(changeZIndex(-3));
            setToggleStatus(!toggleStatus);
          }}>
          <Menu />
        </IconButton>
      </Stack>

      <Box>
        <Box
          boxShadow={
            ' rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(48, 41, 41, 0.8) -6px -2px 16px 0px'
          }
          bgcolor={'gray'}
          p={3}
          style={{
            top: 0,
            bottom: 0,
            right: 0,
            width: '300px',
            position: 'fixed',
            overflow: 'auto',
            transition: ' all 1.3s ease-in-out',
            transform: transformValue,
          }}>
          <IconButton
            onPointerDown={() => {
              setToggleStatus(!toggleStatus);
              setTimeout(() => {
                dispatch(changeZIndex(3));
              }, 1000);
            }}>
            <Cancel style={{ color: '#fff' }} />
          </IconButton>
          <Box direction="row" gap={2} alignItems="center" color={'#fff'}>
            <Typography variant="h6">LogIn</Typography>
            <Typography variant="h6">SignUp</Typography>
            <Typography variant="h6">Dashboard</Typography>
          </Box>
          <>
            <Accordion>
              <AccordionSummary
                onClick={() => {
                  setFilterIsOpen(!filterIsOpen);
                }}
                aria-controls="panel1d-content"
                id="panel1d-header">
                <IconButton>
                  {filterIsOpen ? <ExpandMore /> : <FilterList />}
                </IconButton>
                <Typography>Filter Panel</Typography>
              </AccordionSummary>{' '}
              <AccordionDetails>
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
              </AccordionDetails>
            </Accordion>
          </>
        </Box>
      </Box>
    </>
  );
};
