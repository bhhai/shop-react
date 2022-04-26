import React from 'react';
import PropTypes from 'prop-types';
import FilterByCategory from './filters/FilterByCategory';
import { Box } from '@mui/system';

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
  const handleCategoryChange = (newCategoryId) => {
    if (!onChange) return;

    const newFilters = {
      ...filters,
      'category.id': newCategoryId,
    };

    onChange(newFilters);
  };

  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange} />
    </Box>
  );
}

export default ProductFilters;
