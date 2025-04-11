import Register from '../features/Auth/components/Register';
import axiosClient from './axiosClient';
//connect with API
const userApi = {
  register(data) {
    const url = '/auth/register';
    return axiosClient.post(url, data);
  },
};

export default userApi;
