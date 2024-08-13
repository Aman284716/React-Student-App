import axios from 'axios';

const API_URL = "http://localhost:5000/students";

export const fetchStudents = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching students:", error);
    throw error;
  }
};

export const addStudent = async (newStudent) => {
  try {
    const response = await axios.post(API_URL, newStudent);
    return response.data;
  } catch (error) {
    console.error("Error adding student:", error);
    throw error;
  }
};

export const updateStudent = async (id, updatedStudent) => {
  try {
    await axios.put(`${API_URL}/${id}`, updatedStudent);
  } catch (error) {
    console.error("Error updating student:", error);
    throw error;
  }
};
