import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Skeleton, Typography } from '@mui/material';
import { THUMBNAIL_PLACEHOLDER, STATIC_HOST } from 'constants/index';

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;
  return (
    <Box padding={1}>
      <Box padding={1} minHeight="190px">
        <img src={thumbnailUrl} width="100%" alt="" />
      </Box>
      <Box padding={1}>
        <Typography variant="body2">{product.name}</Typography>
        <Typography variant="body2">
          <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
            {new Intl.NumberFormat('vi-VN', {
              style: 'currency',
              currency: 'VND',
            }).format(product.salePrice)}
          </Box>
          {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ''}
        </Typography>
      </Box>
    </Box>
  );
}

export default Product;
