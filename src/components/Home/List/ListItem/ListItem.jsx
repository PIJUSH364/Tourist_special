import { Stack } from '@mui/material';
import React from 'react';

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
  return (
    <div className="listItem-warp">
      <img
        src={coverSrc}
        alt="item"
        style={{
          width: '100%',
          borderRadius: '15px',
          height: '200px',
          objectFit: 'cover',
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
