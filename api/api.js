import axios from "axios";
const getAllUsers = async () => {
  const res = await axios.get(
    `https://63c2988fe3abfa59bdaf89f6.mockapi.io/users`
  );
  return res.data;
};

const getUser = async (id) => {
  const res = await axios.get(
    `https://63c2988fe3abfa59bdaf89f6.mockapi.io/users/${id}`
  );

  return res.data;
};

const deleteUser = async (id) => {
  const doesUserExist = await getUser(id);
  if (doesUserExist) {
    return axios.delete(
      `https://63c2988fe3abfa59bdaf89f6.mockapi.io/users/${id}`
    );
  }
};

const updateUser = async (newUserData) => {
  const { id } = newUserData;
  const userData = getUser(id);
  if (userData !== newUserData) {
    return axios.put(
      `https://63c2988fe3abfa59bdaf89f6.mockapi.io/users/${id}`,
      newUserData
    );
  }
};

const createUser = async (newUserData) => {
return axios.post(
    `https://63c2988fe3abfa59bdaf89f6.mockapi.io/users`,
    newUserData
  );
};

export { getAllUsers, getUser, deleteUser, updateUser, createUser };
