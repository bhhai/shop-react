import { makeStyles } from '@material-ui/styles';
import { Container, Grid, Pagination, Paper } from '@mui/material';
import { Box } from '@mui/system';
import productApi from 'api/productApi';
import React, { useEffect, useState } from 'react';
import ProductFilters from '../components/ProductFilters';
import ProductList from '../components/ProductList';
import ProductSekeletonList from '../components/ProductSekeletonList';
import ProductSort from '../components/ProductSort';

ListPage.propTypes = {};

const useStyle = makeStyles((theme) => ({
  root: {},
  left: {
    textAlign: 'left',
    width: '250px',
  },
  right: {
    flex: '1 1 0',
    textAlign: 'left',
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row nowrap',
    marginTop: '30px',
    paddingBottom: '20px',
  },
}));

function ListPage(props) {
  const classes = useStyle();
  const [pagination, setPagination] = useState({
    limit: 10,
    total: 12,
    page: 1,
  }); //luu data da fetch vao state

  const [productList, setProductList] = useState([]); //luu data da fetch vao state
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 12,
    _sort: 'salePrice:ASC',
  });

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters);
        setProductList(data.data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed to fetch product list', error);
      }

      setLoading(false);
    })();
  }, [filters]); //get lai data moi khi filters thay doi

  const handlePageChange = (e, page) => {
    setFilters((prevFilter) => ({
      ...prevFilter,
      _page: page,
    }));
  };

  const handleSortChange = (newSortValue) => {
    setFilters((prevFilter) => ({
      ...prevFilter,
      _sort: newSortValue,
    }));
  };

  const handleFiltersChange = (newFilters) => {
    setFilters((prevFilter) => ({
      ...prevFilter,
      ...newFilters,
    }));
  };
  return (
    <Box>
      <Container>
        <Grid container>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              <ProductFilters
                filters={filters}
                onChange={handleFiltersChange}
              />
            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <ProductSort
                currentSort={filters._sort}
                onChange={handleSortChange}
              />

              {loading ? (
                <ProductSekeletonList length={12} />
              ) : (
                <ProductList data={productList} />
              )}
              <Box className={classes.pagination}>
                <Pagination
                  color="primary"
                  count={Math.ceil(pagination.total.data / pagination.limit)}
                  page={pagination.page}
                  onChange={handlePageChange}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
