
import PropTypes from "prop-types";

const Student = (props) => {

    const togglePresence = () => {
        const updatedStudent = {
            name: props.name,
            email: props.email,
            isPresent: !props.isPresent
        };

        // Invoke the function passed in through the prop named "onUpdate"
        // This function is referenced by the name "updateStudentData" in App
        props.onUpdateStudent(updatedStudent);
    };

    return (
        <div className={props.isPresent ? 'student green' : 'student red'}>
            <ul>
                <li>Nickname: {props.name}</li>
                <li>Email: {props.email}</li>
            </ul>

            <button onClick={togglePresence}>Mark {props.isPresent ? 'Absent' : 'Present'}</button>
        </div>
    );
};

Student.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
};

export default Student;