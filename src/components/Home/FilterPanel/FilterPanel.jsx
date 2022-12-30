import React from 'react';
import { categoryList, ratingList } from '../../../Constants/data';
import CheckBoxProton from '../../common/CheckBoxProton/CheckBoxProton';
import { FilterListToggle } from '../../common/FilterListToggle/FilterListToggle';
import SliderProton from '../../common/SliderProton/SliderProton';

export const FilterPanel = ({
  selectCategory,
  selectToggle,
  selectedRating,
  selectRating,
  cuisines,
  changeChecked,
  changePrice,
  selectedPrice,
}) => {
  return (
    <div>
      {/* category */}
      <div
        className="input-group"
        style={{
          marginBottom: '2rem',
        }}>
        <p
          className="label"
          style={{
            marginBottom: '0.8rem',
            fontWeight: 600,
          }}>
          Category
        </p>{' '}
        <FilterListToggle
          options={categoryList}
          value={selectCategory}
          selectToggle={selectToggle}
        />
      </div>
      {/* Cuisines */}
      <div
        className="input-group"
        style={{
          marginBottom: '2rem',
        }}>
        <p
          className="label"
          style={{
            marginBottom: '0.8rem',
            fontWeight: 600,
          }}>
          Cuisines
        </p>{' '}
        {cuisines.map((cuisine) => (
          <CheckBoxProton
            key={cuisine.id}
            cuisine={cuisine}
            changeChecked={changeChecked}
          />
        ))}
      </div>
      {/* price range */}{' '}
      <div
        className="input-group"
        style={{
          marginBottom: '2rem',
          marginRight: '1rem',
        }}>
        <p
          className="label"
          style={{
            marginBottom: '2.5rem',
            fontWeight: 600,
          }}>
          price range
        </p>{' '}
        <SliderProton value={selectedPrice} changePrice={changePrice} />
      </div>
      {/* star rating */}
      <div
        className="input-group"
        style={{
          marginBottom: '2rem',
        }}>
        <p
          className="label"
          style={{
            marginBottom: '0.8rem',
            fontWeight: 600,
          }}>
          Star rating
        </p>{' '}
        <FilterListToggle
          options={ratingList}
          value={selectedRating}
          selectToggle={selectRating}
        />
      </div>
    </div>
  );
};
