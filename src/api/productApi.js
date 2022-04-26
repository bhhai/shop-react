import axiosClient from './axiosClient';

const productApi = {
  async getAll(params) {
    const url = '/products'; //trỏ đến api category

    const newParams = { ...params };
    //tính start. công thức: page - 1 * limit
    newParams._start =
      !params._page || params._page <= 1
        ? 0
        : (params._page - 1) * (params._limit || 50);
    //remove un-needed key
    delete newParams._page;

    //Fetch product list
    const productList = await axiosClient.get('/products', {
      params: newParams,
    });
    const count = await axiosClient.get('/products/count', {
      params: newParams,
    }); //đếm tổng số item
    return {
      data: productList,
      pagination: {
        page: params._page,
        limit: params._limit,
        total: count,
      },
    };
  },
  get(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = '/products';
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/products/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  },
};

export default productApi;
