
const abbreviate__middleName = (name) => {
    return name.charAt(0) + "." // abbreviate middle name
}

const format__dob = (dob) =>{
    // console.log(dob, typeof dob)
    const months = {
                    '1': 'January',
                    '2': 'February',
                    '3': 'March',
                    '4': 'April',
                    '5': 'May', 
                    '6': 'June',
                    '7': 'July',
                    '8': 'August',
                    '9': 'September',
                    '10': 'October',
                    '11': 'November',
                    '12': 'December'
                    }
        let split__date = dob.split('/')
          
        console.log(split__date, split__date[0])
}

const Student = (student) => {
    
    // console.log(student, student.student.names, student.student.dob)
    return(
        <div>
            <h3>{student.student.names.preferredName} {abbreviate__middleName(student.student.names.middleName)} {student.student.names.surname} </h3>
            <h5>{student.student.username}</h5>
            <h5> Birthday: {format__dob(student.student.dob)}</h5>
            <a href="#"> Show More...</a>
        </div>
    )
}
export default Student