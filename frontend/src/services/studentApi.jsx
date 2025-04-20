import axios from "axios";

// Base URL - change this if your backend runs on a different port or host
const BASE_URL = "https://api.vyvsai.com/api/students";
// const BASE_URL = "http://localhost:8090/api/students";

// API service for student-related operations
const studentApi = {
  // Get all students
  getAllStudents: async () => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      console.error("Error fetching students:", error);
      throw error;
    }
  },

  // Create a new student
  createStudent: async (student) => {
    try {
      const response = await axios.post(BASE_URL, student);
      return response.data;
    } catch (error) {
      console.error("Error creating student:", error);
      throw error;
    }
  },

  // Update an existing student
  updateStudent: async (id, student) => {
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, student);
      return response.data;
    } catch (error) {
      console.error(`Error updating student ${id}:`, error);
      throw error;
    }
  },

  // Delete a student
  deleteStudent: async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting student ${id}:`, error);
      throw error;
    }
  },
};

export default studentApi;
