import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newStudent, setNewStudent] = useState({ name: '', rollNo: '' });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/students');
      setStudents(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch students');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/students', newStudent);
      setStudents([...students, response.data]);
      setNewStudent({ name: '', rollNo: '' });
    } catch (err) {
      setError('Failed to add student');
      console.error(err);
    }
  };

  const handleInputChange = (e) => {
    setNewStudent({
      ...newStudent,
      [e.target.name]: e.target.value
    });
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="app">
      <h1>Student Management System</h1>
      
      {error && <div className="error">{error}</div>}

      {/* Add Student Form */}
      <div className="add-student-form">
        <h2>Add New Student</h2>
        <form onSubmit={handleAddStudent}>
          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={newStudent.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="rollNo"
            placeholder="Roll Number"
            value={newStudent.rollNo}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Add Student</button>
        </form>
      </div>

      {/* Students List */}
      <div className="students-list">
        <h2>Students List</h2>
        {students.length === 0 ? (
          <p>No students found</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Roll Number</th>
              </tr>
            </thead>
            <tbody>
              {students.map(student => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.rollNo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;