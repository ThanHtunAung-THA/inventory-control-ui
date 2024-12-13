/**
 * 
 */
import axios from 'axios';

export const fetchAllUserData = async () => {
  return await axios.get('http://localhost:8000/api/user/get');
};

// ==========================

export const fetchProfileData = async (userID) => {
  return await axios.get(`http://localhost:8000/api/admin/get/${userID}`);
};

export const updateProfileData = async (userID, data) => {
  return await axios.post(`http://localhost:8000/api/admin/edit/${userID}`, data);
};
