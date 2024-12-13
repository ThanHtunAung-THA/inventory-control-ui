/**
 * 
 */
import axios from 'axios';

export const fetchAllUserData = async () => {
  return await axios.get('http://localhost:8000/api/user/get');
};

// ==========================

export const fetchProfileData = async ( type, userID ) => {
  return await axios.get(`http://localhost:8000/api/${type}/get/${userID}`);
};

export const updateProfileData = async ( type, userID, data ) => {
  return await axios.post(`http://localhost:8000/api/${type}/edit/${userID}`, data);
};
