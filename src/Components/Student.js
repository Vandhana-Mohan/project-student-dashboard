
const Student = (student) => {
    console.log(student, student.student.names, student.student.dob)
    return(
        <div>
            <h3>{student.student.names.preferredName} {student.student.names.middleName} {student.student.names.surname} </h3>
            <h5>{student.username}</h5>
            <h5> Birthday: {student.student.dob}</h5>
            <a href="#"> Show More...</a>
        </div>
    )
}
export default Student