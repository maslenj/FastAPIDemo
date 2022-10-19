import React from 'react'

function Student(props) {
    return (
        <div>
            <div>
                First name: {props.student.firstName}
            </div>
            <div>
                Last name: {props.student.lastName}
            </div>
            <hr />
        </div>
    )
}

export default Student;