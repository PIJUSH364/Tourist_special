import { Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ListItem = ({
  item: {
    id,
    title,
    serviceTime,
    deliveryFee,
    category,
    cuisine,
    rating,
    price,
    coverSrc,
  },
}) => {
  const [mouseOverStatus, setMouseOverStatus] = useState(false);
  const zoomInOut = mouseOverStatus ? 'scale(1.1)' : 'scale(1)';
  const indexValue = useSelector((state) => state.dom.zIndexValue);
  console.log(indexValue);
  const zIndex = {
    zIndex: indexValue,
  };

  return (
    <div className="listItem-warp">
      <img
        id={'my-element'}
        onPointerEnter={() => setMouseOverStatus(!mouseOverStatus)}
        onPointerLeave={() => setMouseOverStatus(!mouseOverStatus)}
        src={coverSrc}
        alt="item"
        style={{
          position: 'relative',
          width: '100%',
          borderRadius: '15px',
          height: '200px',
          objectFit: 'cover',
          cursor: 'pointer',
          transform: zoomInOut,
          ...zIndex,
          transition: 'all 1s ease-in-out',
        }}
      />
      <Stack
        justifyContent="space-between"
        margin="1rem 0"
        alignItems="center"
        direction="row">
        <h4>{title}</h4>
        <span
          style={{
            fontSize: '-7rem',
            backgroundColor: '#97ffff',
            padding: '0.5rem',
            borderRadius: '10px',
          }}>
          {' '}
          🌟{rating}
        </span>
      </Stack>
      <Stack
        direction="row"
        fontSize="0.8rem"
        justifyContent="space-between"
        alignItems="center">
        <p>
          <b>{serviceTime}</b>{' '}
          <span
            style={{
              color: 'rgba(0,0,0,.26)',
              fontWeight: 600,
            }}>
            deliveryFee $ {deliveryFee}
          </span>
        </p>{' '}
        <p>
          <b>${price}</b>
        </p>
      </Stack>
    </div>
  );
};

export default ListItem;
 
  // // onPointerEnter={() => setMouseOverStatus(!mouseOverStatus)}