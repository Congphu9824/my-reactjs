import axiosClient from './axiosClient';

const categoriApi = {
  getAll(params) {
    const url = '/categories';
    return axiosClient.get(url, { params: params });
  },
  get(id) {
    const url = `/categories/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = '/categories';
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/categories/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/categories/${id}`;
    return axiosClient.delete(url);
  },
};

export default categoriApi;
