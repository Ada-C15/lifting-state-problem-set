import './App.css';
import { useState } from 'react';
import StudentList from './components/StudentList'
import ClassInfo from './components/ClassInfo'

function App() {

  const [studentData, setStudentData] = useState([
    {
      name: 'Ada',
      email: 'ada@dev.org',
      isPresent: true
    },
    {
      name: 'Soo-ah',
      email: 'sooah@dev.org',
      isPresent: true
    },
    {
      name: 'Chrissy',
      email: 'chrissy@dev.org',
      isPresent: true
    }
  ]);
  
  const deleteStudentData = () => {
    console.log("delete")
    setStudentData([])
  }

  const updateStudentData = (updatedStudent) => {
    const students = studentData.map(student => {
        if (student.name === updatedStudent.name) {
            return updatedStudent;
        } else {
            return student;
        }
    });

    setStudentData(students);
};

  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo numStudents={studentData.length}></ClassInfo>
      <StudentList students={studentData} onDeleteStudents={deleteStudentData} onUpdateStudent={updateStudentData}></StudentList>
    </main>
  );
}

export default App;
