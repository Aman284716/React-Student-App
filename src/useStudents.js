import { useState, useEffect } from 'react';
import { fetchStudents, addStudent, updateStudent } from './studentService';

export const useStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const loadStudents = async () => {
      try {
        const data = await fetchStudents();
        setStudents(data);
      } catch (error) {
        console.error("Error loading students:", error);
      }
    };

    loadStudents();
  }, []);

  const handleAddStudent = async (rollNumber, name, email, phone) => {
    const newStudent = { rollNumber, name, email, phone };
    try {
      const student = await addStudent(newStudent);
      setStudents((prevStudents) => [...prevStudents, student]);
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  const handleCheckin = async (rollNumber) => {
    const updatedStudents = students.map((student) => {
      if (student.rollNumber === rollNumber) {
        return { ...student, checkinTime: new Date().toLocaleTimeString() };
      }
      return student;
    });

    const studentToUpdate = updatedStudents.find(
      (student) => student.rollNumber === rollNumber
    );

    try {
      await updateStudent(studentToUpdate.id, studentToUpdate);
      setStudents(updatedStudents);
    } catch (error) {
      console.error("Error updating checkin time:", error);
    }
  };

  const handleCheckout = async (rollNumber) => {
    const updatedStudents = students.map((student) => {
      if (student.rollNumber === rollNumber) {
        return { ...student, checkoutTime: new Date().toLocaleTimeString() };
      }
      return student;
    });

    const studentToUpdate = updatedStudents.find(
      (student) => student.rollNumber === rollNumber
    );

    try {
      await updateStudent(studentToUpdate.id, studentToUpdate);
      setStudents(updatedStudents);
    } catch (error) {
      console.error("Error updating checkout time:", error);
    }
  };

  return { students, handleAddStudent, handleCheckin, handleCheckout };
};
