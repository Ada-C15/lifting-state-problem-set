import Student from './Student'

const StudentList = (props) => {
    const studentComponents = props.students.map((student,i) => {
        return (
            <li key={i}><Student name={student.name} email={student.email} isPresent={student.isPresent} onUpdateStudent={props.onUpdateStudent}></Student></li>
            );
            
    });

    return (
        <section>
            <h2>Student List</h2>
            <ul>
                {studentComponents}
            </ul>
            <button onClick={props.onDeleteStudents}>Delete All Students</button>
        </section>
    );
};

export default StudentList;