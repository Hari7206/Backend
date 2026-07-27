const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const students = [
  { id: 1, name: 'John Doe', rollNo: '2024001' },
  { id: 2, name: 'Jane Smith', rollNo: '2024002' },
  { id: 3, name: 'Bob Johnson', rollNo: '2024003' },
  { id: 4, name: 'Alice Williams', rollNo: '2024004' },
];

app.get('/api/students', (req, res) => {
  res.json(students);
});

app.get('/api/students/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }
  res.json(student);
});

app.post('/api/students', (req, res) => {
  const { name, rollNo } = req.body;
  if (!name || !rollNo) {
    return res.status(400).json({ message: 'Name and roll number are required' });
  }
  
  const newStudent = {
    id: students.length + 1,
    name,
    rollNo
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});