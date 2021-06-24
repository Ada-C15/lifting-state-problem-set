const ClassInfo = (props) => {
    return(
        <section>
            <h1>Class Information</h1>
            <ul>
                <li>Number of students: {props.numStudents}</li>
            </ul>
        </section>
    )

}

export default ClassInfo;