
// PACKAGES
import axios from "axios";

const postEditedData = async (newUserData , id , isIdLoaded) => {
    if(isIdLoaded){
          const userData = await axios.get(
      `https://63c2988fe3abfa59bdaf89f6.mockapi.io/users/${id}`
    );
      const res = await axios.put(
        `https://63c2988fe3abfa59bdaf89f6.mockapi.io/users/${id}`,
        newUserData
      )  } 
    router.push("/");
  };
  const deleteData = async ( id , isIdLoaded) => {
    if(isIdLoaded){
    const doesUserExist = await axios.get(
      `https://63c2988fe3abfa59bdaf89f6.mockapi.io/users/${id}`
    );
    if (doesUserExist.status == 404) {
      return;
    } else {
      const res = await axios.delete(
        `https://63c2988fe3abfa59bdaf89f6.mockapi.io/users/${id}`
      );
      router.push("/");
    }}
  };

export {postEditedData , deleteData}