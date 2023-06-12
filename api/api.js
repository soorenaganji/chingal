import axios from "axios";
const BASE_URL = "https://63c2988fe3abfa59bdaf89f6.mockapi.io/users"
const getAllUsers = async () => {
  const res = await axios.get(`${BASE_URL}`);
  return res.data;
};

const getUser = async (id) => {
  const res = await axios.get(`${BASE_URL}/${id}`);

  return res.data;
};

const deleteUser = async (id) => {
  const doesUserExist = await getUser(id);
  if (doesUserExist) {
    return axios.delete(`${BASE_URL}/${id}`);
  }
};

const updateUser = async (newUserData) => {
  const { id } = newUserData;
  const userData = getUser(id);
  if (userData !== newUserData) {
    return axios.put(`${BASE_URL}/${id}`, newUserData);
  }
};

const createUser = async (newUserData) => {
  return axios.post(`${BASE_URL}`, newUserData);
};

export { getAllUsers, getUser, deleteUser, updateUser, createUser };
